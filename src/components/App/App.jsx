import { useState } from 'react';
import { Box } from './App.styled';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () =>
    Number(((good / total) * 100).toFixed(0));

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(p => p + 1);
    if (option === 'neutral') setNeutral(p => p + 1);
    if (option === 'bad') setBad(p => p + 1);
  };

  const options = {
    good,
    neutral,
    bad,
  };

  const total = good + neutral + bad;
  const positiveFeedBack = countPositiveFeedbackPercentage();

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedBack}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};

export default App;
