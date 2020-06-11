# Deno API Example

This is a simple REST API using Deno, Oak and PostgreSQL.

Make sure to install the [PostgreSQL](https://postgresql.org) and edit the `config.ts` file with your own credentials (user, database name and password).

## Run

```sh
denon start
# this project uses Denon
```

## Routes

```sh
GET        /api/products
GET        /api/products/:id
POST       /api/products
PUT        /api/products/:id
DELETE     /api/products/:id
```
