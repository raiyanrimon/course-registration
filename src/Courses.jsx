import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from 'prop-types'
import Cart from "./Cart";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalCost]= useState(0);
    const [totalPrice, setTotalPrice]= useState(0)
    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const handleSelectCourse = (course) =>{
        const isExist = selectedCourse.find(item => item.id=== course.id);
        let priceCount = course.price;
        let count = course.credit;
        if(isExist){
          return  alert('Already added')
        }
        else{
            selectedCourse.forEach(item =>{
                count = count + item.credit;
                priceCount = priceCount + item.price;
            })
        const remaining = 20 - count;
        if(count > 20){
            alert('You can not add more credit')
        }
       
         else{
            setTotalPrice(priceCount)
        setTotalCost(count)
        setRemaining(remaining)
            setSelectedCourse([...selectedCourse, course])
         }}
      }
      console.log(selectedCourse)
    return (
        <div className="md:flex">
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
            courses.map(course=> <Course key={course.id}
                handleSelectCourse={handleSelectCourse}
                course={course}></Course>)
           } 

        </div>
        <Cart selectedCourse={selectedCourse}
        remaining={remaining}
        totalCost={totalCost}
        totalPrice={totalPrice}
        ></Cart>
        </div>
    );
};

Courses.propTypes={
    handleSelectCourse: PropTypes.func  
}
export default Courses;