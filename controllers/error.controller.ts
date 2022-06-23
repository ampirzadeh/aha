import { ErrorRequestHandler } from 'express'
import { MorganError } from '../bug'

export const ErrorController: ErrorRequestHandler = (
  { status, message, stack },
  req,
  res,
  _next
) => {
  const s: string = stack
  MorganError(s.slice(0, s.indexOf('\n')))

  res.status(status).json({ message })
}
