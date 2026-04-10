# Webtronics - E-Commerce Application

A full-stack shopping web application built with React, Node.js, Express, and MongoDB.

## Quick Setup

### Step 1: Install & Run Backend

```bash
cd backend
npm install
npm run seed    # Seeds the database with sample products and users
npm run dev     # Starts backend on http://localhost:5000
```

### Step 2: Install & Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev     # Starts frontend on http://localhost:3000
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on mongodb://localhost:27017)
- npm

## Test Users

After seeding, you can login with:

- **Email:** john@example.com | **Password:** password123
- **Email:** jane@example.com | **Password:** password123

## Project Structure

```
webtronics/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── Order.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   └── productRoutes.js
│   ├── seed/
│   │   └── seedData.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   ├── components/
│   │   │   ├── CartItem.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Products.jsx
│   │   │   └── Register.jsx
│   │   ├── store/
│   │   │   ├── authStore.js
│   │   │   ├── cartStore.js
│   │   │   └── productStore.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── setup-folders.bat
├── create-files.js
└── README.md
```

## Features

- User authentication (register/login)
- Product listing with search
- Product detail page
- Shopping cart with quantity management
- Checkout flow with shipping address
- Order history

## Tech Stack

**Frontend:**

- React 18 (Vite)
- Tailwind CSS
- Zustand (state management)
- React Router
- Axios

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing

## API Endpoints

### Auth

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `POST /api/auth/wishlist/:productId` - Add product to wishlist (protected)
- `DELETE /api/auth/wishlist/:productId` - Remove product from wishlist (protected)
- `GET /api/auth/wishlist` - Get logged-in user's wishlist products (protected)

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Orders

- `POST /api/orders` - Create order (protected)
- `GET /api/orders/myorders` - Get user's orders (protected)
- `GET /api/orders/:id` - Get order by ID (protected)

## Environment Variables

Backend `.env` file:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/webtronics
JWT_SECRET=supersecretkey123
```

## Notes for Round 1

The website contains following bugs:

1. Database Connection Error (backend) - 10 pts
2. Broken Products page (frontend) - 20 pts
3. Broken Product details page (frontend) - 10 pts
4. Auth logout on refresh (frontend) - 10 pts
5. No form validation (frontend) - 15 pts
6. Missing error handling (frontend) - 10 pts
7. Disable cart if user not logged in (frontend) - 25 pts

Good luck!
