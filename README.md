# Movie Recommendation Web App

A full-stack web application that recommends movies based on user preferences using the OpenAI API.  
This project was built as part of a **Full Stack Developer Intern assignment**.

---

## Tech Stack

### Frontend
- React 

### Backend
- Node.js 
- OpenAI API

### Database
- SQLite (better-sqlite3)

---

## Prerequisites (IMPORTANT)

Before running the project, ensure the following are installed:

- **Node.js v18 or v20 (LTS only)**
  - ❌ Node v25 or other non-LTS versions are NOT supported
  - Download from: https://nodejs.org (choose LTS)

Verify your Node version:
```bash
node -v
```

---

## Project Structure

```
movie-recommendation-app/
│
├── backend/
│   ├── db/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│
└── README.md
```

---

## Backend Setup (Fastify + SQLite)

### Step 1: Navigate to backend folder
```bash
cd backend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Configure environment variables

Create a `.env` file inside the `backend` folder:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

You can copy `.env.example` and rename it to `.env`.

---

### Step 4: Start backend server
```bash
node server.js
```

Backend will run on:
```
http://localhost:3001
```

SQLite database (`movies.db`) is auto-created on first run.

---

## Frontend Setup (React)

### Step 1: Open a new terminal and navigate to frontend
```bash
cd frontend
```

### Step 2: Install dependencies
```bash
npm install
```

### Step 3: Start frontend
```bash
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## How to Use the App

1. Open the frontend URL in your browser
2. Enter a movie preference, for example:
   - `Action movies with a strong female lead`
3. Click **Get Recommendations**
4. Receive **3–5 AI-generated movie suggestions**

All user inputs and recommendations are stored in SQLite.

---

## Common Issues & Fixes

### ❌ Error: better-sqlite3 install failed

**Cause**
- Using Node.js v25 or another non-LTS version

**Fix**
```bash
Install Node.js v20 LTS
Delete node_modules and package-lock.json
Run npm install again
```

---

## Assignment Compliance

- ✔ React frontend
- ✔ Fastify backend
- ✔ OpenAI-powered recommendations
- ✔ SQLite persistence
- ✔ Local setup instructions
- ✔ Clean and modular architecture

---

## Author

Ayush Rawat

---

**End of README**
