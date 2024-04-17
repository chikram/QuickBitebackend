import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'

// app config
const app = express()
const port = 4000

//middleware

//when ever user request from frontend to backend it passed by using json
app.use(express.json())
// cors use to access backend from frontend
app.use(cors())

//db connnection
connectDB()


//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))


app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})

