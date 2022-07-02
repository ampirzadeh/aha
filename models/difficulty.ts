import { Schema, model } from 'mongoose'

export interface IDifficulty {
  question: number
  difficulty: number
}

const difficultySchema = new Schema<IDifficulty>(
  {
    question: { type: Number, required: true },
    difficulty: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default model<IDifficulty>('difficulty', difficultySchema)
