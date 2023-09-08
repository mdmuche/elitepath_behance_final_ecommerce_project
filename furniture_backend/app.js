const express = require("express");
const { router } = require("./routes/productRoutes");
const comm = require("./utils/connectDB");
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
let origin = ['http://localhost:3000'];




//middleware
app.use(cors({credentials: true, origin}));
app.use(express.json());
app.use('/api/furniture', router);


//routes


//start server
comm(()=>{
    app.listen(process.env.PORT || 5700, ()=>{
        console.log(`listening to request on port ${process.env.PORT}`);
    })

})