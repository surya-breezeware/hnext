import dbConnect from '../../../db/dbConnect'
import Hero from '../../../models/Hero'

dbConnect()

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      try {
        const hero = await Hero.find({ id: id })
        res.status(200).json({ data: hero })
      } catch (error) {
        res.send(error)
      }
      break
    case 'PUT':
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
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
