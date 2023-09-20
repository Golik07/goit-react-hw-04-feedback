import PropTypes from "prop-types"
import {Section,Text} from "./Notification.styled"


const Notification = ({message}) => {
return (
   <Section>
    <Text>{message}</Text>
   </Section>
)
};

export default Notification;

Notification.propTypes={
    message:PropTypes.string.isRequired
}