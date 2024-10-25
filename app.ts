import * as express from "express";
import * as dotenv from "dotenv";
import mainRouter from "./router/mainRouter";

const app: express.Express = express();

dotenv.config();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
