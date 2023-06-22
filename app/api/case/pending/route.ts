import Case from '@/models/case';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const fetchedCases = await Case.find({ statusType: 'oczekujące' });

    if (!fetchedCases) {
      return NextResponse.json({ msg: 'No cases to fetch' });
    }

    return NextResponse.json(fetchedCases);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
