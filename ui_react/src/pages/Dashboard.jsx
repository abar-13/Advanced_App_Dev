import React, { useState } from 'react';

const Dashboard = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
   
    setProfilePhoto(file);
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 text-white w-1/5 p-4"> {/* Reduced width to w-1/5 */}
        <div className="flex justify-center items-center mb-4">
          {profilePhoto ? (
            <img
              src={URL.createObjectURL(profilePhoto)}
              alt="Profile"
              className="rounded-full h-20 w-20 object-cover"
            />
          ) : (
            <label htmlFor="photoInput" className="cursor-pointer">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full h-20 w-20 object-cover"
              />
              <input
                type="file"
                id="photoInput"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          )}
        </div>
        
        <ul className="space-y-2">
          <li><a href="/" className="block hover:bg-gray-700 py-2 px-4 rounded">Home</a></li>
          <li><a href="/courses" className="block hover:bg-gray-700 py-2 px-4 rounded">Yoga Program</a></li>
          <li><a href="/schedule" className="block hover:bg-gray-700 py-2 px-4 rounded">Yoga Teacher Trainer</a></li>
          <li><a href="/tainer" className="block hover:bg-gray-700 py-2 px-4 rounded">Schedule</a></li>
          <li><a href="/" className="block hover:bg-gray-700 py-2 px-4 rounded">Settings</a></li>
        </ul>
      </div>
      <div className="bg-gray-200 w-4/5 p-8"> 
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Yoga Academy</h1>
      </div>
    </div>
  );
};

export default Dashboard;
