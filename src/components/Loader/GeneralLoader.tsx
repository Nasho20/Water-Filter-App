// react imports
import React from "react";

// assets
import './GeneralLoader.scss';

// import { i18n } from "@lingui/core";
// import { Trans } from "@lingui/macro"

interface Props {
    title?: any;
    body?: any;
}

/**
 * Component to render the general loader component
 * @param Type title: the title of the loading screen,
 * body: the body message for waiting to load
 * @returns General Loader component
 */

export default function GeneralLoader (props: Props) {
    return (
        <>
            <div className='mb-5'>
                <div className="p-4">
                <div className='row text-center pt-5 jc-center'>
                    <span className='loader'></span>
                    <br /><br /><br />
                    <h2 className='font-weight-bold'><b>{props?.title ?? <span>Loading</span> + '...'}</b></h2>
                    <br /><br />
                    <p className='grey-text break-words'>{props?.body ?? <span>Please wait</span>}</p>
                    <br /><br /><br />
                </div>
            </div>
            </div>
        </>
    )
}