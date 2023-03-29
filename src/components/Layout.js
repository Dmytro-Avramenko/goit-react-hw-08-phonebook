import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 920,
        margin: '0 auto',
        padding: '0 20px'
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster
        position="top-center"
        reverseOrder={false} />
    </div>
  );
};