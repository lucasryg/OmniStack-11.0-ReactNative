
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf ', 2).notNullable();
    })

  //Para exutar a up : npx knex migrate:latest
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');

  //Para executar a down : npx knex migrate:rollback
};

//Para listar todas as migrations que ja foram criadas: npx knex migrate:status
