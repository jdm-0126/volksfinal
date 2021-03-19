import React from 'react'
import { Row, Col, Container } from 'reactstrap'

const Section = ({ children, color, center, fluid }) => {
    return (
        <Container fluid={fluid} className="h-100">
              <Row className={`h-100 ${color && 'bg-' + color}`}>
            <Col className={`d-flex flex-column ${center && 'align-items-center justify-content-center'}`}>
                {children}
            </Col>
        </Row>
        </Container>
      
    )
}

export default Section
