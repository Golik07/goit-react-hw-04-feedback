
import {useState}from "react"
import FeedbackOptions from "./FeedbackOptions"
import Section from "./Section"
import Statistics from "./Statistics"
import Notification from "./Notification"

export const  App = () =>  {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

   const handleIncrement = e => {
    switch (e) {
      case "good":
        setGood(pre => pre + 1);
        break;
        case "neutral":
        setNeutral(pre => pre + 1);
        break;
        case "bad":
        setBad(pre => pre + 1);
        break;
      default:
        break;
    }
   }

    const countTotalFeedback = () =>  good + bad + neutral;

    const countPositiveFeedbackPercentage = () => {
      const total = countTotalFeedback();
      const result = (good/ total) * 100;
      return total === 0 ? 0 : result.toFixed();
    }; 

      const buttonsFeedBack = Object.keys({good,neutral,bad})
      const total = countTotalFeedback();

      return(
      <div > 
          <Section title="Please leave feedback">
          <FeedbackOptions 
          options ={buttonsFeedBack} 
          onLeaveFeedback = {handleIncrement}/>
          </Section>
          <Section title="Statistics">
            {total > 0 ? (
          <Statistics 
            positivePercentage={countPositiveFeedbackPercentage()} 
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