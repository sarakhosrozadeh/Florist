# Flower Shop Website Project

This repository contains a web application for a flower shop, implemented with React for the frontend, FastAPI for the backend, and PostgreSQL for the database.

## Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)

Additionally, you'll need to have npm and pip installed for package management.

## Getting Started

### Clone the Repository:

```bash
git clone https://github.com/sarakhosrozadeh/florist.git

```

Activate the virtual environment:

    On Windows: venv\Scripts\activate
    On macOS/Linux: source venv/bin/activate

Install dependencies:

```bash

pip install -r backend/requirements.txt
```
Set up PostgreSQL and configure backend/.env with database details.

Run migrations:

```bash

cd backend
alembic upgrade head
```
Frontend Setup:

```bash

cd frontend
npm install
```
Running the App:

    Start the backend (from the root directory):

    ```bash

uvicorn backend.main:app --reload
```
Start the frontend (from the frontend directory):

```bash

    npm start
```
Testing:

    Backend tests:

    ```bash

cd backend
pytest
```
Frontend tests:

```bash

cd frontend
npm test
```
Populate the database if needed.
