import { Client } from 'pg';

export async function getClient() {
    const client = new Client({host: "localhost",
        port: 5432,
        user: "postgres",
        password: "Ravi@7035",
        database: "testdb"
});
    await client.connect();
    return client;
}