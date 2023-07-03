import Case from '@/models/case';
import { CaseDetails } from './types';

export async function getCases() {
  try {
    const cases: CaseDetails[] = await Case.find({});
    return JSON.parse(JSON.stringify(cases));
  } catch (error) {
    console.log('getCases error');
    console.log(error);
    return [];
  }
}

export async function getPendingCases() {
  try {
    const pendingCases: CaseDetails[] = await Case.find({
      statusType: 'oczekujące',
    });

    return JSON.parse(JSON.stringify(pendingCases));
  } catch (error) {
    console.log('getPendingCases error');
    console.log(error);
    return [];
  }
}
