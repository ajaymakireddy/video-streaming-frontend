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