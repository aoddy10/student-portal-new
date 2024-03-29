import React from 'react';
import MainNavigate from '../navigates/MainNavigate';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainNavigate />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
