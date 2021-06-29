import './Dashboard.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// setup material-ui style
const useStyles = makeStyles({
    root: {
        minWidth: 100,
        maxWidth: 300,
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
        height: 140,
    },
});

// function for dashboard view
function Dashboard() {

    // import classes/styles from material-ui
    const classes = useStyles();

    const user = useSelector((store) => store.user);

    return (
        <div>
            <div className="dashboard-head">
                <h1>Welcome, {user.username}!</h1>
                <img src="./images/hops.png" alt="Image of Hops" />
            </div>
            <Link to="/supplies">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./images/homebrew-starter.jpg"
                            title="Homebrew Supplies"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Supplies
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                General brewing supplies needed to get started. 
                                These supplies are for small batch brewing 1-2 gallons.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            <Link to="/recipes">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./images/brew-recipe-image.jpg"
                            title="Homebrew Recipes"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Homebrew Recipes
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Collection of recipes to get you started. Select a recipe that 
                                corresponds to the kit you purchased.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            <Link to="/add">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="./images/add-recipe.jpg"
                            title="Homebrew Add Recipe"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Add New Recipe
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Want to add a new recipe to your collection? 
                                Select add new recipe to begin.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./images/created-brew.jpg"
                        title="Homebrew Created Brews"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            My Created Brews
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            All data on the brews you have created. Bottling day, beer name, 
                            and brew style can be found here.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
} // end Dashboard

// export Dashboard
export default Dashboard;