# Task Management Application (RBAC)

A full-stack Task Management web application built using the MERN stack that implements Role-Based Access Control (RBAC) for secure and organized collaboration.

The system allows multiple users to work on tasks while restricting actions based on their role. Each role has different permissions to ensure data security and proper workflow management.

## Roles & Permissions

**Admin**

* Create, update, and delete users
* Assign roles (Admin / Manager / User)
* View all tasks in the system
* Delete any task

**Manager**

* Create and assign tasks to users
* Update task status
* View team tasks

**User**

* View assigned tasks
* Update task progress
* Mark task as completed

## Features

* JWT Authentication
* Protected API routes
* Role-based authorization middleware
* Task CRUD operations
* Real-time status updates
* Secure password hashing
* RESTful API architecture

## Tech Stack

Frontend: React.js
Backend: Node.js + Express.js
Database: MongoDB
Authentication: JWT
Authorization: RBAC Middleware

## Purpose

This project demonstrates how RBAC is implemented in real-world applications to control access to resources and protect sensitive operations.
