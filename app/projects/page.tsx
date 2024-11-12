import React from 'react';
import ProjectCards from '../components/ProjectCards';
export const metadata = {
  title: 'Get to know the Roho',
};
const Projects = () => {
  return (
    <div className='text-white container'>
      <h1 className='text-center text-3xl mt-2 mb-2'>Projects Page</h1>
      <ProjectCards />
    </div>
  );
};

export default Projects;
