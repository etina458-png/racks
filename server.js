import 'dotenv/config'; // ← Must stay at the TOP
import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.routes.js";

const app = express();

const PORT = process.env.PORT || 5000;

// ✅ CORS FIRST
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

// ✅ THEN body parser
app.use(express.json());


// Routes
app.use('/api', authRoutes);

// Listen LAST
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});