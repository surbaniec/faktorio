import { Case } from '@/models/case';
import { CaseDetails } from '../types/types';
import { connectToDb } from './databaseConnection';
import { getServerSession } from 'next-auth';
import { AuthOptions } from '@/app/api/auth/[...nextauth]/route';

export async function getStats() {
  try {
    await connectToDb();
    const session = await getServerSession(AuthOptions);

    const cases: CaseDetails[] = await Case.find({});

    const pendingCases = cases.filter(function (caseD: CaseDetails) {
      return (
        caseD.statusType === 'oczekujące' && caseD.senderId == session.user.id
      );
    });

    const approvedCases = cases.filter(function (caseD: CaseDetails) {
      return (
        caseD.statusType === 'zatwierdzono' && caseD.senderId == session.user.id
      );
    });
    const stats = {
      cases: cases.length,
      approved: approvedCases.length,
      pending: pendingCases.length,
    };

    return stats;
  } catch (error) {
    return { error: 'Failed to get stats!' };
  }
}
