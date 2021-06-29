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
            <section>
                {details.map(detail => {
                    return (
                        <div>
                            <div>
                                <img src={detail.image} />
                            </div>
                            <div>
                                <h1>{detail.name}</h1>
                            </div>
                            <div>
                                <h3>{detail.intro}</h3>
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
                        </div>
                    )
                })}
            </section>
        </div>
    )
} // end RecipeDetails

// export RecipeDetails
export default RecipeDetails;