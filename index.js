const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;
const ordersRoutes = require("./routes/orders");
const materialsRoutes = require("./routes/materials");
const conveyorsRoutes = require("./routes/conveyors");
const powderCoatsRoutes = require("./routes/powderCoats");
const processesRoutes = require("./routes/processes");
const surfacePreparationsRoutes = require("./routes/surfacePreparations");

const usersRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb://localhost:27017/uretim", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected MongoDB..."))
  .catch(err => console.log("Error:", err.message));

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// if (process.env.NODE_ENV === "development") {
//   console.log("morgan enabled");
//   app.use.apply(morgan("tiny"));
// }

app.use("/orders", ordersRoutes);
app.use("/materials", materialsRoutes);
app.use("/conveyors", conveyorsRoutes);
app.use("/powderCoats", powderCoatsRoutes);
app.use("/processes", processesRoutes);
app.use("/surfacePreparations", surfacePreparationsRoutes);

app.use("/users", usersRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
