import React from 'react';
import uuid from 'react-uuid';
import { OptionsList } from './FeedBackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={uuid()}>
          <button type="button" value={option} onClick={onLeaveFeedback}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        </li>
      ))}
    </OptionsList>
  );
};
