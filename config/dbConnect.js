import mongoose from 'mongoose'
import colors from 'colors'

const dbConnect = () =>{
  if(mongoose.connection.readyState >= 1){
    return
  }

  mongoose.connect(process.env.mongoURI)
  .then(con => console.log('mongodb connected...'.yellow.underline))
  
}

export default dbConnect