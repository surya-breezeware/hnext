const mongoose = require('mongoose')

// import mongoose  from 'mongoose'

const connect = {}

const dbConnect = async () => {
  if (connect.isConnected) {
    return
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connect.isConnected = db.connections[0].readystate
}

export default dbConnect
