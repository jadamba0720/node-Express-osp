const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const morgan= require("morgan");
const path = require("path");

const logger = require("./middleware/log");
const errorHandler= require("./middleware/error");

const departmentRoutes = require("./routes/departmentRoutes");

dotenv.config({path: "./config/config.env"});

const db= require("./config/db-sequelize");
const injectDB= require("./middleware/injectDb");
const app = express();



const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// Body parser
app.use(express.json());
app.use(logger);
app.use(morgan('combined', {stream : accessLogStream}));

//connection
app.use(injectDB(db));

// route heseg
app.use("/api/v1/department" , departmentRoutes);

app.use(errorHandler);

db.sequelize.sync({force:true}).then((result)=> console.log("sync hiichlee")).catch((err)=>console.log(err));


app.listen(
    process.env.PORT,
    console.log("server аслаа")
)