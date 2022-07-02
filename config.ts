export const DB_URL =
  process.env.MONGODB_CONNSTRING || 'mongodb://localhost:27017/aha'
export const PORT = +(process.env.PORT || 8080)
