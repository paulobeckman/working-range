import { Outlet } from 'react-router-dom';

import Header from 'src/components/Header';

const Global = () => {
  return (
    <>
      <Header />
      <main className="px-16 py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Global;
