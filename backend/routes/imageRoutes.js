import express from 'express';

import{genrateImage} from '../controllers/imageController.js';
import userAuth from "../middlewares/auth.js";

const imageRouter = express.Router();

imageRouter.post('/generate-image',userAuth, genrateImage);

export default imageRouter;