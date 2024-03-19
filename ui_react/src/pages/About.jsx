import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto py-10 min-h-screen"  style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/pastel-pink-vignette-concrete-textured-background_53876-129734.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1710720000&semt=ais' }}>
      <h1 className="text-3xl font-bold mb-4">About Our Yoga Academy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Classes</h2>
          <p className="text-lg">
            Experience a variety of yoga classes tailored to all levels, from
            beginners to advanced practitioners. Our certified instructors guide
            you through asanas, pranayama, and meditation techniques for holistic
            well-being.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Awareness Workshops</h2>
          <p className="text-lg">
            Deepen your understanding of yoga philosophy, anatomy, and mindfulness
            through our informative workshops. Explore the ancient wisdom of yoga
            and learn practical tools for enhancing self-awareness and personal growth.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Wellness Training Programs</h2>
          <p className="text-lg">
            Join our comprehensive wellness training programs designed to nurture
            mind, body, and spirit. Dive into specialized topics such as stress
            management, Ayurveda, and holistic nutrition to cultivate vibrant health
            and vitality.
          </p>
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-8 z-10">
          <Link to='/explore'>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ">
          Explore More
        </button>
        </Link>
        </div>
        </div>
        
    
      </div>
    </div>
  );
};

export default About;
