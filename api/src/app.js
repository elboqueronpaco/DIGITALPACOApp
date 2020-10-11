import express from 'express'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import pkg from '../package.json'
import postRouter from './routes/postRoute'

dotenv.config()
const app = express()
const corsOptions = {}

app.set('pkg', pkg)
// middlewares
app.use(cors(corsOptions))
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// router
app.get('/', (req, res) => {
  res.json({
    appName: app.get('pkg').name,
    version: app.get('pkg').version,
    description: app.get('pkg').description,
    author: app.get('pkg').author.name,
    email: app.get('pkg').author.email
  })
})
app.use('/api/post', postRouter)

export default app
