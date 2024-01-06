import { PropsWithChildren } from 'react';

import Header from 'src/components/Header';

const Global = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Global;
