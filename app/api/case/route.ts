import CaseModel from '@/models/case';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const formData = await request.formData();

    const invoiceNumber = formData.get('invoiceNumber');
    const fileUrl = formData.get('fileUrl');
    const senderId = formData.get('senderId');
    console.log(invoiceNumber, fileUrl, senderId);

    const newCase = new CaseModel({
      invoiceNumber,
      fileUrl,
      senderId,
    });

    await newCase.save();

    return NextResponse.json(
      { msg: `Case added successfully ${newCase}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
