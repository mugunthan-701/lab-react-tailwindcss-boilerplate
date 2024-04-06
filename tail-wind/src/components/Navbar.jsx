import React from 'react';

function Navbar() {
  return (
    <nav id='nav-bar' className="bg-red-500 flex justify-between items-center h-16">
      <div id='nav1' className="flex items-center space-x-4 ml-4">
        <p id='logo' className="text-white font-semibold text-2xl">Kalvium</p>
        <p className="text-white">About Us</p>
        <p className="text-white">Contacts</p>
        <p className="text-white">Courses</p>
      </div>
      <div id='nav2' className="mr-4">
        <button id='login' className="bg-red-500 text-white font-semibold px-4 py-2 border border-white rounded">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
