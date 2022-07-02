import { createServer } from 'http'
import { PORT } from './config'
import { GeneralLog } from './bug'
import app from './app'

createServer(app).listen(PORT, '0.0.0.0', () => {
  GeneralLog(`Up: ${PORT}`)
})
