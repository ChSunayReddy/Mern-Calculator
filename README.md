# Mern-Calculator
# 🧮 MERN Calculator

A full-stack MERN (MongoDB, Express, React, Node.js) calculator that supports:
- Basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- Advanced functions: Factorial, GCD (Greatest Common Divisor), and LCM (Least Common Multiple)

---

## 📂 Project Structure

mern-calc/
│
├── backend/ # Express backend
│ └── server.js # Handles REST API routes
│
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ └── Calculator.jsx # Main calculator component with mode switching
│ │ └── index.js
│ └── package.json
│
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

✅ Arithmetic mode: Add, Subtract, Multiply, Divide  
✅ Factorial mode (one number input)  
✅ GCD/LCM mode (two number inputs)  
✅ UI mode switching: arithmetic, factorial, gcd/lcm  
✅ Backend routes built in Express  
✅ Clean and styled React UI using functional components and `useState`  

---

## 🌐 API Endpoints (Backend - Express)

| Endpoint          | Description                              | Params                  |
|------------------|------------------------------------------|-------------------------|
| `/api/calc`      | Arithmetic operation                     | `n1`, `n2`, `op` (add, sub, mul, div) |
| `/api/fact`      | Factorial of a number                    | `n1`                    |
| `/api/gcd`       | GCD of two numbers                       | `n1`, `n2`              |
| `/api/lcm`       | LCM and GCD of two numbers               | `n1`, `n2`              |

---

## 🛠️ How to Run the Project Locally

### 1. Clone the Repository

git clone https://github.com/ChSunayReddy/Mern-Calculator.git
cd Mern-Calculator
2. Run the Backend
cd backend
npm install
node server.js
Server starts at: http://localhost:5000

3. Run the Frontend
In another terminal:

cd frontend
npm install
npm start
Frontend opens at: http://localhost:3000

##Screenshots

