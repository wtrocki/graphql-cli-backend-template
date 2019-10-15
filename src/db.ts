import knex from 'knex'
import { loadConfig } from 'graphql-config'

export async function connect(options: knex.MySqlConnectionConfig) {
  const config = await loadConfig({
    filepath: 'graphql.yml',
    rootDir: process.cwd(),
    extensions: [() => ({ name: 'generate'})]
  });
  const { db } = await config!.getDefault().extension('generate');
  return knex({
    client: db.database,
    connection: options
  })
}
