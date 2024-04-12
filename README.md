<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute on Development Mode

1. Clone the repository
2. Run `npm install` or `npm i `
3. Have Nest CLI installed globally (if not):
    ```bash
    npm i -g @nestjs/cli
    ```
4. Run docker compose to start the database:
    ```bash
    docker-compose up -d
    ```
5. Clone the file __.env.template__ and rename to __.env__ and fill the variables with the correct values.

6. Run the application on development mode:
    ```bash
    npm run start:dev
    ```

7. Run the seed on development mode:
  ```
  GET http://localhost:3000/api/v2/seed 
  ```


## Application Stack

- [NestJS](https://nestjs.com/)
- [MongoDB]( https://www.mongodb.com/)
