import React from 'react'
import { Container, Figure } from 'react-bootstrap'

type Props = {}

const ImageRendering = (props: Props) => {
    return (
        <div style={{ background: 'yellow' }} className='w-100'>
            image
        </div>
    );
    // return (
    //     <Container>
    //         <Figure>
    //             <Figure.Image
    //                 width={171}
    //                 height={180}
    //                 alt="171x180"
    //                 // src="holder.js/171x180"
    //                 src="https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.8-ladc.gif"
    //             />
    //             <Figure.Caption>
    //                 Nulla vitae elit libero, a pharetra augue mollis interdum.
    //             </Figure.Caption>
    //         </Figure>
    //     </Container>
    // )
}

export default ImageRendering