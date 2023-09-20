import {Container,Text} from "./Statistics.styled"
import PropTypes from "prop-types"

const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
return (
    <Container>
        <Text>good:{good}</Text>
        <Text>neutral:{neutral}</Text>
        <Text>bad:{bad}</Text>
        <Text>Total:{total}</Text>
        <Text>Positive feedback:{positivePercentage}%</Text>
    </Container>
)
}

export default Statistics;

Statistics.propTypes ={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.string.isRequired
}