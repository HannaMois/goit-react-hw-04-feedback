import { useState, useEffect } from 'react';
import { Box } from './App.styled';
import Section from '../Section';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedBack, setPositiveFeedback] = useState(0);

  const countTotalFeedback = () => setTotal(good + neutral + bad);

  const countPositiveFeedbackPercentage = () =>
    setPositiveFeedback(Number(((good / total) * 100).toFixed(0)));

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  });

  // const onLeaveFeedback = option => {
  //   switch (option) {
  //     case 'good':
  //       setGood(prevState => prevState + 1);
  //       return;
  //     case 'neutral':
  //       setNeutral(prevState => prevState + 1);
  //       return;
  //     case 'bad':
  //       setBad(prevState => prevState + 1);
  //       return;
  //     default:
  //       return;
  //   }
  // };

  const onLeaveFeedback = option => {
    if (option === 'good') {
      setGood(prevState => prevState + 1);
      return;
    }
    if (option === 'neutral') {
      setNeutral(prevState => prevState + 1);
      return;
    }
    if (option === 'bad') {
      setBad(prevState => prevState + 1);
      return;
    }
  };

  const options = {
    good,
    neutral,
    bad,
  };

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
