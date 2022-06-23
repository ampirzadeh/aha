import debug from 'debug'

const General = debug('General')
export const GeneralLog = General.extend('log')
export const GeneralError = General.extend('error')

const Mongoose = debug('Mongoose')
export const MongooseLog = Mongoose.extend('log')
export const MongooseError = Mongoose.extend('error')

const Morgan = debug('Morgan')
export const MorganLog = Morgan.extend('log')
export const MorganError = Morgan.extend('error')

const Setup = debug('Setup')
export const SetupLog = Setup.extend('log')
export const SetupError = Setup.extend('error')
