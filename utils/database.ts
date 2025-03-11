import { Client } from 'pg';

exports.handler = async () => {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgress',
        database: 'shop_co'
    });

    await client.connect();

    const result = await client.query('SELECT * FROM table');

    await client.end();

    return result.rows;
};