import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HopsLogo from '../HopsLogo/HopsLogo';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 200,
    },
    textField: {
        marginBottom: theme.spacing(1),
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
        dispatch({ type: 'ADD_CREATED', payload: created});

        // navigate to created brew page
        history.push('/created');
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
            <div className="component-head">
                <h1>Recipe Instructions</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
            <section>
                {details.map(detail => {
                    return (
                        <div>
                            <div className="details-image">
                                <div>
                                    <img src={detail.image} />
                                </div>
                                <div className="details-form">
                                    <h2>Create Brew</h2>
                                    <form 
                                        className={classes.container} 
                                        noValidate
                                        onSubmit={handleSubmit}
                                        >
                                        <TextField 
                                            type="text"
                                            variant="outlined" 
                                            placeholder="name"
                                            multiline={true}
                                            className={classes.textField}
                                            onChange={(event) => handleInputs('name', event.target.value)}
                                        />
                                        <TextField
                                            type="text"
                                            variant="outlined"
                                            placeholder="style"
                                            multiline={true}
                                            className={classes.textField}
                                            onChange={(event) => handleInputs('style', event.target.value)}
                                        />
                                        <TextField
                                            placeholder="notes"
                                            variant="outlined"
                                            multiline={true}
                                            className={classes.textField}
                                            onChange={(event) => handleInputs('notes', event.target.value)}
                                        />
                                        <TextField
                                            id="date"
                                            label="Select Bottle Day"
                                            type="date"
                                            multiline={true}
                                            className={classes.textField}
                                            onChange={(event) => handleInputs('date', event.target.value)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                            <Button 
                                                type="submit"
                                                variant="outlined"
                                                color="primary"
                                                className={classes.textField}
                                            >
                                                Submit
                                            </Button>
                                    </form>
                                </div>
                            </div>
                            <div className="brew-details">
                                <div>
                                    <h2>{detail.name}</h2>
                                    <Button
                                        variant="outlined"
                                        onClick={() => handleClick(detail)}
                                        endIcon={<EditIcon />}
                                    >
                                        Edit
                                    </Button>
                                    <h2>{detail.style}</h2>
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
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
} // end RecipeDetails

// export RecipeDetails
export default RecipeDetails;