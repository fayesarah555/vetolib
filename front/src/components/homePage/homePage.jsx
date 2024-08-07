// HomePage.jsx
import * as React from 'react';
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

import homePicture from '../../assets/file.png'
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
                    <Grid item xs={12} className="section">
                        <Typography variant="h3">Notre Mission</Typography>
                        <Typography>
                            <strong>VetoLib</strong> a pour objectif de rendre les soins vétérinaires accessibles et simples pour tous les propriétaires d'animaux. Grâce à notre plateforme, vous pouvez facilement prendre rendez-vous avec des vétérinaires proches de chez vous et lire les avis laissés par d'autres utilisateurs.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="section">
                        <Typography variant="h3">Services Offerts</Typography>
                        <ul>
                            <li>
                                <Typography>
                                    <strong>Prise de rendez-vous en ligne</strong> : Réservez facilement des consultations avec des vétérinaires de confiance. Voyez leurs disponibilités et choisissez le créneau qui vous convient le mieux.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <strong>Avis des utilisateurs</strong> : Consultez les avis laissés par d'autres propriétaires d'animaux pour vous aider à choisir le meilleur cabinet vétérinaire.
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} className="section">
                        <Typography variant="h3">Pour les Vétérinaires</Typography>
                        <Typography>
                            Vous possédez un cabinet vétérinaire ? Rejoignez VetoLib pour gérer vos rendez-vous de manière efficace et attirer de nouveaux clients grâce aux avis positifs de vos patients.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className="section">
                        <Typography variant="h3">Nos Valeurs</Typography>
                        <Typography>
                            <strong>Accessibilité et Confiance</strong> : Nous croyons que chaque propriétaire d'animal mérite un accès facile et rapide aux soins vétérinaires. Nous nous engageons à créer une communauté de confiance où les avis des utilisateurs jouent un rôle clé dans l'amélioration des services.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
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
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                        <Typography paragraph>
                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                            large plate and set aside, leaving chicken and chorizo in the pan. Add
                            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                            stirring often until thickened and fragrant, about 10 minutes. Add
                            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                            Add rice and stir very gently to distribute. Top with artichokes and
                            peppers, and cook without stirring, until most of the liquid is absorbed,
                            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                            mussels, tucking them down into the rice, and cook again without
                            stirring, until mussels have opened and rice is just tender, 5 to 7
                            minutes more. (Discard any mussels that don&apos;t open.)
                        </Typography>
                        <Typography>
                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

        </>
    );
}
