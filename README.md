# 🚀 Contact API with Full Authentication

<div align="center">

![Tech Stack](https://skillicons.dev/icons?i=nodejs,express,mongodb,jwt,postman,github,render)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://contact-api-with-full-authentication-wtw1.onrender.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

*A secure, production-ready Contact Management API demonstrating modern backend development practices*

</div>

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📚 Learning Outcomes](#-learning-outcomes)
- [🖼️ API Screenshots](#️-api-screenshots)
- [🚀 Quick Start](#-quick-start)
- [📖 API Documentation](#-api-documentation)
- [🔒 Security Features](#-security-features)
- [🌐 Live Demo](#-live-demo)

---

## 🎯 Project Overview

This **Contact Management API** is a comprehensive backend project built to demonstrate secure, full-stack authentication and CRUD operations. The API provides a robust foundation for managing user contacts with enterprise-level security practices, making it an excellent learning resource for modern backend development.

> **🎓 Learning Focus:** This project was created as a hands-on learning experience to master backend development concepts, API security, and deployment strategies.

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🔐 **Authentication & Security**
- ✅ User registration & login
- ✅ JWT-based authentication
- ✅ Password hashing with BcryptJS
- ✅ Protected routes & middleware
- ✅ User-specific data isolation

</td>
<td width="50%">

### 📱 **Contact Management**
- ✅ Create new contacts
- ✅ Retrieve user's contacts
- ✅ Update contact information
- ✅ Delete contacts
- ✅ RESTful API design

</td>
</tr>
</table>

### 🏗️ **Architecture & Best Practices**
- ✅ MVC (Model-View-Controller) pattern
- ✅ Express middleware implementation
- ✅ Proper HTTP status codes
- ✅ Environment variable management
- ✅ Error handling & validation
- ✅ Production deployment ready

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose | Badge |
|------------|---------|-------|
| **Node.js** | Runtime Environment | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) |
| **Express.js** | Web Framework | ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) |
| **MongoDB** | Database | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) |
| **JWT** | Authentication | ![JWT](https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white) |
| **BcryptJS** | Password Hashing | ![BcryptJS](https://img.shields.io/badge/BcryptJS-004488?logo=javascript&logoColor=white) |
| **Postman** | API Testing | ![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white) |
| **ThunderClient** | API Testing | ![ThunderClient](https://img.shields.io/badge/ThunderClient-1B1F23?logo=thunderclient&logoColor=white) |
| **Render** | Deployment | ![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white) |

</div>

---

## 📚 Learning Outcomes

<details>
<summary><strong>🎯 Click to expand my detailed learning journey</strong></summary>

### 🔧 **Technical Skills Acquired**

#### **API Development & Testing**
- **RESTful API Design:** Mastered the principles of REST architecture and implemented clean, intuitive endpoints
- **API Testing Tools:** Gained proficiency with ![Postman](https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white) and ![ThunderClient](https://img.shields.io/badge/ThunderClient-1B1F23?logo=thunderclient&logoColor=white) for comprehensive endpoint testing and debugging

#### **Database Management**
- **MongoDB Integration:** Successfully integrated ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) for scalable data storage
- **CRUD Operations:** Implemented robust Create, Read, Update, and Delete operations with proper error handling
- **Data Modeling:** Designed efficient schemas for user and contact data relationships

#### **Security & Authentication**
- **User Authentication:** Built secure registration and login systems from scratch
- **JWT Implementation:** Implemented JSON Web Tokens for stateless authentication
- **Password Security:** Utilized ![BcryptJS](https://img.shields.io/badge/BcryptJS-004488?logo=javascript&logoColor=white) for secure password hashing and verification
- **Route Protection:** Created middleware to protect sensitive endpoints

#### **Backend Architecture**
- **MVC Pattern:** Structured the application using Model-View-Controller architecture for maintainability
- **Express Middleware:** Developed custom middleware for authentication, validation, and error handling
- **HTTP Standards:** Applied appropriate status codes (`200`, `201`, `400`, `401`, `404`, `500`) for clear API responses

#### **DevOps & Deployment**
- **Environment Management:** Configured environment variables for different deployment stages
- **Production Deployment:** Successfully deployed to ![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white) with proper configuration
- **API Documentation:** Created comprehensive documentation for easy integration

### 🎓 **Professional Development**
- **Problem-Solving:** Enhanced debugging skills through API development challenges
- **Code Organization:** Learned to structure large codebases for scalability and maintainability
- **Security Mindset:** Developed awareness of common security vulnerabilities and best practices
- **Testing Methodology:** Established systematic approaches to API testing and validation

---

*This project represents a significant milestone in my backend development journey, demonstrating practical application of modern web development technologies and security practices.*

</details>

---

## 🖼️ API Screenshots

### 🔐 Authentication Flow

<table>
<tr>
<td width="50%">

#### **User Registration**
![User Registration](screenshots/register.png)
*Secure user registration with password hashing*

</td>
<td width="50%">

#### **User Login**
![User Login](screenshots/login.png)
*JWT-based authentication system*

</td>
</tr>
</table>

### 🔒 Protected Routes

![Protected Route Access](screenshots/protected-route.png)
*Middleware-protected endpoints requiring valid JWT tokens*

### 📱 Contact Management Operations

<table>
<tr>
<td width="50%">

#### **Create Contact**
![Create Contact](screenshots/create-contact.png)
*Adding new contacts with validation*

#### **Update Contact**
![Update Contact](screenshots/update-contact.png)
*Modifying existing contact information*

</td>
<td width="50%">

#### **Retrieve Contacts**
![Read Contacts](screenshots/read-contacts.png)
*Fetching user-specific contacts*

#### **Delete Contact**
![Delete Contact](screenshots/delete-contact.png)
*Secure contact deletion*

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Postman or ThunderClient for testing

### Installation Steps

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd contact-api-authentication

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Configure your .env file
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

# 5. Start the development server
npm start

# 6. Your API is now running at http://localhost:5000
```

---

## 📖 API Documentation

### Base URL
```
Production: https://contact-api-with-full-authentication-wtw1.onrender.com/
Local: http://localhost:5000/
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/users/register` | Register new user | ❌ |
| `POST` | `/api/users/login` | User login | ❌ |
| `GET` | `/api/users/current` | Get current user | ✅ |

### Contact Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/contacts` | Get all user contacts | ✅ |
| `POST` | `/api/contacts` | Create new contact | ✅ |
| `GET` | `/api/contacts/:id` | Get specific contact | ✅ |
| `PUT` | `/api/contacts/:id` | Update contact | ✅ |
| `DELETE` | `/api/contacts/:id` | Delete contact | ✅ |

---

## 🔒 Security Features

- **🔐 JWT Authentication:** Stateless authentication using JSON Web Tokens
- **🛡️ Password Hashing:** Secure password storage with BcryptJS
- **🚪 Protected Routes:** Middleware-based route protection
- **👤 User Isolation:** Users can only access their own contacts
- **✅ Input Validation:** Comprehensive data validation and sanitization
- **🌍 Environment Variables:** Secure configuration management

---

## 🌐 Live Demo

**🚀 Explore the API:** [https://contact-api-with-full-authentication-wtw1.onrender.com/](https://contact-api-with-full-authentication-wtw1.onrender.com/)

> **📝 Note:** This is a backend API. Use Postman, ThunderClient, or any HTTP client to interact with the endpoints. Refer to the API documentation above for available routes.

---

<div align="center">

### 🤝 Connect & Contribute

**Found this helpful?** ⭐ Star the repository if it helped you learn!

**Want to contribute?** Pull requests are welcome! This project is perfect for learning and experimentation.

**Questions or feedback?** Feel free to open an issue or reach out!

---

*Built with ❤️ for learning and sharing knowledge in backend development*

</div>