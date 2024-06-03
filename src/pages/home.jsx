import React from 'react';
import Header from '../pages/Header';
import Index from '../pages/Index';
import Footer from '../pages/Footer';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Index />
      <Footer />
    </React.Fragment>
  );
}