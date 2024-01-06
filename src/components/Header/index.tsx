import { PropsWithChildren } from 'react';

const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className="h-20 px-16 flex items-center border-b border-gray-300">
      <h1 className="font-bold uppercase text-gray-800">Working Range</h1>
      {children}
    </header>
  );
};

export default Header;
