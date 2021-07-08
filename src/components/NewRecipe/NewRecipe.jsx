import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

// function to add new recipe
function NewRecipe() {

    // variable for material-ui classes
    const classes = useStyles();

    // setup dispatch and history variables
    const dispatch = useDispatch();
    const history = useHistory();

    // local state variable to hold new inputs
    const [recipe, setRecipe] = useState({
        name: '',
        style: '',
        intro: '',
        original_gravity: null,
        ferment_time: '',
        bottle_time: '',
        malt_extract: '',
        hops: '',
        yeast: '',
        priming_sugar: '',
        brew_day: '',
        fermentation: '',
        bottling: '',
        conditioning: '',
        image: '',
        purchase_link: '',
        user_id: null,
    });

    // function to set new values for recipe
    const handleInputs = (key, value) => {
        // set recipe object with key and values from form
        setRecipe({
            ...recipe,
            [key]: value,
        });
    } // end handleInputs

    // function to dispatch add recipe
    const handleClick = (event) => {
        event.preventDefault();

        // console log to see data captured
        console.log('Submit button Clicked:', recipe);

        // dispatch new recipe to redux
        dispatch({ type: 'ADD_RECIPE', payload: recipe });

        // on click change to /recipes view
        history.push('/recipes');
    } // end handleClick

    // function to autofill inputs on logo click
    const logoClick = () => {
        setRecipe({
            ...recipe,
            name: 'Zombie Dirt',
            style: 'IPA',
            intro: `One whiff of the infectious aromatics is enough to reanimate the dead. Zombie Dirt is a ballad to the epicly
                hard-to-find pale ale of the Midwest, an epidemic centered just outside of Chicago. Loaded with 100% Citra
                hops, this pale ale is rarer than zombified-unicorn dust.`,
            original_gravity: 1.062,
            ferment_time: `2 Weeks`,
            bottle_time: `2 Weeks`,
            malt_extract: `1.5 lbs. Gold liquid malt extract, Boil for 45 minutes`,
            hops: `- 3.5 grams Citra hops, 7 grams Citra hops, 7 grams Citra hops, - 1 ounce Citra hops`,
            yeast: `Bru Yeast Small Batch English Ale Dry Yeast`,
            priming_sugar: `3 oz. Fizz Drops`,
            brew_day: `Collect and heat 1.25 gallons of water in your
            kettle. Any good-quality drinking water will work
            for our purposes—if the water tastes OK, it will
            make good beer.`,
            fermentation: `Fermentation begins. Within a day or so of Brew Day, 
                fermentation begins—as yeast cells convert malt sugars into CO2 gas 
                and alcohol, you will notice bubbles come through the airlock and a 
                cap of frothy foam form on the beer.`,
            bottling: ` Add one Fizz Drop tablet to each bottle. This small charge 
                of sugar will carbonate (or “prime”) our flat beer—the CO2 gas created 
                by this mini-fermentation will be absorbed by the liquid since it can’t 
                escape the sealed bottle—thanks, science!`,
            conditioning: `Wait just a little longer! It’ll be worth it—
                promise. Keep the filled, capped bottles at room
                temperature for approx. 1–2 weeks to let the
                beer carbonate.`,
            image: `https://cdn.shopify.com/s/files/1/2785/6868/products/E02_2_x700_d0eb697f-ee55-426e-aa74-2a4df00d075f_x700.jpg?v=1578943155`,
            purchase_link: `https://www.northernbrewer.com/products/zombie-dirt-small-batch-recipe-kit`,
        });
    } // end logoClick

    return (
        <div>
            <div className="component-head">
                <h1>Add New Recipe</h1>
            </div>
            <div className="hop-logo"
                onClick={logoClick}
            >
                <HopsLogo />
            </div>
            <form className="edit-form" >
                <div className={classes.container}>
                    <h2>Brew Name & Style</h2>
                    <TextField
                        type="text"
                        placeholder="Brew Name"
                        value={recipe.name}
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('name', event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        placeholder="Style"
                        value={recipe.style}
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('style', event.target.value)}
                    />
                </div>
                <div className={classes.container}>
                    <h2>Image & Purchase of Kit</h2>
                    <TextField
                        type="text"
                        placeholder="Image URL"
                        value={recipe.image}
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('image', event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        value={recipe.purchase_link}
                        placeholder="Purchase Link"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('purchase_link', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Starting Gravity</h2>
                    <TextField
                        type="number"
                        value={recipe.original_gravity}
                        placeholder="Original Gravity"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('original_gravity', event.target.value)}
                    />
                </div>
                <div className={classes.container}>
                    <h2>Fermentation & Bottling Time</h2>
                    <TextField
                        type="text"
                        value={recipe.ferment_time}
                        placeholder="Fermentation Time"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('ferment_time', event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        value={recipe.bottle_time}
                        placeholder="Bottling Time"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('bottle_time', event.target.value)}
                    />
                </div>
                <div className={classes.container}>
                    <h2>Ingredients</h2>
                    <TextField
                        type="text"
                        value={recipe.malt_extract}
                        placeholder="Malt Extract"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('malt_extract', event.target.value)}
                    />
                </div>
                <div className={classes.container}>
                    <TextField
                        type="text"
                        value={recipe.hops}
                        placeholder="Hops"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('hops', event.target.value)}
                    />
                </div>
                <div className={classes.container}>
                    <TextField
                        type="text"
                        value={recipe.yeast}
                        placeholder="Yeast"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('yeast', event.target.value)}
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        value={recipe.priming_sugar}
                        placeholder="Priming Sugar"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('priming_sugar', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Description of Brew</h2>
                    <TextField
                        type="text"
                        value={recipe.intro}
                        placeholder="Intro"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('intro', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Brew Day Instructions</h2>
                    <TextField
                        type="text"
                        value={recipe.brew_day}
                        placeholder="Brew Day Instructions"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('brew_day', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Fermentation Instructions</h2>
                    <TextField
                        type="text"
                        value={recipe.fermentation}
                        placeholder="Fermentation Instructions"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('fermentation', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Bottling Instructions</h2>
                    <TextField
                        type="text"
                        value={recipe.bottling}
                        placeholder="Bottling Instructions"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('bottling', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Bottle Conditioning Instructions</h2>
                    <TextField
                        type="text"
                        value={recipe.conditioning}
                        placeholder="Conditioning Instructions"
                        size="small"
                        multiline={true}
                        style={{ width: 500 }}
                        variant="outlined"
                        onChange={(event) => handleInputs('conditioning', event.target.value)}
                    />
                </div>
                <div>
                    <Link to="/dashboard">
                        <Button
                            variant="outlined"
                            color="secondary"
                        >
                            Cancel
                        </Button>
                    </Link>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClick}
                    >
                        Submit Brew
                    </Button>
                </div>
            </form>
        </div>
    )
} // end NewRecipe

// export NewRecipe
export default NewRecipe;