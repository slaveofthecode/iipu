import React from 'react'
import { Dropdown } from 'react-bootstrap'

type Props = {
}

const MenuOptions = (props: Props) => {

    return (
        <div style={{ background: 'red' }} className='w-auto' >
            <ul className='d-flex flex-column align-items-center justify-content-center'>
                <li><span>option 1</span></li>
                <li><span>option 2</span></li>
                <li><span>option 3</span></li>
            </ul>
            <ul>
                <li><span>history</span></li>
                <li><span>another option</span></li>
            </ul>
        </div>
    );

    // return (
    //     <Dropdown.Menu show>
    //         <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
    //         <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
    //         <Dropdown.Item eventKey="3">Action 3</Dropdown.Item>
    //         <Dropdown.Divider />
    //         <Dropdown.Item eventKey="4">History</Dropdown.Item>
    //     </Dropdown.Menu>
    // )
}

export default MenuOptions