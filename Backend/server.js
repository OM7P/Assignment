const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const app = express()
app.use(express.json())
    const cors = require('cors');
app.use(cors()); 


const router = require("./routes/userRoute")


app.use('/api', router)

app.listen(process.env.PORT, () => {
    console.log(`server runing on PORT:${process.env.PORT}`)
})
