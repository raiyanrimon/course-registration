/* eslint-disable react/prop-types */


const Cart = ({selectedCourse, totalCost, remaining, totalPrice}) => {
    let count = 1;
    return (
        <div>
            <h2 className='text-[#2F80ED] my-5 font-bold'>Credit Hour Remaining:{remaining}  hr</h2>
            <hr />
            <div className="my-5"> 
                {selectedCourse.map((course)=> 
                    <p key={course.id}>{count++}. {course.title}</p>
                )}
            </div>
            <hr />
            <p className="my-3">Total Credit Hour : {totalCost} hr</p>
            <hr />
            <p>Total Price: {totalPrice} USD</p>
        </div>
    );
};

export default Cart;