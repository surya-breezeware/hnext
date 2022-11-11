import dbConnect from '../../../db/dbConnect'
import Hero from '../../../models/Hero'

dbConnect()
export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const heros = await Hero.find({})
        res.status(200).json({ data: heros })
      } catch (error) {
        res.send(error)
      }
      break
    case 'POST':
      try {
        const hero = await Hero.create(req.body)
        res.status(201).json({ data: hero })
      } catch (error) {
        res.send(error)
      }
      break

    default:
      res.sendStatus(400)
      break
  }
}
