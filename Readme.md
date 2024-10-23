# Daily Expenses Sharing Application - Backend

## Introduction

This backend service is built for a Daily Expenses Sharing Application, allowing users to add expenses and split them among participants using three methods: equal, exact, and percentage. It supports managing users, expenses, and generating downloadable balance sheets.

## Technologies Used

- **Node.js** (Backend runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database for storing users and expenses)
- **Mongoose** (ODM for MongoDB)
- **JSON Web Token (JWT)** (Optional - For user authentication and authorization)


## Features

- **User Management:**
    - Create and manage users (name, email, mobile number).

- **Expense Management:**
    - Add expenses.
    - Split expenses equally, by exact amounts, or by percentage.
    - Retrieve individual and overall expenses.
    - Download balance sheets.

- **Data Validation:**
    - Input validation for user details and expenses.
    - Ensure percentage splits sum up to 100%.


## API Endpoints
### 1. User Endpoints
- **Create User**
    - Endpoint: `POST /api/users`
    - Description: Creates a new user with - email, name, and mobile number.
    - Request Body:
        ```bash
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "mobile": "+1234567890"
        }
        ```

    - Response:
        - `201 Created` on success.
        - Error response if data is invalid or email already exists.
    - Retrieve User Details
        - Endpoint: `GET /api/users/:id`
        - Description: Retrieves details for a specific user by ID.
    - Response:
        - `200 OK` with user details.
        - `404 Not` Found if user is not found.


## 2. Expense Endpoints
- **Add Expense**
    - Endpoint: `POST /api/expenses`
    - Description: Adds a new expense with the amount, participants, and split method.
    - Request Body (Example for Equal Split):
        ```bash
        {
            "amount": 3000,
            "payer": "userId1",
            "participants": ["userId1", "userId2", "userId3"],
            "splitMethod": "equal"
        }
        ```


    - For Exact Split:
        ```bash
            {
                "amount": 4299,
                "payer": "userId1",
                "participants": [
                    {"userId": "userId1", "amount": 799},
                    {"userId": "userId2", "amount": 2000},
                    {"userId": "userId3", "amount": 1500}
                ],
                "splitMethod": "exact"
            }
        ```

    - For Percentage Split:
        ```bash
            {
                "amount": 10000,
                "payer": "userId1",
                "participants": [
                    {"userId": "userId1", "percentage": 50},
                    {"userId": "userId2", "percentage": 25},
                    {"userId": "userId3", "percentage": 25}
                ],
                "splitMethod": "percentage"
            }
        ```


    - **Response:**
        - `201` Created on success.
        - `400` Bad Request if the percentages don't add up to 100% or other validation issues.
    **Retrieve Individual User Expenses**
        - Endpoint: `GET /api/expenses/user/:userId`
        - Description: Retrieves all expenses associated with a specific user.
        - Response:
            - `200 OK` with list of expenses.

    **Download Balance Sheet**
        - Endpoint: `GET /api/expenses/balancesheet/download`
        - Description: Downloads the balance sheet as a CSV or PDF file.
        - Response:
            - A file with the balance sheet showing user-wise and overall expenses.



## Installation Instructions
**1. Clone the repository:**
```bash
    git clone <repository-url>
    cd expenses-sharing-app-backend
```

**2. Install dependencies:**
```bash
    npm install
```
**3. Set up environment variables: Create a `.env` file in the root of the project with the following:**

```bash
    PORT=5000
    MONGO_URI= 'YOUR_MONGO_URI'
    JWT_SECRET=your_jwt_secret_key   # Only if implementing JWT-based authentication
```

**3. Run the development server:**
```bash
npm server.js
```



If you have any questions or suggestions, feel free to contribute or raise an issue!
