# Team Task Manager

## Project Overview

Team Task Manager is a full-stack web application developed to help teams and organizations efficiently manage projects, assign tasks, and track workflow progress. The application provides a centralized platform where Admins and Members can collaborate securely with proper role-based access control. The main objective of this project is to improve task organization, team coordination, and productivity in a professional environment.

The project is developed using Node.js, Express.js, MongoDB, EJS, HTML, CSS, JavaScript, and Bootstrap while following the MVC (Model View Controller) architecture for better scalability, maintainability, and clean code structure.

---

## Features

- User Authentication (Signup/Login)
- JWT-Based Secure Authentication
- Password Encryption using bcryptjs
- Role-Based Access Control (Admin & Member)
- Project Creation & Management
- Task Creation & Assignment
- Task Status Tracking
- Dashboard Interface
- Responsive Professional UI
- Dark Mode & Light Mode
- Protected Routes & Middleware
- MongoDB Database Relationships
- Railway Deployment
- MongoDB Atlas Integration

---

## Roles and Permissions

### Admin
- Create Projects
- Create Tasks
- Assign Tasks to Members
- Manage Team Workflow
- Update Any Task Status

### Member
- View Projects
- View Tasks
- Update Only Assigned Tasks

Unauthorized users are restricted using middleware authorization and a custom Access Denied page.

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Bootstrap
- EJS Template Engine

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JWT (jsonwebtoken)
- bcryptjs
- Middleware Protection

### Deployment
- Railway
- MongoDB Atlas

---

## Project Structure

team-task-manager/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── public/
├── routes/
├── utils/
├── views/
├── .env
├── package.json
├── server.js

---

## Database Collections

### Users Collection
Stores:
- Name
- Email
- Password
- Role

### Projects Collection
Stores:
- Project Name
- Description
- Created By
- Team Members

### Tasks Collection
Stores:
- Task Title
- Description
- Due Date
- Assigned Member
- Task Status
- Related Project

---

## Authentication System

The application uses JWT authentication for secure login sessions. User passwords are encrypted using bcryptjs before storing them in the MongoDB database. Cookies are used to maintain user sessions securely.

---

## Role-Based Access Control

Role-Based Access Control (RBAC) is implemented using middleware. Admin users can manage projects and tasks, while Members have restricted access based on assigned permissions. Unauthorized route access is blocked using middleware protection.

---

## User Interface

The frontend is designed with a professional and responsive interface using Bootstrap and custom CSS. The application includes:
- Responsive Navbar
- Professional Footer
- Card-Based Layouts
- Modern Forms
- Dark Mode & Light Mode Toggle
- Mobile-Friendly Design

---

## Deployment

The project is deployed on Railway cloud platform and connected with MongoDB Atlas cloud database. Git and GitHub are used for version control and repository management.

---

## Installation Steps

1. Clone the Repository

git clone https://github.com/amitsain001/Team-Task-Manager.git

2. Navigate to Project Folder

cd team-task-manager

3. Install Dependencies

npm install

4. Create .env File

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

5. Run the Project

npm run dev

6. Open Browser

http://localhost:5000

---

## Learning Outcomes

- Full Stack Web Development
- REST API Development
- MongoDB Relationships
- Authentication & Authorization
- Role-Based Access Control
- MVC Architecture
- Deployment with Railway
- Responsive UI Design
- Middleware Protection
- Git & GitHub Version Control

---

## Future Improvements

- Real-Time Notifications
- Email Alerts
- Drag & Drop Kanban Board
- Team Chat System
- File Upload Support
- Task Priority Levels
- Calendar Integration
- Analytics Dashboard

---

## Author

Amit Sain

GitHub:
https://github.com/amitsain001

Live Project Link:
https://team-task-manager-production-bdf5.up.railway.app/auth/login
