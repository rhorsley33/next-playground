import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import {
  TbPentagonNumber1,
  TbPentagonNumber3,
  TbPentagonNumber5,
  TbPentagonNumber9,
} from 'react-icons/tb';
import classNames from 'classnames';

interface SkillsProps {
  id: number;
  name: string;
  years_experience: number;
  img_url: Url;
  type: string;
  category: string;
}
async function fetchSkills(): Promise<SkillsProps[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const coursesApiResponse = await response.json();
  return coursesApiResponse;
}

const Skills = async () => {
  const skills = await fetchSkills();
  const primarySkills = skills.filter((skill) => skill.category === 'primary');
  const secondarySkills = skills.filter(
    (skill) => skill.category === 'secondary'
  );
  return (
    <div className='xl:w-1/2 w-full mt-10'>
      <div className='flex flex-wrap row justify-center'>
        {primarySkills.map((skill) => (
          <div
            className='card skill-card xl:w-1/4 md:w-1/5 w-4/12 sm:h-40 h-32 shadow-lg shadow-slate-300/50 transition-transform duration-250 ease-in-out transform hover:scale-105 rounded-lg shadow-md'
            key={skill.id}
          >
            <h2 className='text-slate-900 bg-gradient-to-r from-customblue to-gray-500 text-center uppercase md:text-xl text-sm'>
              {skill.name}
            </h2>
            <div className='absolute inset-0 bg-gradient-to-t from-gray-500 to-transparent opacity-20 rounded-t-lg'></div>
            <div
              className={classNames(
                `${skill.name.toLowerCase()}-card`,
                'p-3 transition-colors duration-500 flex flex-row w-full items-center justify-around sm:mt-2 md:mt-3 xl:mt-2 mt-3'
              )}
            >
              <div className='year-icon-wrapper flex flex-col justify-center items-center order-1'>
                {skill.years_experience === 1 && (
                  <TbPentagonNumber1 size={24} color={'#0f1t2b'} />
                )}
                {skill.years_experience === 3 && (
                  <TbPentagonNumber3 size={24} color={'#0f1t2b'} />
                )}
                {skill.years_experience === 5 && (
                  <TbPentagonNumber5 size={24} color={'#0f1t2b'} />
                )}
                {skill.years_experience === 9 && (
                  <TbPentagonNumber9 size={24} color={'#0f172b'} />
                )}
                <p className='lg:text-lg text-med font-normal text-center'>
                  Years
                </p>
              </div>
              <div className='skill-img-wrapper order-0'>
                <Image
                  src={`${skill.img_url}`}
                  alt={`Image Icon for ${skill.name}`}
                  width={100}
                  height={100}
                  className='imagetester'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='bg-white w-10/12 mx-auto rounded-md'>
        <div className='w-full flex flex-wrap flex-row justify-around'>
          {secondarySkills.map((skill) => (
            <div
              className='w-1/12 h-15 content-center pt-2 pb-2'
              key={skill.id}
            >
              <Image
                src={`${skill.img_url}`}
                alt={`Image Icon for ${skill.name}`}
                width={60}
                height={60}
                className={`transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-120`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
