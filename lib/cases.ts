import Case from '@/models/case';
import { CaseDetails } from './types';

export async function getCases() {
  try {
    const cases: CaseDetails[] = await Case.find();
    return cases;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPendingCases() {
  try {
    const pendingCases: CaseDetails[] = await Case.find({
      statusType: 'oczekujące',
    });

    return pendingCases;
  } catch (error) {
    console.log(error);
    return [];
  }
}
