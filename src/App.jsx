import { useState } from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from 'components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    const stateName = e.target.name;
    console.log(stateName);
    switch (stateName) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const names = {
    good,
    neutral,
    bad,
  };
  const options = Object.keys(names);

  const total = good + neutral + bad;
  console.log(total);
  const countPositiveFeedbackPercentage = (good, total) =>
    Math.round((good * 100) / total);
  const PositivePercentage = countPositiveFeedbackPercentage(good, total);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={total === 0 ? 0 : PositivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

// class oldApp extends  {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = e => {
//     const stateName = e.target.name;
//     console.log(stateName);
//     this.setState(state => ({ [stateName]: state[stateName] + 1 }));
//     console.log(this.state);
//   };

//   countTotalFeedback = result =>
//     Object.values(result).reduce((acc, el) => acc + el);

//   countPositiveFeedbackPercentage = (good, total) =>
//     Math.round((good * 100) / total);

//   render() {
//     const { good, neutral, bad } = this.state;
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback(this.state);
//     const PositivePercentage = this.countPositiveFeedbackPercentage(
//       good,
//       total
//     );

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistic">
//           {total > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={total === 0 ? 0 : PositivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
