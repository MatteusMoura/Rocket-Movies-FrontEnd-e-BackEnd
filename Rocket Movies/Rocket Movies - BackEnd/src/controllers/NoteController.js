const knex = require('../database/knex');

class NotesController{
    async create(request, response) {
        const { title, description, rating, tags } = request.body;
        const user_id = request.user.id;

        const [note_id] = await knex('notes').insert({
            title,
            description,
            rating,
            user_id,
        })

        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        })

        await knex('tags').insert(tagsInsert);
    
        response.json()
    }

    async show(request, response) {
        const { id } = request.params;

        const note = await knex('notes').where({ id }).first();
    // para pegar usando o id, utiliza o filtro where, para pegar a primeira usa o first. 

        const tags = await knex('tags').where({ note_id: id }).orderBy('name')
    // mostrar as tags que estão vinculadas com o id passado

    return response.json({
        ...note,
        tags
    });

    }

    async delete(request,response) {
        const { id } = request.params;

        await knex("notes").where({ id }).delete()

        return response.json()
    }

    async index(request, response){
        const { title, tags } = request.query;

        const user_id = request.user.id;

        let notes;

        if(tags) {
            const filterTags = tags.split(',').map(tag => tag.trim());
        // tags.split(',') vai pegar as tags e colocar dentro de um array, separando elas quando encontrar uma vírgula,
        // map vai retornar as tags sem espaçamento entre uma e outra.
        // trim remove espaçamentos e tabs do array.
            
            notes = await knex('tags')
            .select([
                "notes.id",
                "notes.title",
                "notes.user_id",
            ])
            .where('notes.user_id', user_id)
        //  vai vim as tags pelo usuário que tem o id que estou enviando
            .whereLike('notes.title', `%${title}%`)
        //  filtra por um nome parecido ou que contenha algo em sua escrita que eu esteja buscando
            .whereIn('name', filterTags)
        //  procurar o nome da tag dentro das tagsfiltradas
            .innerJoin("notes","notes.id", "tags.note_id")
        // vai ir na tabela de notas e tabela de tags e juntar as que tiver o mesmo id
            .orderBy('notes.title')
        // ordenar pelo título

        } else {
            notes = await knex("notes").where({ user_id }).whereLike("title", `%${title}%`).orderBy("title");
        // whereLike para ver se tem alguma palavra parecido com a que eu estou buscando. % ante ou depois
        }

        const userTags = await knex('tags').where({ user_id });
        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id)

            return {
                ...note,
                tags: noteTags,
            }
        });
        return response.json( notesWithTags )
    }
}

module.exports = NotesController;