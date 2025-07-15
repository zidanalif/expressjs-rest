import express from "express";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import database from "./libs/database";

export const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(cors());
app.use(helmet());

app.get("/", async (_, res) => {
  const user = await database.user.findMany({});
  res.status(200).json({ data: user, message: "Users fetched successfully!" });
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log("Server running on http://localhost:" + port)
);
