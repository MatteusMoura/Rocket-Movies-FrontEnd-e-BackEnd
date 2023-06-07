exports.up = knex => knex.schema.createTable('tags', table => {
    table.increments("id");
    table.text('name').notNullable();
    table.integer('note_id').references('id').inTable('notes').onDelete('CASCADE')
    // dizendo que o id dessa nota faz referência ao id do usuário que está na tabela 'users'
    table.integer('user_id').references('id').inTable('users')
});

exports.down = knex => knex.schema.dropTable('tags')

// Knex para criar a tabela independente do banco de dados que estiver utilizando