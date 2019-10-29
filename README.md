## GraphQL CLI Basic Template

Starter template using graphback and apollo-server

### Usage
The project has been created using `graphback`. Run the project using the following steps. 
- Start the database
```
docker-compose up -d
```
- Generate resources(schema and resolvers) and create database
```
yarn graphql generate --db
yarn graphql generate --backend
```
- Start the server
```
yarn start
```