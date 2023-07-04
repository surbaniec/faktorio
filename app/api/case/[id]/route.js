import Case from '@/models/case';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const id = request.url.slice(request.url.lastIndexOf('/') + 1);

  try {
    const matchedCase = await Case.findOne({ _id: id });

    return NextResponse.json(matchedCase);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const res = await request.json();
    const id = res._id;

    await Case.findByIdAndUpdate({ _id: id }, res);

    return NextResponse.json(
      { msg: 'Case updated successfully!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
