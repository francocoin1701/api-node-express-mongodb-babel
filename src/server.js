import express from "express";

import indexRoutes from "./routes/index.routes"
import taskRoutes from "./routes/task.routes"

const app = express();

app.set("port",process.env.PORT || 3001);
app.use(express.json())

app.use(indexRoutes)
app.use("/task",taskRoutes)

export default app;

