import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

// function for recipe details page
function RecipeDetails() {

    // variable for class styles 
    const classes = useStyles();

    // set dispatch and history variable
    const dispatch = useDispatch();
    const history = useHistory();

    // get details from the redux store 
    const details = useSelector(store => store.details);
    // console log to see data from redux store
    console.log('Details:', details);

    const [created, setCreated] = useState({
        name: '',
        style: '',
        notes: '',
        date: '',
        user_id: null
    });

    // function to set new values for created brew
    const handleInputs = (key, value) => {
        // set created object with key and values from form
        setCreated({...created,
        [key]: value,
        });
    };

    // function to handleSubmit
    const handleSubmit = (event) => {
        console.log(created);
        // dispatch created to 'SET_CREATED'
        dispatch({ type: 'SET_CREATED', payload: created});
    }

    const handleClick = (detail) => {
        // console log to see data passed in
        console.log('Clicked Edit Recipe', detail);

        // dispatch details to 'EDIT_RECIPE'
        dispatch({ type: 'EDIT_RECIPE', payload: detail });

        // navigate to edit page
        history.push('/edit');
    }

    return (
        <div>
            <h1>Recipe Details</h1>
            <section>
                {details.map(detail => {
                    return (
                        <div>
                            <div>
                                <button
                                    onClick={() => handleClick(detail)}
                                >Edit</button>
                                <img src={detail.image} />
                            </div>
                            <div>
                                <h1>{detail.name}</h1>
                                <h3>{detail.style}</h3>
                            </div>
                            <div>
                                <h4>{detail.intro}</h4>
                            </div>
                            <div>
                                <h4>Original Gravity: {detail.original_gravity}</h4>
                                <h4>Brew Time: {detail.ferment_time} | {detail.bottle_time}</h4>
                            </div>
                            <div>
                                <h2>Kit Inventory:</h2>
                                <h4>{detail.malt_extract}</h4>
                                <h4>{detail.hops}</h4>
                                <h4>{detail.yeast}</h4>
                                <h4>{detail.priming_sugar}</h4>
                            </div>
                            <div>
                                <h2>Brewing Day Instructions</h2>
                                <h4>{detail.brew_day}</h4>
                            </div>
                            <div>
                                <h2>Fermentation</h2>
                                <h4>{detail.fermentation}</h4>
                            </div>
                            <div>
                                <h2>Bottling Day</h2>
                                <h4>{detail.bottling}</h4>
                            </div>
                            <div>
                                <h2>Conditioning</h2>
                                <h4>{detail.conditioning}</h4>
                            </div>
                            <div>
                                <h2>Brewer's Notes</h2>
                                <h4>{detail.notes}</h4>
                            </div>
                            <form 
                                className={classes.container} 
                                noValidate
                                onSubmit={handleSubmit}
                                >
                                <input 
                                    type="text" 
                                    placeholder="name"
                                    onChange={(event) => handleInputs('name', event.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="style"
                                    onChange={(event) => handleInputs('style', event.target.value)}
                                />
                                <textarea
                                    placeholder="notes"
                                    onChange={(event) => handleInputs('notes', event.target.value)}
                                ></textarea>
                                <TextField
                                    id="date"
                                    label="Select Bottle Day"
                                    type="date"
                                    className={classes.textField}
                                    onChange={(event) => handleInputs('date', event.target.value)}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                
                                    <button type="submit" />
                    
                            </form>
                        </div>
                    )
                })}
            </section>
        </div>
    )
} // end RecipeDetails

// export RecipeDetails
export default RecipeDetails;