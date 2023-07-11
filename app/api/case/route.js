import { getCases } from '@/lib/cases';
import { connectToDb } from '@/lib/databaseConnection';
import { Case } from '@/models/case';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDb();
    const cases = await getCases({});

    return NextResponse.json(cases);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    const invoiceNumber = formData.get('invoiceNumber');
    const fileUrl = formData.get('fileUrl');
    const statusType = formData.get('statusType');
    const senderId = formData.get('senderId');
    const image = formData.get('image');
    const name = formData.get('name');
    const msg = formData.get('msg');
    const date = formData.get('date');

    //Find user
    await connectToDb();
    const user = await User.findOne({ _id: senderId });

    const newCase = new Case({
      invoiceNumber,
      fileUrl,
      statusType,
      senderId,
      email: user.email,
      comments: [
        {
          image,
          name,
          msg,
          date,
        },
      ],
      createdAt: date,
    });

    await newCase.save();

    return NextResponse.json(
      { msg: `Case added successfully ${newCase}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
