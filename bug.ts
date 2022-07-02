import debug from 'debug'

const aha = debug('aha')

const General = aha.extend('General')
export const GeneralLog = General.extend('log')
export const GeneralError = General.extend('error')

const Mongoose = aha.extend('Mongoose')
export const MongooseLog = Mongoose.extend('log')
export const MongooseError = Mongoose.extend('error')

const Morgan = aha.extend('Morgan')
export const MorganLog = Morgan.extend('log')
export const MorganError = Morgan.extend('error')

const Setup = aha.extend('Setup')
export const SetupLog = Setup.extend('log')
export const SetupError = Setup.extend('error')
