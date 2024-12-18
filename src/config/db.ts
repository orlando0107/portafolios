import { Pool } from 'pg';
import {ConfigEnvs} from './ConfigEnvs'
import {createTablesQuery} from './init'

export const pool = new Pool({
  host: ConfigEnvs.DATABASE_HOST,
  user: ConfigEnvs.DATABASE_USER,
  password: ConfigEnvs.DATABASE_PASSWORD,
  database: ConfigEnvs.DATABASE_NAME,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

//init
export async function setupDatabase() {
  try {
    const client = await pool.connect();
    const res = await client.query(
      "SELECT to_regclass('public.users') AS table_exists;"
    );
    if (res.rows[0].table_exists) {
      console.log("Tables already exist. Skipping setup.");
    } else {
      await client.query(createTablesQuery);
      console.log("Tables created successfully");
    }
    client.release();
  } catch (error) {
    console.error("Error creating tables:", error);
  } finally {
    await pool.end();
  }
}

setupDatabase();
// option 2 string conection
//const pool = new Pool({ connectionString: process.env.DATABASE_URL }
