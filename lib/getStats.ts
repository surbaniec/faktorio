import Case from '@/models/case';
import { CaseDetails } from './types';

export async function getStats() {
  try {
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
    console.log(error);
    return {
      cases: 0,
      approved: 0,
      pending: 0,
    };
  }
}
