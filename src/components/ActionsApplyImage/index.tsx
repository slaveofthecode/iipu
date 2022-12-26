/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'


const RENDER = {
    'crop': <div>crop</div>,
    'resize': <div>resize</div>,
    'rotate': <div>rotate</div>,
    'flip': <div>flip</div>,
    'flop': <div>flop</div>,
    'blur': <div>blur</div>,
    'sharpen': <div>sharpen</div>,
    'pixelate': <div>pixelate</div>,
    'vignette': <div>vignette</div>,
    'border': <div>border</div>,
    'rounded-corners': <div>rounded-corners</div>,
}

type Props = {}

const ActionsApplyImage = (props: Props) => {

    const [controlSetting, setControlSetting] = useState<JSX.Element>();

    // const drawControlSettings = () => RENDER[controlSetting];


    useEffect(() => {
        setControlSetting(RENDER['crop']);

    }, []);


    // return (
    //     <div>
    //         <ul classNameName="nav nav-pills nav-pills">
    //             <li classNameName="nav-item">
    //                 <a classNameName="nav-link active" aria-current="page" href="#">Active</a>
    //             </li>
    //             <li classNameName="nav-item">
    //                 <a classNameName="nav-link" href="#">Much longer nav link</a>
    //             </li>
    //             <li classNameName="nav-item">
    //                 <a classNameName="nav-link" href="#">Link</a>
    //             </li>
    //             <li classNameName="nav-item">
    //                 <a classNameName="nav-link disabled">Disabled</a>
    //             </li>
    //         </ul>
    //         <div>
    //             {controlSetting}
    //         </div>
    //     </div>
    // );

    return (
        <>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0} > soy home </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0} > soy profile </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}> soy contact </div>
                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex={0}> estoy disabled </div>
            </div>
        </>
    );
}

export default ActionsApplyImage