import { Schema, model, models } from 'mongoose';

const CaseSchema = new Schema({
  invoiceNumber: {
    type: String,
    required: [true, 'Invoice Number is required'],
  },
  fileUrl: {
    type: String,
    required: true,
  },
  statusType: {
    type: String,
    required: true,
  },
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  email: {
    type: String,
    required: true,
  },
});

const Case = models.Case || model('Case', CaseSchema);

export default Case;
