import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function EditRecipe() {
    
    // set dispatch and history variable
    const dispatch = useDispatch();
    const history = useHistory();

    // get edit details from redux store
    const editRecipe = useSelector(store => store.edit)
    // console log to see data
    console.log('Edit details', editRecipe);

    // function to handle change
    const handleChange = (event) => {
        // dispatch changes
        dispatch({
            type: 'EDIT_ONCHANGE',
            payload: { key: event.target.name, value: event.target.value }
        })
    } // end handleChange

    // function to handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // console log submit button clicked
        console.log('Submit Edit Clicked', editRecipe);

        // dispatch edit data
        dispatch({
            type: 'SUBMIT_EDIT',
            payload: editRecipe
        })

        // navigate to recipes page
        history.push('/recipes');
    } // end handleSubmit

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
                        name="style"
                        type="text"
                        value={editRecipe.style}
                        placeholder="style"
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="image"
                        type="text"
                        placeholder="image"
                        value={editRecipe.image}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="original_gravity"
                        type="number"
                        placeholder="original gravity"
                        value={editRecipe.original_gravity}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="ferment_time"
                        type="text"
                        placeholder="ferment time"
                        value={editRecipe.ferment_time}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="bottle_time"
                        type="text"
                        placeholder="bottle time"
                        value={editRecipe.bottle_time}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="malt_extract"
                        type="text"
                        placeholder="malt extract"
                        value={editRecipe.malt_extract}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="hops"
                        type="text"
                        placeholder="hops"
                        value={editRecipe.hops}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="yeast"
                        type="text"
                        placeholder="yeast"
                        value={editRecipe.yeast}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input
                        name="priming_sugar"
                        type="text"
                        placeholder="priming sugar"
                        value={editRecipe.priming_sugar}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <textarea
                        name="intro"
                        type="text"
                        placeholder="intro"
                        value={editRecipe.intro}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <textarea
                        name="brew_day"
                        type="text"
                        placeholder="brew day"
                        value={editRecipe.brew_day}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <textarea
                        name="fermentation"
                        type="text"
                        placeholder="fermentation"
                        value={editRecipe.fermentation}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <textarea
                        name="bottling"
                        type="text"
                        placeholder="bottling"
                        value={editRecipe.bottling}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <textarea
                        name="conditioning"
                        type="text"
                        placeholder="conditioning"
                        value={editRecipe.conditioning}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
} // end Edit Recipe

// export EditRecipe
export default EditRecipe;