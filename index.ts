import dotenv from 'dotenv'
dotenv.config()

import { createServer } from 'http'
import { PORT } from './config'
import { GeneralLog } from './bug'
import app from './app'

createServer(app).listen(PORT, () => {
  GeneralLog(`Up: ${PORT}`)
})
