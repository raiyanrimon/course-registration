import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa";
import { BsBook } from "react-icons/bs";



const Course = ({ course, handleSelectCourse }) => {
    const { cover, title, description, price, credit } = course
    return (
        <div className="my-5 mx-auto">
            <img src={cover} alt="" />
            <h2 className='font-semibold text-lg mt-2'>{title}</h2>
            <p className='text-sm mt-2 text-[#1C1B1B99]'>{description}</p>
            <div className='flex space-x-12 mt-3 text-[#1C1B1B99]'><p className='flex justify-center items-center'><FaDollarSign></FaDollarSign>Price: {price}</p>
                <p className='flex justify-center items-center'><BsBook></BsBook>&nbsp; credit: {credit}hr</p></div>
            <button onClick={() => handleSelectCourse(course)} className='mt-5 rounded-lg bg-[#2F80ED] text-white text-center py-3 px-[112px]'>Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func
}
export default Course;