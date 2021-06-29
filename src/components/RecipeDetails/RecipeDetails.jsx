import { useSelector } from 'react-redux';

// function for recipe details page
function RecipeDetails() {
    
    // get details from the redux store 
    const details = useSelector(store => store.details)
    // console log to see data from redux store
    console.log('Details:', details);

    return (
        <div>
            <h1>Recipe Details</h1>
            <div>
                {details[0].name}
            </div>
        </div>
    )
} // end RecipeDetails

// export RecipeDetails
export default RecipeDetails;