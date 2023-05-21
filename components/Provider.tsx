'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  session?: any;
};

const Provider = ({ children, session }: Props) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
