export type CaseDetails = {
  _id: string;
  invoiceNumber: string;
  fileUrl: string;
  statusType: string;
  senderId: string;
  email: string;
  invoiceDate: string;
  dueDate: string;
  comments: comments[];
  createdAt: string;
};

export type comments = {
  image: string;
  name: string;
  msg: string;
  createdAt: string;
};
