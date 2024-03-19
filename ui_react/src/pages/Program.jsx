import React from 'react';

const Program = () => {
  const handleJoinClass = (className) => {
    alert(`You have scheduled the ${className} class!`);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Yoga Program</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Health Benefits */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Health Benefits</h2>
          <p className="text-gray-700 mb-2">Time: 8:00 AM - 9:00 AM</p>
          <p className="text-gray-700 mb-2">Instructor: Sarah Johnson</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleJoinClass('Health Benefits')}
          >
            Schedule Class
          </button>
        </div>

        {/* Pregnant Women */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Prenatal Yoga</h2>
          <p className="text-gray-700 mb-2">Time: 10:00 AM - 11:00 AM</p>
          <p className="text-gray-700 mb-2">Instructor: Rachel Miller</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleJoinClass('Prenatal Yoga')}
          >
            Schedule Class
          </button>
        </div>

        {/* Hair Loss */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Hair Loss Prevention</h2>
          <p className="text-gray-700 mb-2">Time: 2:00 PM - 3:00 PM</p>
          <p className="text-gray-700 mb-2">Instructor: David Anderson</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleJoinClass('Hair Loss Prevention')}
          >
            Schedule Class
          </button>
        </div>

        {/* Weight Gain */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Weight Gain Program</h2>
          <p className="text-gray-700 mb-2">Time: 4:00 PM - 5:00 PM</p>
          <p className="text-gray-700 mb-2">Instructor: Michael Roberts</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleJoinClass('Weight Gain Program')}
          >
            Schedule Class
          </button>
        </div>

        {/* Weight Loss */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Weight Loss Journey</h2>
          <p className="text-gray-700 mb-2">Time: 6:00 PM - 7:00 PM</p>
          <p className="text-gray-700 mb-2">Instructor: Laura Davis</p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => handleJoinClass('Weight Loss Journey')}
          >
            Schedule Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
