# Project Created Using NestJS, Docker, PostgreSQL

This project created with:

- Backend: [NestJS](https://nestjs.com/) (in `backend/`)
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

### 5. Reset the DB (Optional)

If you want to reset the database completely:

```bash
docker-compose down -v
docker-compose up
```