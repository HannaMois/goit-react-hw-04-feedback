import PropTypes from 'prop-types';
import { FeedbackBox, FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionName = Object.keys(options);

  return (
    <FeedbackBox>
      {optionName.map((option, index) => (
        <FeedbackBtn
          key={index}
          className={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackBox>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
