import express from 'express';
import ImportData from './DataImport.js';
import dotenv from 'dotenv';
import { connectDatabase } from './config/MongoDb.js'; // Import with curly braces {}
import productRoute from './Routes/ProductRoutes.js';
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";


dotenv.config();
connectDatabase();
const app = express();

app.use('/api/import', ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID);
});



// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
