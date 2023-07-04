import Case from '@/models/case';
import { CaseDetails } from './types';

export async function getCases() {
  try {
    const cases: CaseDetails[] = await Case.find({});

    return JSON.parse(JSON.stringify(cases));
  } catch (error) {
    return { error: 'Failed to fetch cases!' };
  }
}

export async function getPendingCases() {
  try {
    const pendingCases: CaseDetails[] = await Case.find({
      statusType: 'oczekujące',
    });

    return JSON.parse(JSON.stringify(pendingCases));
  } catch (error) {
    return { error: 'Failed to fetch pending cases!' };
  }
}
