import PropTypes from 'prop-types'
const Credit = (creditTitle) => {
    const {title} = creditTitle
    return (
        <div>
          <h3>{title}</h3>  
        </div>
    );
};
Credit.propTypes ={
    creditTitle: PropTypes.object
}
export default Credit;