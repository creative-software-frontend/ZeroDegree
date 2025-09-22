import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
