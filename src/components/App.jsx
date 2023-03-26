import React, { Component } from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseStateValue = e => {
    const { value } = e.currentTarget;

    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const marksValues = Object.values(this.state);
    return marksValues.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${
      this.countTotalFeedback()
        ? Math.round(
            (Number(this.state.good) * 100) / Number(this.countTotalFeedback())
          )
        : 0
    }%`;
  };

  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {' '}
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.increaseStateValue}
            options={Object.keys(this.state)}
          />
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
