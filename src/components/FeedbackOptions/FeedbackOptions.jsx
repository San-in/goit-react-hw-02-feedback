import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, OptionsButton } from './FeedBackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <OptionsButton type="button" value={option} onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </OptionsButton>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
