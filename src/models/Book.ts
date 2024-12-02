import mongoose, { model, Schema } from 'mongoose';

interface IBook{
  _id: Schema.Types.ObjectId,
  title: Schema.Types.String
  description: Schema.Types.String,
  author: Schema.Types.String,
  releaseYear: Schema.Types.Number,
}

const BookSchema = new Schema<IBook>({
  title : {
    required: true
  },
  author: {
    required : true
  },
  releaseYear : {
    required : true
  }
})

const Book = model('Book', BookSchema);

export default Book;