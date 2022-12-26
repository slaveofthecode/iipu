/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

type Props = {}

const UrlGenerated = (props: Props) => {
    return (
        <div className='d-flex gap-2 justify-content-center align-items-center mb-2'>
            <pre className='p-2 m-0 bg-light border rounded-3' >https://assets.imgix.net/examples/butterfly.jpg?exp=11&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop&txt-width=dede&fill-color=red&fit=crop</pre>

            <a title='copy url' className='cursor-pointer w-fit-content h-fit-content'>
                <i className="bi bi-clipboard2"></i>
            </a>
            <a title='download' className='cursor-pointer w-fit-content h-fit-content' >
                <i className="bi bi-download"></i>
            </a>
        </div>
    );
}

export default UrlGenerated