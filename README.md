# Employee Payroll App

A simple Employee Payroll application built with Node.js, Express, and EJS. It lets you add, edit, delete, and view employee records stored in a local `employees.json` file.

## Features

- View all employee records on the dashboard
- Add a new employee
- Edit an existing employee
- Delete an employee
- Store employee data in a JSON file
- Serve static assets such as CSS and images from the `public` folder

## Tech Stack

- Node.js
- Express
- EJS
- File-based JSON storage

## Project Structure

```text
payroll-app/
├── employees.json
├── package.json
├── server.js
├── modules/
│   └── filehandler.js
├── public/
├── views/
│   ├── add.ejs
│   ├── edit.ejs
│   └── index.ejs
```

## Prerequisites

- Node.js installed on your system
- npm installed with Node.js

## Installation

1. Clone or open the project folder.
2. Install dependencies:

```bash
npm install
```

## Running the App

Start the server with:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

## Usage

### Dashboard

The home page shows all employee records loaded from `employees.json`.

### Add Employee

Click **Add Employee** to open the form at `/add`.

Required fields:

- Name
- Gender
- At least one department
- Salary
- Start date
- Notes

### Edit Employee

Use the edit icon on the dashboard to update an existing employee.

### Delete Employee

Use the delete icon on the dashboard to remove an employee record.

## Employee Data Format

Each employee is stored as an object like this:

```json
{
  "id": 1771449145837,
  "name": "Surya",
  "gender": "Male",
  "department": ["HR"],
  "salary": 30000,
  "startDate": "2024-11-30",
  "notes": "just for Testing"
}
```

## Routes

- `GET /` - Show all employees
- `GET /add` - Show the add employee form
- `POST /add` - Create a new employee
- `GET /edit/:id` - Show the edit form for a specific employee
- `POST /edit/:id` - Update an employee
- `GET /delete/:id` - Delete an employee

## Notes

- Employee records are persisted in `employees.json`.
- Department values are stored as an array.
- The app currently runs on port `3000`.

## License

ISC
