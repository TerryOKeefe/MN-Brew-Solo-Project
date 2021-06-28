import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

// function for supplies page
function SuppliesPage() {

    // import classes/styles from material-ui
    const classes = useStyles();

    return (
        <div>
            <div>
                <h1>Supplies</h1>
            </div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./images/homebrew-starter.jpg"
                        title="Homebrew Starter"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Homebrew Starter Kit
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The Siphonless Craft Beer Making Kit is for anyone that enjoys craft beer,
                            has a streak of DIY gumption, and wants a complete kit with a simplified method of beer making.
                            We’ve made our Little Big Mouth Bubbler fermenter siphonless, reducing the tools needed and
                            some complexity in the brewing process. Meaning you’ll have an easier and better experience
                            making your first batch.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="small" 
                    variant="outlined" 
                    color="primary"
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./images/kettle.jpg"
                        title="Homebrew Kettle"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            2 Gallon Stainless Kettle
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Stainless two-gallon brew kettle is budget friendly and ideal for brewing small batches of beer. 
                        We recommend this kettle for use with the Northern Brewer 1 Gallon Craft Beer Making Kit. This 
                        kettle is compatible with all cooktops, and it is great for beginners! The quality stainless steel 
                        lasts a lifetime and is safe and non-reactive. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="small" 
                    variant="outlined" 
                    color="primary"
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./images/bottles.jpg"
                        title="Homebrew Bottles"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            12 oz. Beer Bottles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        You don’t always need a whole bunch of bottles when you’re making beer. 
                        So, we made a 12 pack of bottles for anyone that is brewing a 1 gallon batch, 
                        bottling up a few for a party, or for someone who just needs a couple extra 
                        bottles for their next brew. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="small" 
                    variant="outlined" 
                    color="primary"
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="./images/sanitizer.jpg"
                        title="Homebrew Sanitizer"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Star San Sanitizer
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Our favorite sanitizer! Star San is an acid-based no-rinse sanitizer that is effective and easy to use.
                        Made from food-grade phosphoric acid, safe for people and the environment.
                        Star San is self-foaming, which helps it to penetrate cracks and crevices.
                        Odorless and flavorless, no need to worry about tainting your beer or wine.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                    size="small" 
                    variant="outlined" 
                    color="primary"
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
} // end SuppliesPage

// export SuppliesPage
export default SuppliesPage;