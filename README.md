# Mentora Backend Assignment

Backend implementation of a simplified mentorship platform where **parents, students, and mentors interact**.

Deployed API:

https://mentora-assignment.onrender.com

---

# Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt password hashing
* OpenAI API for text summarization
* express-rate-limit

---

# Features

## Authentication

Endpoints

POST /auth/signup
POST /auth/login
GET /auth/me

Only **parents and mentors can register**.

Students are created by parents.

Authentication uses **JWT tokens**.

---

## Students (Parent only)

Create students under parent profile.

POST /students
GET /students

Each student belongs to a specific parent.

---

## Lessons (Mentor only)

Mentors create lessons.

POST /lessons

Fields:

title
description
mentorId

---

## Booking System

Parents assign students to lessons.

POST /bookings

Fields:

studentId
lessonId

---

## Sessions

Lessons contain multiple sessions.

POST /sessions
GET /sessions/lesson/:lessonId

Fields:

lessonId
date
topic
summary

---

# LLM Text Summarization

Endpoint

POST /llm/summarize

Request

{
"text": "long paragraph..."
}

Response

{
"summary": "3-6 bullet points summary",
"model": "gpt-4o-mini"
}

Validation rules

* text required
* minimum length: 50 characters
* maximum length: 10000 characters

Rate limiting applied to prevent abuse.

---

# Environment Variables

Create `.env` file.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
OPENAI_API_KEY=your_openai_key

Do not commit `.env` to GitHub.

---

# Installation

Clone the repository

git clone https://github.com/itsRaiAadi/MENTORA-ASSIGNMENT.git

Install dependencies

npm install

Run server

npm run dev

---

# API Base URL

Production

https://mentora-assignment.onrender.com

---

# API Testing

Use the provided **Postman Collection**.

Recommended testing order:

1. Signup Parent
2. Signup Mentor
3. Login
4. Create Student
5. Create Lesson
6. Create Booking
7. Create Session
8. Get Sessions
9. Test LLM Summarization

---

# Security Practices

* Password hashing using bcrypt
* JWT authentication
* Role based access control
* Environment variables for secrets
* Rate limiting for LLM endpoint

---

# Possible Improvements

* Joi/Zod validation
* Redis caching
* Logging with Winston
* Pagination
* Automated tests

---

# Author

Aditya Rai

Backend Assignment Submission
