import Case from '@/models/case';
import { ObjectId } from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1);

  try {
    const matchedCase = await Case.findOne({ _id: id });

    return NextResponse.json(matchedCase);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const res = await request.json();
    const id = res._id as ObjectId;

    await Case.findByIdAndUpdate({ _id: id }, res);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
