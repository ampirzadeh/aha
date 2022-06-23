import express from 'express'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'

import router from './router'
import { DB_URL } from './config'
import { MongooseError, MongooseLog, MorganLog } from './bug'
import { ErrorController } from './controllers/error.controller'
import { resolve } from 'path'

mongoose
  .connect(DB_URL)
  .then(() => {
    mongoose.set(
      'debug',
      (collectionName: string, method: string, query: string) => {
        MongooseLog(
          `Method '${method}' Collection '${collectionName}' Query: '${JSON.stringify(
            query
          )}'`
        )
      }
    )
    MongooseLog('Connected to mongo')
  })
  .catch((err) => {
    MongooseError('Could not connect to MongoDB')
    MongooseError(err)
    MongooseError('Stopping app...')

    process.exit(0)
  })

const app = express()

app.set('views', resolve('./views'))
app.set('view engine', 'pug')

app.use(cors())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.static('public'))
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)
app.use(
  morgan('tiny', { stream: { write: (msg) => MorganLog(msg.trimEnd()) } })
)

app.use(router)
app.use(ErrorController)

export default app
