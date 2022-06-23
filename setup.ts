import { connect, set } from 'mongoose'
import { createReadStream, readFile, readFileSync } from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import { readdir } from 'fs/promises'
import { resolve } from 'path'
import { DB_URL } from './config'
import { MongooseLog, SetupLog } from './bug'
import riddle, { IDifficulty } from './models/difficulty'

const nOfImages = 2

const setup = async () => {
  try {
    await connect(DB_URL)
    set('debug', true)
    MongooseLog('Connected to mongo')

    const imageUpload = new FormData()
    imageUpload.append('UPLOADCARE_PUB_KEY', 'f13bebf0260abe98db70')

    const files = await readdir(resolve('./images'))
    for (const file of files)
      imageUpload.append(file, createReadStream(resolve('./images', file)))

    const result = await axios.post(
      `https://upload.uploadcare.com/base/`,
      imageUpload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )

    const dbQuery: IDifficulty[] = []

    Object.keys(result.data).map((fileName) => {
      dbQuery[+fileName.slice(1, fileName.length - 4)] =
        fileName.charAt(0) === 'a'
          ? {
              ...dbQuery[+fileName.slice(1, fileName.length - 4)],
              // answer: result.data[fileName],
              // riddleNumber: +fileName.slice(1, fileName.length - 4),
            }
          : {
              ...dbQuery[+fileName.slice(1, fileName.length - 4)],
              question: result.data[fileName],
              // riddleNumber: +fileName.slice(1, fileName.length - 4),
            }
    })

    await riddle.create(dbQuery)

    // f13bebf0260abe98db70:63570b90dcde38723ac2
  } catch (error) {
    SetupLog(error)
    process.exit(0)
  }
}

setup()
