import React from 'react'
import { Container } from 'react-bootstrap'

type Props = {}

const UrlGenerated = (props: Props) => {
    return (
        <div className='d-flex'>
            <pre>https://assets.imgix.net/examples/butterfly.jpg?exp=11&txt-width=dede&fill-color=red&fit=crop</pre>
            <i className="bi bi-clipboard2"></i>
        </div>
    );

    // return (
    //     <Container>
    //         footer
    //     </Container>
    // )
}

export default UrlGenerated