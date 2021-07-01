import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditRecipe() {

    const dispatch = useDispatch();

    // get edit details from redux store
    const editRecipe = useSelector(store => store.edit)
    // console log to see data
    console.log('Edit details', editRecipe);


    const handleChange = (event) => {
        dispatch({ 
            type: 'EDIT_ONCHANGE',
            payload: {key: event.target.name, value: event.target.value}
        })
    } // end handleChange

    const handleSubmit = (event) => {
        event.preventDefault();
        // console log submit button clicked
        console.log('Submit Edit Clicked', editRecipe);
        dispatch({
            type: 'SUBMIT_EDIT',
            payload: editRecipe
        })
    }

    return (
        <div>
            <div>
                <h1>Edit Recipe</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="name"
                        type="text"
                        value={editRecipe.name}
                        placeholder="name"
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.style}
                        onChange={(event) => handleChange('style', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.image}
                        onChange={(event) => handleChange('image', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.original_gravity}
                        onChange={(event) => handleChange('original_gravity', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.ferment_time}
                        onChange={(event) => handleChange('ferment_time', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.bottle_time}
                        onChange={(event) => handleChange('bottle_time', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.malt_extract}
                        onChange={(event) => handleChange('malt_extract', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.hops}
                        onChange={(event) => handleChange('hops', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.yeast}
                        onChange={(event) => handleChange('yeast', event.target.value)}
                    />
                </div>
                <div>
                    <input
                        value={editRecipe.priming_sugar}
                        onChange={(event) => handleChange('priming_sugar', event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        value={editRecipe.intro}
                        onChange={(event) => handleChange('intro', event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        value={editRecipe.brew_day}
                        onChange={(event) => handleChange('brew_day', event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        value={editRecipe.fermentation}
                        onChange={(event) => handleChange('fermentation', event.target.value)}
                    />
                </div>
                <div>
                    <textarea
                        value={editRecipe.bottling}
                        onChange={(event) => handleChange('bottling', event.target.value)} 
                    />
                </div>
                <div>
                    <textarea
                        value={editRecipe.conditioning}
                        onChange={(event) => handleChange('conditioning', event.target.value)}
                    />
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
} // end Edit Recipe

// export EditRecipe
export default EditRecipe;