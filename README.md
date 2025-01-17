# UcliQ-Backend-Todos-RESTfulAPI


# Todo API
## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. Create a `.env` file and add the following:
    ```plaintext
    MONGO_URI="mongodb+srv://ucliqtodo:ucliqtodo1234@ucliqtodo.kwk1rzd.mongodb.net/?retryWrites=true&w=majority&appName=ucliqtodo"
JWT_SECRET="your_jwt_secret"
PORT = 5000
    ```
4. Run `npm start` to start the server

## API Endpoints

### To Send jwt token :

*  res.cookie('access_token', token, { httpOnly: true })

### User Registration
- `POST /api/auth/signup`
  - Request body: `{ "username": "string",email:"String" "password": "string" }`

### User Login
- `POST /api/auth/login`
  - Request body: `{ "username": "string", "password": "string" }`
  - Response: `{ "token": "string" }`

### Create Todo
- `POST /api/todo/create`
  - Request body: `{ "title": "string", "description": "string","completed":"boolean",user }`
  - use --> id of Loggdin user
### Get All Todos
- `GET /api/todo/showtodos`


### Get Todo by ID
- `GET /api/todo/:id`


### Update Todo
- `PUT /api/todo/:id`
  - Request body: `{ "title": "string", "description": "string", "completed": "boolean" }`

### Delete Todo
- `DELETE /api/todo/:id`

## Running Tests
- Run `npm test` to execute tests

## Deployment
1. Set up an account on a cloud platform (e.g., AWS, Heroku)
2. Follow the platform's instructions for deploying a Node.js application
3. Ensure environment variables are correctly configured on the platform
