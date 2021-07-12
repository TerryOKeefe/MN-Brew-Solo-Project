import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import HopsLogo from '../HopsLogo/HopsLogo';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

// setup styles for material-ui
const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(1),
    },
})); // end useStyles

function EditRecipe() {

    // variable for material-ui classes
    const classes = useStyles();
    
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

    const handleCancel = () => {
        // navigate to recipes page
        history.push('/recipes');
    } // end handleCancel

    return (
        <div>
            <div className="component-head">
                <h1>Edit Recipe</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
            <form
                className="edit-form" 
                onSubmit={handleSubmit}
            >
                <div>
                    <h4>Name</h4>
                    <TextField
                        name="name"
                        type="text"
                        value={editRecipe.name}
                        placeholder="name"
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Style</h4>
                    <TextField
                        name="style"
                        type="text"
                        value={editRecipe.style}
                        placeholder="style"
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Image URL</h4>
                    <TextField
                        name="image"
                        type="text"
                        placeholder="image"
                        value={editRecipe.image}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Original Gravity</h4>
                    <TextField
                        name="original_gravity"
                        type="number"
                        placeholder="original gravity"
                        value={editRecipe.original_gravity}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Fermentation Time</h4>
                    <TextField
                        name="ferment_time"
                        type="text"
                        placeholder="ferment time"
                        value={editRecipe.ferment_time}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Bottling Time</h4>
                    <TextField
                        name="bottle_time"
                        type="text"
                        placeholder="bottle time"
                        value={editRecipe.bottle_time}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Malt Extract</h4>
                    <TextField
                        name="malt_extract"
                        type="text"
                        placeholder="malt extract"
                        value={editRecipe.malt_extract}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Hops</h4>
                    <TextField
                        name="hops"
                        type="text"
                        placeholder="hops"
                        value={editRecipe.hops}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Yeast</h4>
                    <TextField
                        name="yeast"
                        type="text"
                        placeholder="yeast"
                        value={editRecipe.yeast}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Priming Sugar</h4>
                    <TextField
                        name="priming_sugar"
                        type="text"
                        placeholder="priming sugar"
                        value={editRecipe.priming_sugar}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Brew Introduction</h4>
                    <TextField
                        name="intro"
                        type="text"
                        placeholder="intro"
                        value={editRecipe.intro}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Brew Day Instructions</h4>
                    <TextField
                        name="brew_day"
                        type="text"
                        placeholder="brew day"
                        value={editRecipe.brew_day}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Fermentation Instructions</h4>
                    <TextField
                        name="fermentation"
                        type="text"
                        placeholder="fermentation"
                        value={editRecipe.fermentation}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Bottling Instructions</h4>
                    <TextField
                        name="bottling"
                        type="text"
                        placeholder="bottling"
                        value={editRecipe.bottling}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    <h4>Bottle Conditioning Instructions</h4>
                    <TextField
                        
                        name="conditioning"
                        type="text"
                        placeholder="conditioning"
                        value={editRecipe.conditioning}
                        variant="outlined"
                        size="small"
                        multiline={true}
                        style={{width: 500}}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div className={classes.container}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="submit"
                        variant="outlined"
                        color="primary"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
} // end Edit Recipe

// export EditRecipe
export default EditRecipe;