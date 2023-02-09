import PropTypes from 'prop-types';
import { FeedbackBox, FeedbackBtn } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <FeedbackBox>
      {options.map((option, index) => (
        <FeedbackBtn
          key={index}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackBox>
  );

  FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  export default FeedbackOptions;