import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential : true
}))

app.use(express.json({limit: "15kb"}))
app.use(express.urlencoded({extended: true, limit: "15kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRoutes from "./routes/user.routes.js";

// routes declaration
app.use('/api/v1/users',userRoutes)

// http://localhost:3000//api/v1/users/register
export { app }