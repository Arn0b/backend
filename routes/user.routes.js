import {Router} from "express";
import {userregister} from "../controllers/user.controller.js"

const router = Router()

router.route('/register').post(userregister) //to help the router understand the data that we get from app.js, we have to route it using the route thing and at last, we can add the controllers to see the data in it

export default router