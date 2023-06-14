import { Schema, model, models } from 'mongoose';

const CaseSchema = new Schema({
  invoiceNumber: {
    type: String,
    required: [true, 'Invoice Number is required'],
  },
  invoiceFile: {
    data: Buffer,
    contentType: String,
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Case = models.Case || model('Case', CaseSchema);

export default Case;
