import * as knex from 'knex';

export const Knex = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '123',
        database: 'dw_aca_vest',
    },
});
