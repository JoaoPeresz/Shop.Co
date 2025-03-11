import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ecomerce_shop_co',
    password: 'senha',
    port: 5432,
});

export default pool;
