
import React,{Component}from "react"
import FeedbackOptions from "./FeedbackOptions"
import Section from "./Section"
import Statistics from "./Statistics"
import Notification from "./Notification"

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    handleIncrement = e => {
      this.setState(prevState => ({
        [e]:prevState[e] + 1
      }));
    };

    countTotalFeedback = () => {
      return this.state.good + this.state.bad + this.state.neutral;
    };

    countPositiveFeedbackPercentage = () => {
      const total = this.countTotalFeedback();
      const result = (this.state.good/ total) * 100;
      return total === 0 ? 0 : result.toFixed();
    }; 

    render(){
      const buttonsFeedBack = Object.keys(this.state)
      const {good,neutral,bad} = this.state;
      const total = this.countTotalFeedback();

      return(
      <div > 
          <Section title="Please leave feedback">
          <FeedbackOptions 
          options ={buttonsFeedBack} 
          onLeaveFeedback = {this.handleIncrement}/>
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
          <Statistics 
            positivePercentage={this.countPositiveFeedbackPercentage()} 
            total = {total}
            good={good} 
            neutral={neutral}  
            bad={bad}/>) : (
            <Notification message="There is no feedback"/>
            )}
          </Section>
      </div>    
      )
    }
} 