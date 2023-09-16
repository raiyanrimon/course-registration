import PropTypes from 'prop-types'
import Credit from './Credit';

const Credits = ({creditTitles}) => {
    return (
        <div className="md:max-w-1/3 ml-10">
          <h2 className="text-[#2F80ED] font-bold text-lg">Credit Hour Remaining: hr</h2>
          <div>
           <h2> CreditTitles: {creditTitles.length}</h2>
            {
              creditTitles.map((creditTitle,idx) => <Credit key={idx} creditTitle ={creditTitle}></Credit>)
            }
            </div>  
        </div>
    );
};

Credits.propTypes ={
  creditTitles: PropTypes.array
}
export default Credits;