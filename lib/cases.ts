import { Case } from '@/models/case';
import { CaseDetails } from '../types/types';
import { connectToDb } from './databaseConnection';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getCases() {
  try {
    await connectToDb();
    const cases: CaseDetails[] = await Case.find({});

    return JSON.parse(JSON.stringify(cases));
  } catch (error) {
    return { error: 'Failed to fetch cases!' };
  }
}

export async function getPendingCases() {
  try {
    await connectToDb();
    const session = await getServerSession(AuthOptions);

    const pendingCases: CaseDetails[] = await Case.find({
      statusType: 'oczekujące',
      senderId: session.user.id,
    });

    return JSON.parse(JSON.stringify(pendingCases));
  } catch (error) {
    return { error: 'Failed to fetch pending cases!' };
  }
}
