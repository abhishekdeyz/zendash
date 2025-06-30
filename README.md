# 🚀 Zendash – MERN SAAS Auth Dashboard

A fully functional SAAS-style authentication dashboard built using the MERN stack. This includes secure user registration, login, JWT-based auth, protected routes, and user profile management.

---

## 📁 Tech Stack

- *Frontend:* React.js, Tailwind CSS, React Router DOM, Axios
- *Backend:* Node.js, Express.js, MongoDB (via Mongoose), JWT
- *Database:* MongoDB Atlas
- *Tools:* VS Code, MongoDB Compass, Postman (for testing)

---

## 📌 Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 🧾 Protected Routes using ProtectedRoute component
- 👤 User Profile Fetch (/api/auth/me)
- 📊 Dashboard Overview Page
- 🚪 Logout functionality
- ✅ Clean component structure with Tailwind styling

---

## 📦 Folder Structure

zendash/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── pages/        # Login, Register, Dashboard pages
│   │   ├── components/   # Navbar, ProtectedRoute
│   │   └── App.js        # Routes defined here
│
├── server/               # Node Backend
│   ├── models/           # Mongoose User Schema
│   ├── routes/           # auth.js, dashboard.js
│   └── index.js          # Main backend server file

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo
```bash
git clone https://github.com/abhishekdeyz/zendash.git
cd zendash


2. Setup Backend
cd server
npm install


3.creat a .env file
then run the server
termila- npm start


