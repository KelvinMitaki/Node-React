const express = require("express");

require("./services/passport");
const authRouter = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(authRouter);

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
