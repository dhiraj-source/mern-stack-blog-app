const mongoose =  require('mongoose')

const connectDB = async()=>{
    try {
          await mongoose.connect(process.env.DATABASE_CON);
          console.log(`connected to mongodb database ${mongoose.connection.host}`)
    } catch (error) {
       console.log(`mongoose connection error ${error}`) 
    }
}

module.exports = connectDB;