import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import FooterFirst from '../FooterFirst/FooterFirst';
import FooterSecond from '../FooterSecond/FooterSecond';

export default function Layout() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <>

      <Navbar setNavbarHeight={setNavbarHeight} />

      <div className='content  ' style={{ marginTop: `${navbarHeight}px` }}>

        <Outlet />
      </div>
      <FooterFirst />
      <FooterSecond />
    </>
  );
}
