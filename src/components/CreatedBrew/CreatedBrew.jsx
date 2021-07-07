import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HopsLogo from '../HopsLogo/HopsLogo';
import moment from 'moment';

// setup material-ui style
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: 20,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '33.33%',
        flexShrink: 0,
    },
}));

function CreatedBrew() {

    // import classes/styles from material-ui
    const classes = useStyles();

    // set variable for useDispatch
    const dispatch = useDispatch();

    // get created brew from redux store
    const created = useSelector(store => store.created);

    useEffect(() => {
        dispatch({ type: 'FETCH_CREATED' });
    }, []);

    return (
        <div>
            <div className="component-head">
                <h1>Created Brew</h1>
            </div>
            <div className="hop-logo">
                <HopsLogo />
            </div>
            <div>
                {created.map((create) => {
                    return (
                        <div className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography
                                        className={classes.heading}
                                    >
                                        {create.name}
                                    </Typography>
                                    <Typography 
                                        className={classes.secondaryHeading}
                                    >
                                        {create.style}
                                    </Typography>
                                    <Typography 
                                        className={classes.secondaryHeading}
                                    >
                                        {moment(create.date).format("LL")}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {create.notes}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })}
            </div>
        </div>
    )
} // end CreatedBrew

// export CreatedBrew
export default CreatedBrew;