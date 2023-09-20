import {Container,Text} from "./Section.styled"
import PropTypes from "prop-types"

const Section = ({title,children}) => {
return (
<Container>
     <Text>
    {title}
    </Text>
    {children}
</Container>
)
}

export default  Section;

Section.propTypes={
    title:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired
}

