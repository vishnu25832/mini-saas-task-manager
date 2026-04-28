# Mini SaaS Task Manager

A full-stack task management application with authentication, user-specific data, and CRUD operations.

---

## 🚀 Live Demo

* Frontend: [https://your-app.vercel.app](https://mini-saas-task-manager-gray.vercel.app/)
* Backend API: [https://your-backend.onrender.com](https://mini-saas-task-manager-q171.onrender.com)

---

## 📌 Features

* User signup & login (JWT authentication)
* Secure API with protected routes
* Create, read, update, delete tasks
* User-specific data isolation
* Persistent storage using PostgreSQL
* Fully deployed (frontend + backend + DB)

---

## 🛠️ Tech Stack

**Frontend**

* React (Vite)
* Axios

**Backend**

* Node.js
* Express.js
* Sequelize ORM

**Database**

* PostgreSQL (Neon)

**Deployment**

* Vercel (Frontend)
* Render (Backend)

---

## ⚙️ Installation (Local Setup)

### 1. Clone repo

```bash
git clone https://github.com/vishnu25832/mini-saas-task-manager.git
cd mini-saas-task-manager
```

---

### 2. Backend setup

```bash
cd backend
npm install
```

Create `.env`:

```env
DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret
```

Run server:

```bash
node server.js
```

---

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🔐 API Endpoints

### Auth

* POST `/auth/signup`
* POST `/auth/login`

### Tasks (Protected)

* GET `/tasks`
* POST `/tasks`
* PUT `/tasks/:id`
* DELETE `/tasks/:id`

---

## 🔑 Authentication

* JWT-based authentication
* Token stored in localStorage
* Sent via Authorization header:

```text
Bearer <token>
```

---

## 🧠 Architecture

* MVC pattern (controllers, routes, models)
* Sequelize for DB abstraction
* Middleware for auth protection
* REST API structure

---

## 📸 Demo Flow

1. Signup
2. Login
3. Create tasks
4. Toggle status
5. Delete tasks
6. Multi-user isolation

---

## ⚠️ Known Limitations

* No password reset
* Minimal UI (focus on functionality)
* No role-based access

---

## 📈 Future Improvements

* Add due dates & priorities
* UI improvements
* Pagination
* Search & filters
* Notifications

---

## 👤 Author

Vishnu Vardhan
GitHub: [https://github.com/vishnu25832](https://github.com/vishnu25832)

