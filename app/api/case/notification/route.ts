import { CaseDetails } from '../../../../types/types';
import { connectToDb } from '@/lib/databaseConnection';
import { Case } from '@/models/case';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { AuthOptions } from '../../auth/[...nextauth]/route';

export async function GET() {
  try {
    await connectToDb();
    const session = await getServerSession(AuthOptions);

    const pendingCases: CaseDetails[] = await Case.find({
      statusType: 'oczekujące',
      senderId: session.user.id,
    });

    const today = new Date();

    const upcomingCases = pendingCases.filter(function (caseD: CaseDetails) {
      const dueDate = new Date(caseD.dueDate);
      const timeDifference = dueDate.getTime() - today.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference <= 3 && daysDifference >= 0;
    });
    const overdueCases = pendingCases.filter(function (caseD: CaseDetails) {
      const dueDate = new Date(caseD.dueDate);
      return today > dueDate;
    });

    const paymentNotification = {
      upcomingPayment: upcomingCases.length,
      overduePayment: overdueCases.length,
    };

    return NextResponse.json(paymentNotification);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
