import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-500 h-16 flex justify-center items-center font-rubik text-gray-700 mt-48">
        &copy; Copyright:
        <span id='brand' className="text-black ml-1">Kalvium</span>
      </footer>
    </div>
  );
}

export default Footer;
