import {Router} from 'express'
import { registerUser } from '../controllers/user.controllers.js'
import {upload} from '../middlewares/multer.middlewares.js';


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "coverImage",
            maxCount: 1
        },
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser
)

export default router