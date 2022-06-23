import { Router } from 'express'
import createHttpError from 'http-errors'
import difficulty from './models/difficulty'

const router = Router()

router.post('/submit', async (req, res, next) => {
  try {
    if (req.body.question && req.body.difficulty) {
      const question = +req.body.question
      if (question <= 0 || question >= 1025) throw createHttpError(400)

      const difficultyLevel = +req.body.difficulty
      if (![0, 1].includes(difficultyLevel)) throw createHttpError(400)

      await difficulty.create({ difficulty: difficultyLevel, question })
    }

    return res.redirect(303, '/')
  } catch (error) {
    return next(error)
  }
})

router.get('/', (req, res) =>
  res.render('index', {
    title: 'Aha!',
    imageIndex: Math.floor(Math.random() * 1025 + 1),
  })
)

export default router
