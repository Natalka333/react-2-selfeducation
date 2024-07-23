import Section from "./Section/Section";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";
import React from "react";



class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickFeedback = (state) => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }))
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  persentPositiveFeedback = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return Math.round((good / total) * 100) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.persentPositiveFeedback();
    const options = Object.keys(this.state);
    console.log(options);



    return (
      <div>

        <Section title='Please leave feedback' >
          <FeedbackOptions
            handleClickFeedback={this.handleClickFeedback}
            options={options}
          />
        </Section>
        <Section title='Statistics'>
          {totalFeedback !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedback={positiveFeedback}
            />) : (<Notification message="There is no feedback" />)
          }
        </Section>

      </div>
    )
  }
}

export { App };


