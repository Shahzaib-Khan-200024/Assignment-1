import React from 'react';

const About = () => {
  return (
    <div id='about' className='container pt-32'>
      {/* Heading */}
      <h2 className='text-4xl md:text-5xl text-center font-semibold' data-aos="zoom-in-up">
        About Me
      </h2>
      
      {/* Description */}
      <p className='text-gray-500 pt-6 text-center text-xl max-w-4xl mx-auto' data-aos="zoom-in-up">
        I'm a software engineer with a deep passion for developing scalable and efficient systems that make a real impact. 
        My expertise spans Full Stack Development, with a focus on creating seamless and high-performance user experiences. 
        Currently, I'm working on innovative projects that blend modern technologies with user-centric design. 
        I thrive on solving complex challenges and continuously seek opportunities to grow and enhance my skills in emerging fields like AI and Web3.
      </p>
    </div>
  );
}

export default About;
