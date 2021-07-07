import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HopsLogo from '../HopsLogo/HopsLogo';

function CreatedBrew() {

    // set variable for useDispatch
    const dispatch = useDispatch();

    // get created brew from redux store
    const created = useSelector(store => store.created);

    useEffect(() => {
        dispatch({ type: 'FETCH_CREATED' });
    }, []);

    return (
        <div>
            <div className="component-head"> 
                <h1>Created Brew</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
            <div>
                {created.map((create) => {
                    return (
                        <div>
                            {create.name} | {create.style} | {create.date}
                        </div>
                    )
                })}
            </div>
        </div>
    )
} // end CreatedBrew

// export CreatedBrew
export default CreatedBrew;