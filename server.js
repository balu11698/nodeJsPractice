import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import employeeRouter from "./routes/employee.js";
import studentRouter from "./routes/student.js";
import authRouter from "./routes/auth.js";
import corsOptions from "./config/corsOptions.js";
import verifyJWT from "./middleware/verifyJWT.js";
import db from "./util/database.js";
import animeRouter from "./routes/animeRouter.js";

const app = express();
const PORT = process.env.PORT || 3500;

// db.sequelize.sync({ force: false }).then(() => {
//   console.log("#droped the database and and re-synced.");
// });

app.use((req, res, next) => {
  next();
});

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRouter);

app.use("/employee", employeeRouter);
app.use("/student", studentRouter);
app.use("/anime", animeRouter);
app.use(verifyJWT);

app.listen(PORT, () => console.log(`Server running in ${PORT}`));
