import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import './homePage.css';

export default function HomePage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Box
                className='Box'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
            <div className="homePage">
                <img src='https://www.monchat.ca/wp-content/uploads/2020/02/fond-decran-blanc-avec-un-chien-et-un-chat-derriere-une-affiche-blanche.jpg' alt="Chien" className="homeImage" />
                <Box className="textOverlay">
                    <Typography variant="h1" className="title">
                        Bienvenue sur VetoLib
                    </Typography>
                    <Typography variant="h2" className="subtitle">
                        Facilitez l'accès aux soins vétérinaires
                    </Typography>
                </Box>
                <Grid container spacing={2} className="homeContent">
                    {/* Additional Grid content here */}
                </Grid>
            </div>

            {/* Card with Link to Detail Page */}
            <Link to="/detail" style={{ textDecoration: 'none' }}>
                <Card className="Card">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className="Avatar">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=50,format=auto/sources/images/actu/esperance-vie-chiens-chiot-golden-retriever.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={`ExpandMore ${expanded ? 'expanded' : ''}`}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                {/* Additional content here */}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Link>
        </>
    );
}
