import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function Root() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
      <ScrollRestoration />
    </div>
  );
}
