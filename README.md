
This is a full-stack web application designed as a job portal. It features a backend built with Node.js and Express, connected to a MongoDB database, and a frontend built with React and Vite. The application supports user registration and login, and displays membership plans.

## Features

-   **User Authentication**: Secure user registration and login system with password hashing using `bcrypt`.
-   **Full-Stack Architecture**: Decoupled frontend and backend for maintainability and scalability.
-   **Membership Plans Display**: A dedicated page to showcase different membership tiers to users.
-   **RESTful API**: A backend API for handling user data and authentication.

## Tech Stack

**Backend:**
-   **Node.js**: JavaScript runtime environment.
-   **Express.js**: Web application framework for Node.js.
-  MySQL: Relational database for storing user data.
Sequelize: Object Relational Mapping (ORM) library for MySQL (and other SQL databases) in Node.js..
-   **bcrypt**: Library for hashing passwords.
-   **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
-   **dotenv**: Module for loading environment variables from a `.env` file.

**Frontend:**
-   **React**: JavaScript library for building user interfaces.
-   **Vite**: Next-generation frontend tooling for fast development.
-   **React Router**: For client-side routing and navigation.
-   **Axios**: For making HTTP requests to the backend API.
-   **CSS**: Custom styling for components.

## Project Structure

The repository is organized into two main directories:

-   `backend/`: Contains the Node.js/Express server, API routes, controllers, and database models.
-   `frontend/`: Contains the React application created with Vite, including all components, pages, and static assets.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or later)
-   [npm](https://www.npmjs.com/) (comes with Node.js)
-   MySQL: A running instance of MySQL.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/vijaymundargi/job-portal.git
    cd job-portal
    ```

2.  **Set up the Backend:**
    ```sh
    cd backend
    npm install
    ```
    Create a `.env` file in the `backend` directory and add the following environment variables. Replace the placeholder with your MongoDB connection string.
    ```env
    MONGO_URI=mongodb://localhost:27017/jobportal
    PORT=4000
    ```
    Start the backend server:
    ```sh
    npm run dev
    ```
    The server will be running on `http://localhost:4000`.

3.  **Set up the Frontend:**
    Open a new terminal and navigate to the frontend directory.
    ```sh
    cd frontend/job_portal
    npm install
    ```
    Start the frontend development server:
    ```sh
    npm run dev
    ```
    The application will be accessible at `http://localhost:5173`.

## API Endpoints

The backend provides the following API endpoints:

-   `POST /api/job/register`
    -   Registers a new user.
    -   **Request Body**:
        ```json
        {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "password": "yourpassword123",
          "phoneNumber": "1234567890"
        }
        ```
-   `POST /api/job/login`
    -   Logs in an existing user.
    -   **Request Body**:
        ```json
        {
          "email": "john.doe@example.com",
          "password": "yourpassword123"
        }

