import React from 'react';

function Body() {
  return (
    <div id='main-div' className="h-96 flex flex-col justify-evenly p-10 m-10">
        <div id='d1'>
            <button id='one-btn' className="bg-blue-500 text-white font-semibold text-lg m-10 px-6 py-2 rounded">Button One</button>
        </div>
        <div id='d2' className="border-2 border-red-500 bg-red-200 flex items-center rounded-md w-4/5">
            <p id='alert' className="ml-4 ">
                <span id='alert-style' className="text-red-700 font-semibold">Alert! </span>
                This is awesome!
            </p>
        </div>
        <div id='d3' className="h-96 flex justify-center">
            <div id='d3-sub' className="shadow-md w-106 h-52 text-gray-700 font-semibold rounded-md flex items-center justify-between">
                <img id='logo-k' src='https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png' alt="Kalvium Logo" className="h-16 ml-4"/>
                <div id='d3-sub1' className="mx-8">
                    <p id='store' className="text-3xl text-black">Kalvium Store</p>
                    <p>You have a new course!</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Body;
