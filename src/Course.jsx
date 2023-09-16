import PropTypes from 'prop-types'

const Course = ({course, handleSelectCourse}) => {
    const { cover, title, description, price, credit } = course
    return (
        <div className="my-5 mx-auto">
            <img src={cover} alt="" />
            <h2 className='font-semibold text-lg mt-2'>{title}</h2>
            <p className='text-sm mt-2 text-[#1C1B1B99]'>{description}</p>
            <div className='flex justify-between mt-3 text-[#1C1B1B99]'><p>Price: {price}</p>
                <p>credit: {credit}hr</p></div>

            <button onClick={()=>handleSelectCourse(course)}  className='mt-5 rounded-lg bg-[#2F80ED] text-white text-center py-3 px-[112px]'>Select</button>

        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func
}
export default Course;