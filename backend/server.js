import express from "express";
import 'dotenv/config';
import cors from "cors";
import connectDB from "./util/db.js";

import messageRoute from "./route/message.js"
import productRoute from "./route/product.js"

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send("API is working");
})

app.use('/api/message', messageRoute);
app.use('/api/product', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
})

export default app;