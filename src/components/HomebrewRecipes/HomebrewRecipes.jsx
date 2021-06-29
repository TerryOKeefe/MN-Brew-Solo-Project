import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// function for HomebrewRecipes to display cards
function HomebrewRecipes() {

    // set dispatch variable
    const dispatch = useDispatch();

    // load once and dispatch fetch_recipes
    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, []);

    return (
        <div>
            <h1>Select A Brew To Make</h1>
        </div>
    )
} // end HomebrewRecipes

// export HomebrewRecipes
export default HomebrewRecipes