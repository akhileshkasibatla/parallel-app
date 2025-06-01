# Project Created Using NestJS, Docker, PostgreSQL and React

This project is a full-stack application with:

- Backend: [NestJS](https://nestjs.com/) (in `backend/`)
- Frontend: [React](https://reactjs.org/) (in `frontend/`)
- Database: PostgreSQL via Docker


## Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/) (comes with Docker Desktop)

> Make sure Docker is **installed and running** before proceeding.

> Docker is used to create and run PostgresSQL DB in your local environment.

```bash
#Test if docker is running or not with Hello World
docker run hello-world
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/akhileshkasibatla/parallel-app.git
cd parallel-app
```

### 2. Create .env file in your root directory

> Password intentionally left empty. Choose password of your choice.

```env
POSTGRES_USER=rdsadmin
POSTGRES_PASSWORD=
POSTGRES_DB=users
PGPORT=5432
```
> This file is used for both Docker and the NestJS backend configuration.

### 3. Start PostgreSQL with Docker

```bash
docker-compose up
```

### 4. Run Backend Using NestJS

```bash
cd backend
npm install --legacy-peer-deps
npm run start:dev
```

> Backend server will be started at http://localhost:3000

### 5. Reset the DB (Optional)

If you want to reset the database completely:

```bash
docker-compose down -v
docker-compose up
```

```bash
cd frontend
npm install
npm run start
```

> Navigate to http://localhost:4200 to open react application in browser

## Available Endpoints

> There are only two endpoints available in the backend:

### `GET /users`

- Returns a list of all users stored in the db.
- No parameters are required.

#### Example `curl` command:

```bash
curl http://localhost:3000/users
```

### `POST /users`

- **Creates a new user**
- Expects a `multipart/form-data` request
- Accepts the following fields (all required):
  - `firstName`
  - `lastName`
  - `dateOfBirth`
  - `phoneNumber`
  - `streetAddress`
  - `zipcode`
- Also accepts a `file` field (images, documents etc...).
- The uploaded file is stored in the backend server’s file system.

#### Example `curl` command:

```bash
curl -X POST http://localhost:3000/users \
  -F "firstName=Alan" \
  -F "lastName=Donald" \
  -F "dateOfBirth=1980-07-15" \
  -F "phoneNumber=123-456-7890" \
  -F "streetAddress=123 Main St" \
  -F "zipcode=12345" \
  -F "file=@/path/to/file.jpg"
```