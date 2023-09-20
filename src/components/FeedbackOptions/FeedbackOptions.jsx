import {Button,Section} from "./FeedbackOptions.styled"
import PropTypes from "prop-types"


const FeedbackOptions = ({options,onLeaveFeedback}) => {
   return (
    <Section>
      {options.map(option => (
      <Button 
      onClick={()=>{onLeaveFeedback(option)}}
      type="button" 
      key={option}>
       {option}
       </Button>
     ))}
     </Section>
   )
}

FeedbackOptions.propTypes = {
   options: PropTypes.array.isRequired,
   onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;
