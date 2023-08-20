import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className='mx-auto max-w-6xl'>{children}</div>;
};

export default Layout;
