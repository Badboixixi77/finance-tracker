# Finance Tracker

A full-stack finance tracking application built with React, Node.js, Express, and MongoDB.

## Features

- User authentication (register/login)
- Add income and expense transactions
- Categorize transactions
- Real-time balance calculation
- Cloud sync with MongoDB
- Responsive design

## Tech Stack

**Frontend:**
- React with Vite
- React Router
- Axios
- Context API for state management

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Badboixixi77/finance-tracker.git
cd finance-tracker
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Set up environment variables
```bash
cd ../server
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
```

### Running the Application

1. Start MongoDB (if running locally)
```bash
mongod
```

2. Start the backend server
```bash
cd server
npm run dev
```

3. Start the frontend (in a new terminal)
```bash
cd client
npm run dev
```

4. Open http://localhost:5173 in your browser

## API Endpoints

### Auth
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/profile` - Get user profile (protected)

### Transactions
- GET `/api/transactions` - Get all user transactions (protected)
- POST `/api/transactions` - Create transaction (protected)
- PUT `/api/transactions/:id` - Update transaction (protected)
- DELETE `/api/transactions/:id` - Delete transaction (protected)

## Project Structure

```
finance-tracker/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   ├── services/      # API services
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                # Express backend
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Mongoose models
│   │   └── routes/       # API routes
│   └── package.json
└── README.md
```

## License

MIT
