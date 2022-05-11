import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.FeedbackOptions}>
      {options.map(option => (
        <button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
          className={s.button}
        >
          {option}
        </button>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
