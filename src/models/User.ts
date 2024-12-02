import mongoose, { model, Schema } from 'mongoose'

interface IUser{
  _id: Schema.Types.UUID,
  name: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String,
  role: Schema.Types.String,
}

const UserSchema = new Schema<IUser>({
  name : {
    required: true
  },
  email: {
    required : true
  },
  password : {
    required : true
  },
  role: {
    enum : ['admin', 'student'],
    default: 'student',
  }
})


const User = model('User', UserSchema)

export default User;