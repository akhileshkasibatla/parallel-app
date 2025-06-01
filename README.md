# Project Created Using NestJS, Docker, PostgreSQL and React

This project is a full-stack application with:

- Backend: [NestJS](https://nestjs.com/) (in `backend/`)
- Frontend: [React](https://reactjs.org/) (in `frontend/`)
- Database: PostgreSQL via Docker

## Completed Deliverables

The following features and tasks were completed as part of this project:

- **Developed a web application** that allows users to input personal information about investor and upload at least one file via form for the investor.
- **Utilized Docker** to provision and run a PostgreSQL database for backend integration and data persistence.
- **Form submission functionality**: users can add an investor by submitting the form, and immediately begin entering the next investor's information. Uploaded files are saved to the server's file system.
- **Implemented unit tests** on the frontend to ensure component reliability and basic form behavior.


## Future Enhancements If Time Permitted

If time permitted, I would have considered implementing the following features:

- **Progress Bar UI**: Visual feedback for file uploads with smooth percentage transitions and color changes (e.g., red → orange → green) to enhance user experience. Implement server-side streaming in NestJS to handle file uploads over sockets for optimized large file support.
- **Authentication and Authorization**: Secure access to the form and backend APIs using JWT or OAuth-based mechanisms.
- Detect and update the address if a new user shares an existing one, rather than duplicating entries.



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