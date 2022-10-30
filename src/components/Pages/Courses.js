import { useLoaderData } from 'react-router-dom';
import './Courses.css'
import LeftSide from './CourseSide/LeftSide';
import RightSide from './CourseSide/RightSide';

const Courses = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div className='min-h-screen bg-base-200 course'>
            <div>
                <LeftSide></LeftSide>
            </div>
            <div>
                <RightSide></RightSide>
            </div>
        </div>

    );
};

export default Courses;