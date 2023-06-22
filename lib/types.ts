export type CaseDetails = {
  _id: string;
  invoiceNumber: string;
  fileUrl: string;
  statusType: string;
  senderId: string;
  email: string;
  comments: comments[];
  createdAt: string;
};

export type comments = {
  image: string;
  name: string;
  msg: string;
  date: string;
};
