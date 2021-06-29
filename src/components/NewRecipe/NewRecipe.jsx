// function to add new recipe
function NewRecipe() {
    return (
        <div>
            <div>
                <h1>Add New Recipe</h1>
            </div>
            <div>
                <div>
                    <h2>Brew Name & Style</h2>
                    <input placeholder="Brew Name" />
                    <input placeholder="Style" />
                </div>
                <div>
                    <h2>Image of Kit</h2>
                    <input placeholder="Image URL"/>
                </div>
                <div>
                    <h2>Starting Gravity</h2>
                    <input placeholder="Original Gravity" />
                </div>
                <div>
                    <h2>Fermentation & Bottling Time</h2>
                    <input placeholder="Fermentation Time" />
                    <input placeholder="Bottling Time" />
                </div>
                <div>
                    <h2>Ingredients</h2>
                    <input placeholder="Malt Extract" />
                    <input placeholder="Hops" />
                    <input placeholder="Yeast" />
                    <input placeholder="Priming Sugar" />
                </div>
                <div>
                    <h2>Description of Brew</h2>
                    <textarea placeholder="Intro" />
                </div>
                <div>
                    <h2>Brew Day Instructions</h2>
                    <textarea placeholder="Brew Day Instructions" />
                </div>
                <div>
                    <h2>Fermentation Instructions</h2>
                    <textarea placeholder="Fermentation Instructions" />
                </div>
                <div>
                    <h2>Bottling Instructions</h2>
                    <textarea placeholder="Bottling Instructions" />
                </div>
                <div>
                    <h2>Bottle Conditioning Instructions</h2>
                    <textarea placeholder="Conditioning Instructions" />
                </div>
            </div>
        </div>
    )
} // end NewRecipe

// export NewRecipe
export default NewRecipe;