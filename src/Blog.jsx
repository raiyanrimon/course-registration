import PropTypes from 'prop-types'

const Blog = ({ blog, handleAddToCart }) => {
    const { cover, title, description, price, credit } = blog
    return (
        <div className="my-5 mx-auto">
            <img src={cover} alt="" />
            <h2 className='font-semibold text-lg mt-2'>{title}</h2>
            <p className='text-sm mt-2 text-[#1C1B1B99]'>{description}</p>
            <div className='flex justify-between mt-3 text-[#1C1B1B99]'><p>Price: {price}</p>
                <p>credit: {credit}hr</p></div>

            <button onClick={() => handleAddToCart(blog)} className='mt-5 rounded-lg bg-[#2F80ED] text-white text-center py-3 px-[112px]'>Select</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}
export default Blog;