import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='min-h-screen'><Outlet></Outlet></div>
      <Footer></Footer>
    </>
  );
};

export default Root;
