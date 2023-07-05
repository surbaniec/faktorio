import Case from '@/models/case';
import { CaseDetails } from './types';
import { connectToDb } from './databaseConnection';

export async function getStats() {
  try {
    await connectToDb();
    const cases: CaseDetails[] = await Case.find({});

    const pendingCases = cases.filter(function (caseD: CaseDetails) {
      return caseD.statusType === 'oczekujące';
    });
    const approvedCases = cases.filter(function (caseD: CaseDetails) {
      return caseD.statusType === 'zatwierdzono';
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
