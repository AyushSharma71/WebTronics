const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const Product = require('../models/Product');
const User = require('../models/User');

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Electronics',
    stock: 50,
    rating: 4.5,
    numReviews: 128
  },
  {
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with heart rate monitoring, GPS tracking, and 7-day battery life. Water resistant up to 50m.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Electronics',
    stock: 35,
    rating: 4.3,
    numReviews: 95
  },
  {
    name: 'Laptop Stand Aluminum',
    description: 'Ergonomic aluminum laptop stand with adjustable height. Compatible with laptops from 10 to 17 inches.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Accessories',
    stock: 100,
    rating: 4.7,
    numReviews: 230
  },
  {
    name: 'Mechanical Keyboard RGB',
    description: 'Premium mechanical keyboard with Cherry MX switches, RGB backlighting, and programmable keys.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
    category: 'Electronics',
    stock: 45,
    rating: 4.6,
    numReviews: 178
  },
  {
    name: 'Wireless Mouse Ergonomic',
    description: 'Ergonomic wireless mouse with silent clicks, adjustable DPI, and 6-month battery life.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Accessories',
    stock: 80,
    rating: 4.4,
    numReviews: 145
  },
  {
    name: 'USB-C Hub 7-in-1',
    description: 'Versatile USB-C hub with HDMI, USB 3.0 ports, SD card reader, and 100W power delivery.',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=500',
    category: 'Accessories',
    stock: 60,
    rating: 4.2,
    numReviews: 89
  },
  {
    name: 'Portable Charger 20000mAh',
    description: 'High-capacity portable charger with fast charging support. Charges 3 devices simultaneously.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500',
    category: 'Electronics',
    stock: 70,
    rating: 4.5,
    numReviews: 210
  },
  {
    name: 'Webcam 4K Ultra HD',
    description: 'Professional 4K webcam with auto-focus, built-in microphone, and privacy shutter.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500',
    category: 'Electronics',
    stock: 40,
    rating: 4.4,
    numReviews: 112
  },
  {
    name: 'Gaming Chair Pro',
    description: 'Ergonomic gaming chair with lumbar support, adjustable armrests, and 180-degree recline.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500',
    category: 'Furniture',
    stock: 25,
    rating: 4.3,
    numReviews: 67
  },
  {
    name: 'Monitor Light Bar',
    description: 'LED light bar that attaches to your monitor. Reduces eye strain with adjustable brightness and color temperature.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500',
    category: 'Accessories',
    stock: 55,
    rating: 4.6,
    numReviews: 134
  },
  {
    name: 'Wireless Earbuds Pro',
    description: 'True wireless earbuds with active noise cancellation, 8-hour battery, and wireless charging case.',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    category: 'Electronics',
    stock: 65,
    rating: 4.5,
    numReviews: 189
  },
  {
    name: 'Desk Mat XXL',
    description: 'Extra large desk mat with stitched edges, non-slip base, and water-resistant surface. 900x400mm.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=500',
    category: 'Accessories',
    stock: 90,
    rating: 4.7,
    numReviews: 256
  }
];

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    await Product.deleteMany({});
    await User.deleteMany({});

    console.log('Cleared existing data');

    await Product.insertMany(products);
    console.log('Products seeded');

    for (const user of users) {
      await User.create(user);
    }
    console.log('Users seeded');

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDB();
