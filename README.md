# Daily Expenses Sharing Application

## Objective

Design and implement a backend for a daily-expenses sharing application. This application allows users to add expenses and split them based on three different methods: exact amounts, percentages, and equal splits. The application manages user details, validates inputs, and generates downloadable balance sheets.

## Requirements

### User Management

- Each user should have an email, name, and mobile number.

### Expense Management

- Users can add expenses.
- Expenses can be split using three methods:
  1. **Equal**: Split equally among all participants.
  2. **Exact**: Specify the exact amount each participant owes.
  3. **Percentage**: Specify the percentage each participant owes (ensure percentages add up to 100%).

### Expense Calculation Examples

1. **Equal:**
   - Scenario: You go out with 3 friends. The total bill is 3000. Each friend owes 1000.
2. **Exact:**
   - Scenario: You go shopping with 2 friends and pay 4299. Friend 1 owes 799, Friend 2 owes 2000, and you owe 1500.
3. **Percentage:**
   - Scenario: You go to a party with 2 friends and one of your cousins. You owe 50%, Friend 1 owes 25%, and Friend 2 owes 25%.

### Balance Sheet

- Show individual expenses.
- Show overall expenses for all users.
- Provide a feature to download the balance sheet.
![WhatsApp Image 2024-07-28 at 9 37 29 PM](https://github.com/user-attachments/assets/ae201ab5-a932-4345-8468-835a679cd2aa)


## API Endpoints

### User Endpoints

- **POST /users**: Create a new user.
- **GET /users/:id**: Retrieve user details by ID.

### Expense Endpoints

- **POST /expenses**: Add a new expense.
- **GET /expenses/user/:userId**: Retrieve individual user expenses by user ID.
- **GET /expenses**: Retrieve overall expenses.
- **GET /expenses/balance-sheet**: Download the balance sheet.

## Setup and Installation Instructions

### Prerequisites

- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/KhushiJukanti/convin-assignment
cd convin-assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root directory and add your MongoDB URI:

```bash
MONGO_URI=your_mongodb_uri
```

### 4. Start the Server

```bash
node index.js
```
