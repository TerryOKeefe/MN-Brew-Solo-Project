import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-router-dom';

// function to add new recipe
function NewRecipe() {
    
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
        user_id: null,
    });

    // function to set new values for recipe
    const handleInputs = (key, value) => {
        // set recipe object with key and values from form
        setRecipe({...recipe,
        [key]: value,
        })
    } // end handleInputs

    const handleClick = (event) => {
        event.preventDefault();

        // console log to see data captured
        console.log('Submit button Clicked:', recipe);
    }

    return (
        <div>
            <div>
                <h1>Add New Recipe</h1>
            </div>
            <form>
                <div>
                    <h2>Brew Name & Style</h2>
                    <input
                        type="text"
                        placeholder="Brew Name"
                        onChange={(event) => handleInputs('name', event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Style"
                        onChange={(event) => handleInputs('style', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Image of Kit</h2>
                    <input
                        type="text"
                        placeholder="Image URL"
                        onChange={(event) => handleInputs('image', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Starting Gravity</h2>
                    <input 
                        type="number"
                        placeholder="Original Gravity" 
                        onChange={(event) => handleInputs('original_gravity', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Fermentation & Bottling Time</h2>
                    <input
                        type="text" 
                        placeholder="Fermentation Time" 
                        onChange={(event) => handleInputs('ferment_time', event.target.value)}
                    />
                    <input
                        type="text" 
                        placeholder="Bottling Time"
                        onChange={(event) => handleInputs('bottle_time', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Ingredients</h2>
                    <input 
                        type="text"
                        placeholder="Malt Extract" 
                        onChange={(event) => handleInputs('malt_extract', event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Hops"
                        onChange={(event) => handleInputs('hops', event.target.value)} 
                    />
                    <input 
                        type="text"
                        placeholder="Yeast" 
                        onChange={(event) => handleInputs('yeast', event.target.value)}
                    />
                    <input 
                        type="text"
                        placeholder="Priming Sugar"
                        onChange={(event) => handleInputs('priming_sugar', event.target.value)} 
                    />
                </div>
                <div>
                    <h2>Description of Brew</h2>
                    <textarea
                        type="text" 
                        placeholder="Intro"
                        onChange={(event) => handleInputs('intro', event.target.value)} 
                    />
                </div>
                <div>
                    <h2>Brew Day Instructions</h2>
                    <textarea
                        type="text" 
                        placeholder="Brew Day Instructions" 
                        onChange={(event) => handleInputs('brew_day', event.target.value)}
                    />
                </div>
                <div>
                    <h2>Fermentation Instructions</h2>
                    <textarea 
                        type="text"
                        placeholder="Fermentation Instructions"
                        onChange={(event) => handleInputs('fermentation', event.target.value)} 
                    />
                </div>
                <div>
                    <h2>Bottling Instructions</h2>
                    <textarea 
                        type="text"
                        placeholder="Bottling Instructions"
                        onChange={(event) => handleInputs('bottling', event.target.value)} 
                    />
                </div>
                <div>
                    <h2>Bottle Conditioning Instructions</h2>
                    <textarea 
                        type="text"
                        placeholder="Conditioning Instructions" 
                        onChange={(event) => handleInputs('conditioning', event.target.value)}
                    />
                </div>
                <div>
                    <Link to="/dashboard">
                        <button>Cancel</button>
                    </Link>
                    <button
                        onClick={handleClick}
                    >
                        Submit Brew
                    </button>
                </div>
            </form>
        </div>
    )
} // end NewRecipe

// export NewRecipe
export default NewRecipe;