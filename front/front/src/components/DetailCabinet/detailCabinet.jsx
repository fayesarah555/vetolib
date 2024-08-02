import React, { useState } from 'react';
import { Box, Paper, Typography, Grid, Zoom, Card, CardContent, IconButton, Button  } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import './detailCabinet.css';

export default function DetailCabinet() {
    const cabinet = {
        name: 'Cabinet VetoLib',
        address: '7 rue Arkham city, Gotham',
        phone: '01 02 03 04 05',
        email: 'HarleyQueen@joker.com',
        bio: 'Cabinet vétérinaire spécialisé dans les soins aux animaux de compagnie',
    };
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const handleBack = () => {
        navigate(-1); // Navigue vers la page précédente
    };

    return (
        <Box className="cabinet-detail-container">

            <Card className="cabinet-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {cabinet.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cabinet.email}
                    </Typography>
                    <Typography variant="body1" className="cabinet-bio">
                        {cabinet.bio}
                    </Typography>
                    <hr />
                    <Box sx={{ width: '100%', marginTop: 2 }}>
                        <IconButton onClick={handleChange} className="toggle-button">
                            {checked ? <ArrowDropUp /> : <ArrowDropDown />}
                        </IconButton>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Zoom in={checked}>
                                    <Paper elevation={4} sx={{ padding: 2 }}>
                                        <Typography variant="h6">Address</Typography>
                                        <Typography>{cabinet.address}</Typography>
                                    </Paper>
                                </Zoom>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                                    <Paper elevation={4} sx={{ padding: 2 }}>
                                        <Typography variant="h6">Phone</Typography>
                                        <Typography>{cabinet.phone}</Typography>
                                    </Paper>
                                </Zoom>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="contained" color="primary" onClick={handleBack} className="back-button">
                        Retour
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
