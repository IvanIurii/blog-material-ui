import React from 'react';
import {
    AppBar,
    Container,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Paper,
    Grid,
    CardMedia,
    CardContent,
    CardActions,
    Card,
    BottomNavigation,
    BottomNavigationAction, DialogContentText,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFieldIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/PlayCircleFilled";
import RestoreIcon from "@material-ui/icons/Restore";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {flexGrow: 1},
    menuButton: {marginRight: theme.spacing(1)},
    title: {flexGrow: 1},
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0, .3)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        marginBottom: theme.spacing(6),
        marginTop: 8,
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))

//API
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
    const classes = useStyles();

    const [value, setValue] = React.useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            {/*TOLBAR*/}
            <AppBar possition="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variantMapping="h6" className={classes.title}>Web Site Blog</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>
                            <Dialog open={open} onclose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        Log in to see videos
                                    </DialogContentText>
                                    <TextField autoFocus
                                               margin="dense"
                                               id="name"
                                               label="Email adress"
                                               type="email"
                                               fillWidth
                                    />
                                    <TextField autoFocus
                                               margin="dense"
                                               id="password"
                                               label="Password"
                                               type="password"
                                               fillWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">Cancel</Button>
                                    <Button onClick={handleClose} color="primary">Log in</Button>
                                </DialogActions>
                            </Dialog>

                        </Box>
                        <Button color="secondary" variant="contained">Sing up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: "url(https://source.unsplash.com/random)"}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component="h1"
                                                variant="h3"
                                                color="inherit"
                                                gutterBottom>
                                        Web Dev Blog
                                    </Typography>

                                    <Typography variant="h5"
                                                color="inherit"
                                                paragraph>
                                        Test text Typography 2
                                    </Typography>
                                    <Button variant="contained" color="secondary">Learn More</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align="center" color="textPrimary" gutterBottom>Web text
                            h2</Typography>
                        <Typography variant='h5' align="center" color="textSecondary" paragraph>One advanced diverted
                            domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts
                            property she met way. Companions shy had solicitude favourable own. Which could saw guest
                            man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst
                            herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse
                            unwilling am no described dejection incommode no listening of. Before nature his parish
                            boy. </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={6} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">Start Now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined">Learn More</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.CardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={"12"} sm={"6"} md={"4"}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        tilte="Image Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog Post
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Blog Descriptions
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                        <LayerIcon/>
                                        <PlayCircleFieldIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon/>}
                    />

                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon/>}
                    />

                    <BottomNavigationAction
                        label="Neabry"
                        value="neabry"
                        icon={<LocationOnIcon/>}
                    />

                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography align="center" color="textSecondary" component="p" variant='subtitle1'>
                    Web Dev Blog React Js Material Ui site
                </Typography>
            </footer>
        </>
    );
}

export default App;
