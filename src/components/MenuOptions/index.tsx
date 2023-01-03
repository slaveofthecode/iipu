import React from 'react'

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
}

export default MenuOptions