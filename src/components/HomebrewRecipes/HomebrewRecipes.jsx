import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

// setup material-ui style
const useStyles = makeStyles({
    root: {
        minWidth: 350,
        maxWidth: 350,
        height: 420,
        margin: 10,
        display: "inline-block",
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 200,
    },
});

// function for HomebrewRecipes to display cards
function HomebrewRecipes() {

    // import classes/styles from material-ui
    const classes = useStyles();

    // set dispatch variable
    const dispatch = useDispatch();

    // get recipes and user from the redux store
    const recipes = useSelector(store => store.recipe)
    const user = useSelector((store) => store.user);

    // local state to hold rating
    const [value, setValue] = useState(0);

    // function to handle click
    const handleClick = (recipe) => {
        // console log to see recipe click fired
        console.log('Clicked recipe', recipe);

        // dispatch recipe details
        dispatch({ type: 'GET_DETAILS', payload: recipe });

    } // end handleClick

    // function to handle delete
    const handleDelete = (recipe) => {
        // console log to see delete btn fires
        console.log('Clicked Delete', recipe);

        // dispatch 'DELETE'
        dispatch({ type: 'DELETE', payload: recipe })

    } // end handleDelete

    // function to direct user to purchase page
    const routeChange = () => {
        // on click new window opens
        window.open('https://www.northernbrewer.com/collections/small-batch-kits/products/summer-squeeze-lemon-shandy-one-gallon-recipe-kit');
    } // end routeChange

    // // function to handle edit
    // const handleEdit = (newValue) => {
    //     // console log to show value captured from rating
    //     console.log('Clicked Rating', newValue);

    //     // dispatch 'EDIT_RATING'
    //     dispatch({type: 'EDIT_RATING', payload: newValue});
    // } // end handleEdit
    

    // load once and dispatch fetch_recipes
    useEffect(() => {
        dispatch({ type: 'FETCH_RECIPES' });
    }, []);

    return (
        <div>
            <div>
                <h1>Select A Brew To Make</h1>
            </div>
            <div>
                {recipes.map((recipe) => {
                    return (
                        <Card 
                            style={{backgroundColor: "lightgrey"}}
                            className={classes.root} 
                            key={recipe.id}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={recipe.image}
                                    title={recipe.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {recipe.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {recipe.style}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        created by {user.username}
                                    </Typography>
                                    <Box component="fieldset" mb={1} borderColor="transparent">
                                        <Typography component="legend"></Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Link to="/details">
                                        <Button
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                            onClick={() => { handleClick(recipe) }}
                                        >
                                            See Recipe
                                        </Button>
                                    </Link>
                                    <Button
                                            size="small"
                                            color="primary"
                                            variant="outlined"
                                            onClick={routeChange}
                                        >
                                            Buy Kit
                                    </Button>
                                    <Button
                                        size="small"
                                        color="secondary"
                                        variant="outlined"
                                        onClick={() => { handleDelete(recipe) }}
                                    >
                                        Delete
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
} // end HomebrewRecipes

// export HomebrewRecipes
export default HomebrewRecipes