import Case from '@/models/case';
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
