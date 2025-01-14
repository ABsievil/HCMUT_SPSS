# SSPS - Student Smart Printing Service
## Table of Contents

1. [Documents and Requirment](#documents-and-requirment)
2. [Technologies Used](#technologies-used)
    - [Backend](#backend)
    - [Frontend](#frontend)
    - [Database](#database)
3. [Access the server-deploy version of the web](#run-app)
4. [Prerequisites](#prerequisites)
5. [Installation Steps](#installation-steps)
6. [Running the Application Locally](#running-the-application-locally)
7. [Additional Notes](#additional-notes)
8. [Troubleshooting](#troubleshooting)


## Documents and Requirement
About documents, System modeling, Architectural design, and User Interface mockups, we put them all in `HCMUT_SSPS Docs` folder

## Access the server-deploy version of the web
Those who prefer running the app locally, please proceed to the `Prerequisites` step

- Client: https://hcmut-spss.azurewebsites.net
- Server: https://hcmut-spss-server.azurewebsites.net

for account access, please go to `Reference/ACCESS.md`

## Technologies Used

This repository contains a web application with a Java Spring Boot backend, a React frontend integrated with Vite and Tailwind CSS, and PostgreSQL as the database. This document outlines the required dependencies, installation steps, and instructions for running the application locally.
### Backend
- **Java Spring Boot**: Version 3.2.10

### Frontend
- **React**: Version 18.3.1
- **Vite**: Version 5.4.1
- **Tailwind CSS**: Version 3.4.13

### Database
- **PostgreSQL**: Version 12.2

## Prerequisites

Ensure the following are installed on your system:

- **Java**: JDK 17 or later
- **Node.js**: Version 20.17.0
- **npm**: Version 10.8.2
- **Git**

## Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ABsievil/HCMUT_SPSS.git
   ```

2. **Set up the Backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend-springboot
     ```
   - Install dependencies and build the project:
     ```bash
     ./mvnw clean install
     ```

3. **Set up the Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend-react
     ```
   - Install dependencies:
     ```bash
     npm install
     ```

4. **Run PostgreSQL Database**:
   - No need to do anything here because the database is already on the server


## Running the Application Locally

1. **Start the Backend**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend-springboot
     ```
   - Run the application:
     ```bash
     ./mvnw spring-boot:run
     ```
   - The backend will start at `http://localhost:8090`.

2. **Start the Frontend**:
   - Navigate to the `frontend` directory:
     ```bash
     cd ../frontend-react
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```
   - The frontend will start at `http://localhost:5173`.

3. **Access the Application**:
   - Open a web browser and navigate to `http://localhost:5173`

## Additional Notes

- **Environment Variables**: You can use environment files (e.g., `.env`) for sensitive data in both the backend and frontend. Refer to the documentation of each framework for more details.
- **Testing**:
  - Backend: Run `./mvnw test` in the `backend-springboot` directory.
  - Frontend: Run `npm run test` in the `frontend-react` directory.

## Troubleshooting

- Ensure all required dependencies are installed and versions match the specified requirements.
- Check the logs for detailed error messages if something goes wrong.
