import React from 'react'

type withModalProps = {
    position?: 'TOP' | 'BOTTOM' | 'LEFT' | 'RIGHT' | 'CENTER'
}

const withModal = (Component: React.FunctionComponent<any>, withModalProp?: withModalProps) => (props: any) => {

    // console.log('POSITION', withModalProp ?? 'CENTER');

    return (
        <div className='modal-center' >
            <Component {...props} />
        </div>
    );

};

export default withModal;