# Content of Project
* [General Info](#general-Info)  
* [Setup Instructions](#setup-instructions)
* [Architecture Overview](#architecture-overview)
* [Testing Instructions](#testing-instructions)
* [Assumptions Made](#assumptions-made)
* [Use of AI Tools](#use-of-AI-Tools)

## General info
<details>
<summary>Click here to see general information about <b>Project</b></summary>

This project is a simple full‑stack application demonstrating:
- user registration
- user login
- session handling using localStorage
- protected dashboard view
- basic API communication between frontend and backend
The goal of the project was to create a minimal but functional authentication flow with clean UI and clear separation between frontend and backend logic.

**Frontend:**
- React (functional components)
- Custom CSS (animations, gradients, transitions)
- Form validation (empty fields, error banners)(simulating AWS SQS)

**Backend:**
- Node.js
- Express.js
- Simple in‑memory user store
- Basic authentication endpoints

The project is intentionally lightweight and easy to run locally.
</details>

---

## Setup Instructions
1. Clone the repository:
```
git clone 
cd project-root
```

2. Install dependencies:
Frontend:
```
npm install
```
Backend:
```
npm install
```

3. Start the backend
```
npm run dev
```
Backend runs on:
```
http://localhost:8080
```


4. Start the frontend
```
npm start
```
Frontend runs on:
```
http://localhost:3000
```
---

## Architecture Overview

The application consists of two independent layers::
```
Frontend (React) → API calls → Backend (Express)
```
**Frontend**
* ```/``` - login & registration panel
* ```/dashboard``` - protected dashboard page
* LocalStorage stores the logged‑in username
* Custom CSS animations for switching between login/register panels

**Backend**
Endpoints:
* ```POST /register``` - creates a new user
* ```POST /login``` - validates credentials
Data:
* Users stored in memory (for assignment purposes)
Flow:
```
User submits form → React validates → API request → Backend response → Banner message → Redirect to dashboard
```

---

## Testing Instructions

**1. Register a new user**:
Use the UI or send:
```
POST http://localhost:8080/register
Content-Type: application/json

{
  "username": "test",
  "password": "1234"
}
```

**2. Log in**
```
POST http://localhost:8080/login
Content-Type: application/json

{
  "username": "test",
  "password": "1234"
}
```
**3. Check dashboard**
Go to:
```
http://localhost:3000/dashboard
```
If logged in → dashboard loads
If not → redirect to login page

---

## Assumptions Made

* Authentication is simplified and uses in‑memory storage (no database).

* No password hashing (allowed for assignment scope).

* LocalStorage is used instead of cookies or JWT.

* Backend and frontend run separately but communicate via REST API.

* UI is intentionally minimalistic but includes animations and validation.

---

## Use of AI Tools

AI tools (Microsoft Copilot) were used as a technical consultant, mainly to:

* review and analyze fragments of code,

* suggest improvements in structure and organization of components,

* help diagnose CSS issues (e.g., gradient not covering full screen),

* clarify React behavior and best practices,

* support debugging and error‑handling logic,

* assist in preparing documentation and structuring the README.

Example types of prompts used:

* „Przeanalizuj ten fragment kodu i wskaż, dlaczego styl nie działa zgodnie z oczekiwaniami.”

* „Jak najlepiej zorganizować plik api.js  i logikę komunikacji z backendem?”

* „Wyjaśnij, dlaczego gradient w React nie rozciąga się na cały ekran.”

* „Pomóż znaleźć błąd w logice przełączania paneli logowania i rejestracji.”