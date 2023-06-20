import Case from '@/models/case';
import Users from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const fetchedCases = await Case.find();

    if (!fetchedCases) {
      return NextResponse.json({ msg: 'No cases to fetch' });
    }

    return NextResponse.json(fetchedCases);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const invoiceNumber = formData.get('invoiceNumber');
    const fileUrl = formData.get('fileUrl');
    const statusType = formData.get('statusType');
    const senderId = formData.get('senderId');

    //Find user
    const user = await Users.findOne({ id: senderId });

    const newCase = new Case({
      invoiceNumber,
      fileUrl,
      statusType,
      senderId,
      email: user.email,
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
