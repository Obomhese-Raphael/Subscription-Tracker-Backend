# Subscription Management System 🚀

Welcome to the **Subscription Management System**, a production-ready backend project designed to handle real users, real money, and real business logic. This project is part of a **Backend Crash Course** by [JavaScript Mastery](https://www.jsmastery.pro), where we build a robust system for managing subscriptions, sending reminders, and lots more.
This project is built using modern tools and technologies like **Upstash**, **Hstinger/Vercel**, **Arcjet**, and **WebStorm**, and incorporates best practices for **JWT authentication**, **database modeling**, **API architecture**, **security**, and **automated workflows**.

---

## Features ✨

- **User Authentication**: Secure JWT-based authentication for user registration, login, and session management.
- **Subscription Management**: Create, update, and manage subscriptions with real-time tracking.
- **Automated Reminders**: Send email reminders to users before their subscription renews.
- **Database Modeling**: Efficient and scalable database design using MongoDB.
- **API Architecture**: RESTful API with clean, modular, and maintainable code.
- **Security**: Implement best practices for securing user data and preventing common vulnerabilities.
- **Automated Workflows**: Use **Upstash Workflows** to automate tasks like sending reminders and updating subscriptions.
- **Deployment**: Deploy the backend on **Hstinger/Vercel** with **Arcjet** for enhanced security.

---

## Tools and Technologies 🛠️

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB (with Mongoose for modeling)
- **Authentication**: JSON Web Tokens (JWT)
- **Workflow Automation**: Upstash Workflows
- **Email Service**: Nodemailer
- **Security**: Arcjet for API security
- **Deployment**: Hstinger / Vercel
- **IDE**: WebStorm / VsCode
- **Version Control**: Git and GitHub

---

## Project Structure 📂

```
subscription-management-system/
├── config/                  # Configuration files (database, JWT, etc.)
├── controllers/             # Route handlers for API endpoints
├── database/                # Used to handle mongodb database (DB_URI)
├── middlewares/             # handles authentication, authorization and error handlings
├── models/                  # Database models (Mongoose schemas)
├── routes/                  # API routes
├── utils/                   # Utility functions (send-email, workflows, email-templates etc.)
├── workflows/               # Upstash workflow definitions
├── .env                     # Environment variables
├── .gitignore               # Files to ignore in Git
├── app.js                   # Main application file
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

---

## Key Concepts Explained 🧠

### 1. **JWT Authentication**
- JSON Web Tokens (JWT) are used for secure user authentication.
- Tokens are generated upon login and verified on every protected route.
- Tokens include user information (e.g., user ID) and expire after a set time.

### 2. **Database Modeling**
- MongoDB is used as the database, with Mongoose for schema modeling.
- Key models include:
  - **User**: Stores user details (name, email, password hash).
  - **Subscription**: Tracks subscription details (name, price, renewal date, etc.).
- Relationships are defined between models (e.g., a user can have multiple subscriptions).

### 3. **API Architecture**
- RESTful API design with clear separation of concerns.
- Routes are organized into:
  - **Auth Routes**: User registration, login, and token refresh.
  - **Subscription Routes**: CRUD operations for subscriptions.
  - **Workflow Routes**: Trigger automated workflows (e.g., reminders).

### 4. **Security**
- Passwords are hashed using **bcrypt** before storing in the database.
- Sensitive data (e.g., API keys) is stored in environment variables.
- **Arcjet** is used to protect APIs from common attacks (e.g., DDoS, SQL injection).

### 5. **Automated Workflows**
- **Upstash Workflows** are used to automate tasks like:
  - Sending email reminders before subscription renewal.
  - Updating subscription status after payment.
- Workflows are triggered by API calls or scheduled events.

### 6. **Email Notifications**
- **Nodemailer** is used to send transactional emails.
- Email templates are dynamically generated for different reminder types (e.g., 7 days before renewal).

---

## Installation and Setup 🛠️

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- Upstash account (for workflows)
- Arcjet account (for API security)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Obomhese-Raphael/Subscription-Tracker-Backend.git
   cd subscription-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     JWT_SECRET=your_jwt_secret_key
     UPSTASH_TOKEN=your_upstash_token
     ARCJET_KEY=your_arcjet_api_key
     EMAIL_USER=your_email_address
     EMAIL_PASSWORD=your_email_password,
     PORT,
     NODE_ENV,
     DB_URI,
     JWT_SECRET,
     JWT_EXPIRES_IN,
     ARCJET_ENV,
     QSTASH_TOKEN,
     QSTASH_URL,
     SERVER_URL,
     EMAIL_PASSWORD,
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Access the API at `http://localhost:5000`.

---

## Deployment 🚀

This project is designed to be deployed on **Hostinger/Vercel** with **Arcjet** for enhanced security. Follow these steps:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploying subscription management system"
   git push origin main
   ```

2. Deploy on **Vercel**:
   - Connect your GitHub repository to Vercel.
   - Configure environment variables in the Vercel dashboard.
   - Deploy the project.

3. Enable **Arcjet**:
   - Add Arcjet to your Vercel project for API security.

---

## Credits 🙌

This project is based on a **Backend Crash Course** by [JavaScript Mastery](https://www.javascriptmastery.com). Special thanks to their team for providing an in-depth and practical guide to building production-ready backend systems.

---

## Support and Feedback 💬

If you have any questions, feedback, or issues, feel free to open an issue on GitHub or reach out to the community at [JavaScript Mastery](https://www.jsmastery.pro) or reach out to me at [Obomheser@gmail.com](obomheser@gmail.com).

---

Happy coding! 🚀🤘
