import React from 'react';

const HomePage = () => {
  return (
    <div className='xl:w-1/2 w-full text-slate-900 mt-10'>
      <section className='bg-white rounded-lg max-w-2xl mx-auto shadow-lg shadow-slate-900/50'>
        <h2 className='about-header text-2xl uppercase text-slate-900 mb-4 p-3 text-center bg-gradient-to-r from-customblue to-gray-500'>
          About Me
        </h2>
        <div className='p-8 about-wrapper'>
          <p className='text-lg text-gray-700 mb-6'>
            Hello! I’m a dedicated and passionate Software Engineer with over 10
            years of experience. I love learning new technologies, bringing
            positivity to every project, and working with teams to create
            impactful solutions.
          </p>

          <ul className='list-disc pl-6 space-y-3 text-gray-700'>
            <li>
              <strong>Experience:</strong> Full stack, but with a front-end
              focus. Skilled in implementing complex ideas into useful and
              intuitive solutions. Refactored multiple applications to ensure
              they were WCAG compliant and responsive. Familiar with WordPress,
              Drupal and Joomla.
            </li>
            <li>
              <strong>Work Ethic:</strong> Resilient and determined. Believe
              strongly in the mantra &quot;Work Hard, Play Hard&quot;. When it&apos;s time work
              I get to business and push until task is complete.
            </li>
            <li>
              <strong>Core Values:</strong> Team-oriented, positive energy, and
              an easy-going approach. I believe in supporting my coworkers in
              whatever capacity I can. Win as a team, lose as a team...
            </li>
            <li>
              <strong>Life Outside of Work:</strong> Family-oriented and enjoy
              spending time with my wife and kids. Huge Disney fan, nature
              lover, and an avid hiker with my dog. I&apos;ve always got a stash of
              granola for an afternoon adventure.
            </li>
            <li>
              <strong>Future Goals:</strong> Passionate about helping others
              break into tech. I aim to create pathways for those from less
              ideal circumstances or those seeking a career change.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
