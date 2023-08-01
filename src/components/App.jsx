import { useState } from "react";
import { FeedbackOptions } from "./feedback-options/feedback-options";
import { Statistics } from "./statistics/statistics";
import { Section } from './section/section';
import { Notification } from './notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbacks = [good, neutral, bad];
  const marks = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
      switch (option) {
        case 'good':
          setGood(prevState => prevState + 1);
        break;
        case 'neutral':
          setNeutral(prevState => prevState + 1);
        break;
        case 'bad':
          setBad(prevState => prevState + 1);
          break;

          default: alert('You did not leave the feedback, please leave');
      }
  };

  const handlerTotalSum = () => {
    const arrayOfStateValues = feedbacks;
    const totalSum = arrayOfStateValues.reduce((acc, value) => acc + value, 0);
    return totalSum;
  };

  const handlerGetPercentage = () => {
    const totalSum = handlerTotalSum();
    const percentage = (good / totalSum) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(0);
  };

  
    
    const conditionForRender = feedbacks.every(value => value === 0);
    

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={marks} onLeaveFeedback={onLeaveFeedback} />
        {conditionForRender
        ? <Notification message="There is no feedback" />
        :<Statistics good={good} neutral={neutral} bad={bad} total={handlerTotalSum()} positivePercentage={handlerGetPercentage()} />}
      </Section>
    );
};
