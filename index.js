const express = require("express");
const mongoose = require("mongoose");

require("./services/passport");
const authRouter = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(authRouter);

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => console.log(`server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
mongooseConnect();
