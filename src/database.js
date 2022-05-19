const mongoose = require('mongoose')

function conectToDatabase() {
  mongoose.connect(
    process.env.DATABASE_URL, 
     {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     }
    )

 const db = mongoose.connection
 db.on('error', (error) => console.error(error))
 db.once('open', () => console.log('✅ conected to the database!'))
}

module.exports = conectToDatabase