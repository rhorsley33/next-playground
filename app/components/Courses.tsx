import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

interface CourseProps {
  id: number;
  skill: string;
  description: string;
  link: Url;
  logo: Url;
}
async function fetchCourses(): Promise<CourseProps[]> {
  const response = await fetch('http://localhost:3000/api/courses');
  const coursesApiResponse = await response.json();
  return coursesApiResponse;
}

const Courses = async () => {
  const courses = await fetchCourses();
  return (
    <>
      <div className='card'>
        {courses.map((course) => (
          <div key={course.id}>
            <h2>{course.skill}</h2>
            <p>{course.description}</p>
            <Link href={course.link}>
              <img src={course.logo} alt={course.skill} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
