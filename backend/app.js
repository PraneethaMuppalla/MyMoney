const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const sequelise = require("./util/database");
const User = require("./models/user");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ success: false, message: message });
});

sequelise
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
