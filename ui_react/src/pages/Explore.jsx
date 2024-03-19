import React, { useState } from 'react';

const Explore = () => {
  // Dummy data for available yoga programs
  const availablePrograms = [
    {
      id: 1,
      name: 'Hatha Yoga',
      day: 'Monday',
      time: '9:00 AM - 10:00 AM',
    },
    {
      id: 2,
      name: 'Vinyasa Flow',
      day: 'Wednesday',
      time: '6:00 PM - 7:00 PM',
    },
    {
      id: 3,
      name: 'Yin Yoga',
      day: 'Friday',
      time: '7:30 AM - 8:30 AM',
    },
    {
      id: 4,
      name: 'Yin Yoga',
      day: 'Friday',
      time: '7:30 AM - 8:30 AM',
    },
  ];

  // State to track the selected slot for editing
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Function to handle booking slot
  const handleBookSlot = (programName) => {
    alert(`Slot for ${programName} booked successfully!`);
  };

  // Function to handle editing slot
  const handleEditSlot = (program) => {
    setSelectedSlot(program);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedSlot(null);
  };

  return (
    <div className='bg-red-300 min-h-screen'  style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg' }}>
    <div className="container" >
      <h1 className="text-3xl font-bold mb-6">Available Yoga Programs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availablePrograms.map(program => (
          <div key={program.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-xl font-bold mb-2">{program.name}</h2>
              <p className="text-gray-600 mb-2">Day: {program.day}</p>
              <p className="text-gray-600 mb-2">Time: {program.time}</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
              <button
                onClick={() => handleBookSlot(program.name)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
              >
                Book Slot
              </button>

            </div>
          </div>
        ))}
      </div>
      {/* Modal for editing slot */}
      {selectedSlot && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-xl font-bold mb-4">Edit Slot</h2>
            <p>Name: {selectedSlot.name}</p>
            <p>Day: {selectedSlot.day}</p>
            <p>Time: {selectedSlot.time}</p>
            <button
              onClick={handleCloseModal}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Explore;
