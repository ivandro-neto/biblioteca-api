import mongoose, { model, Schema } from 'mongoose'

interface ILoan{
  _id: Schema.Types.UUID,
  user_id: Schema.Types.ObjectId,
  book_id: Schema.Types.ObjectId,
  returnDate: Schema.Types.Date,
  status: Schema.Types.String,
  
}

const LoanSchema = new Schema<ILoan>({
  status: {
    enum : ['peding', 'returned', 'taken'],
    default: 'taken',
  }
})


const Loan = model('Loan', LoanSchema)

export default Loan;