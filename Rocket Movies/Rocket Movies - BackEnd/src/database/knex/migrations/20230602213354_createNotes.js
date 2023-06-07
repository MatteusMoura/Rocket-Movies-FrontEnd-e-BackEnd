exports.up = knex => knex.schema.createTable('notes', table => {
    table.increments("id");
    table.text('title')
    table.text('description')
    table.integer('rating')
    table.integer('user_id').references('id').inTable('users')
    // dizendo que o id dessa nota faz referência ao id do usuário que está na tabela 'users'
    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('notes')


// Knex para criar a tabela independente do banco de dados que estiver utilizando