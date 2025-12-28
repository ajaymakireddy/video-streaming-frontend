🎥 Video Upload, Sensitivity Processing & Streaming Platform

A full-stack web application that allows users to upload videos, process them for content sensitivity, track real-time progress, and stream videos efficiently with proper authentication, role-based access control, and multi-tenant isolation.

🚀 Features

Secure authentication using JWT

Role-based access control (Viewer, Editor, Admin)

Multi-tenant architecture (user data isolation)

Video upload with progress tracking

Real-time processing updates using Socket.io

Sensitivity classification (Safe / Flagged)

Efficient video streaming using HTTP Range Requests

Clean and modular frontend using React + CSS Modules


🏗️ Architecture Overview
🔹 Frontend

React (Vite)

CSS Modules for scoped styling

React Router for navigation

Socket.io Client for real-time updates

🔹 Backend

Node.js + Express

PostgreSQL database

Sequelize ORM

JWT Authentication

Socket.io for real-time communication

Multer for file uploads

Native Node.js streaming APIs


🔹 High-Level Flow
User
 ↓
React Frontend
 ↓
Express REST APIs
 ↓
PostgreSQL (via Sequelize)
 ↓
Socket.io (real-time updates)
 ↓
Video Streaming API (HTTP Range)


🧠 Why Sensitivity Analysis Is Simulated

The assignment requires video sensitivity detection, but implementing real AI/ML-based content analysis is beyond the scope of a coding assignment.

What is implemented:

Background processing simulation

Incremental progress updates (0% → 100%)

Final classification:

safe

flagged

Why this is acceptable:

Demonstrates backend processing pipelines

Enables real-time UI updates

Shows system design and state management

Easily replaceable with real AI services (AWS Rekognition, Azure Video Indexer, etc.)

The system is designed so real AI services can be integrated later without changing the core architecture.


Why this is acceptable:

Demonstrates backend processing pipelines

Enables real-time UI updates

Shows system design and state management

Easily replaceable with real AI services (AWS Rekognition, Azure Video Indexer, etc.)

The system is designed so real AI services can be integrated later without changing the core architecture.



🔐 Role-Based Access Control (RBAC)

The application supports three user roles:

| Role   | Permissions            |
| ------ | ---------------------- |
| Viewer | View and play videos   |
| Editor | Upload and view videos |
| Admin  | Full access            |


Backend Enforcement

User role is embedded inside JWT

Middleware checks role before allowing API access

role(["editor", "admin"])
role(["editor", "admin"])


Frontend Enforcement

UI elements rendered conditionally based on role

Upload button hidden for viewers

🎬 Video Streaming Implementation

The platform uses HTTP Range Requests for efficient video streaming.

Why Range Requests?

Streams video in chunks

Supports seek, pause, resume

Avoids loading entire video into memory

Backend

Uses fs.createReadStream

Responds with 206 Partial Content

Sends Content-Range headers

Frontend

Uses native HTML <video> element

Browser automatically sends Range headers

This mirrors how real video streaming platforms operate.


🛠️ Tech Stack
Frontend

React (Vite)

CSS Modules

React Router

Socket.io Client

Backend

Node.js

Express

PostgreSQL

Sequelize ORM

JWT Authentication

Socket.io

Multer


How to Run Locally
Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

🧪 Testing Roles

You can manually update roles in PostgreSQL:

UPDATE "Users" SET role='editor' WHERE email='editor@test.com';
UPDATE "Users" SET role='admin' WHERE email='admin@test.com';

Log out and log in again to refresh JWT.

📌 Assumptions & Design Decisions

Sensitivity analysis is simulated

Streaming endpoint is public for demo simplicity

PostgreSQL chosen over MongoDB for relational data integrity

Sequelize used for maintainable SQL abstraction