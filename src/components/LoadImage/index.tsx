import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

type Props = {}

const LoadImage = (props: Props) => {


  return (
    <div className='d-flex justify-content-between m-2 bg-light'>
      <div className='w-75'>
        <input list="listImages" name="listImages" className='form-control w-100' placeholder='select image to load...' />
        <datalist id='listImages'>
          <option value="Edge" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
      </div>
      <div className='w-25 ms-2'>
        <button className='btn btn-primary w-100'>Upload</button>
      </div>
    </div>
  );

  // return (
  //   <Container fluid className='p-3'>
  //     <Row>
  //       <Col md={9} className='py-2'> here dropdown / text with url / name of the file loaded </Col>
  //       <Col md={3} className='py-2'> button upload </Col>
  //     </Row>
  //   </Container>
  // );
}

export default LoadImage