import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HopsLogo from '../HopsLogo/HopsLogo';

// setup material-ui style
const useStyles = makeStyles({
    root: {
        minWidth: 100,
        maxWidth: 400,
        margin: 10,
        display: "inline-block",
    },
    card: {
        margin: 10,
        width: 400,
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

// function for supplies page
function SuppliesPage() {

    // import classes/styles from material-ui
    const classes = useStyles();

    // set dispatch variable
    const dispatch = useDispatch();

    // get supplies from redux store
    const supplies = useSelector(store => store.supplies);
    // console log supplies from store
    console.log('Supplies:', supplies);

    // function to open new tab and take to route
    const routeChange = (link) => {
        // open new tab to take user to purchase link
        window.open(link);
    } // end routeChange

    // dispatch 'FETCH_SUPPLIES' and load once
    useEffect(() => {
        dispatch({ type: 'FETCH_SUPPLIES' });
    }, []);

    return (
        <div>
            <div className="component-head">
                <h1>Supplies</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
            <div>
                {supplies.map((supply) => {
                    return (
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={supply.image_url}
                                    title={supply.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {supply.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {supply.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    onClick={() => routeChange(supply.purchase_link)}
                                >
                                    Purchase
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
} // end SuppliesPage

// export SuppliesPage
export default SuppliesPage;