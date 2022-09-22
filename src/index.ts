import express from 'express';
import cors from "cors"
import shopRoutes from "./routes/shop";

const app = express();

app.use(cors())
app.use(express.json())
app.use("/", shopRoutes)

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));