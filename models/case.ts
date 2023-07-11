import { Schema, model, models } from 'mongoose';

const CaseSchema = new Schema({
  invoiceNumber: {
    type: String,
    required: true,
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
  comments: {
    type: Array,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
});

export const Case = models.Case || model('Case', CaseSchema);
