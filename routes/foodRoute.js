import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

import multer from 'multer';


const foodRouter = express.Router();


///image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


foodRouter.post("/add", upload.single("image"), addFood)
//use to get all food items
foodRouter.get("/list", listFood)

//remove food
foodRouter.post('/remove', removeFood)


export default foodRouter;