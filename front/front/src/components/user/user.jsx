import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Avatar, Box } from '@mui/material';
import './user.css';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  avatar: 'https://www.shutterstock.com/image-vector/hipster-cat-isolated-vector-illustration-260nw-2218372665.jpg', // Replace with a real image URL
  bio: 'Loving pet owner and avid traveler. Proud owner of two dogs and a cat.',
  address: '1234 Pet Street, Animal City, Petland',
  phone: '(123) 456-7890',
  reviews: [
    {
      title: 'Great Veterinarian',
      content: 'Dr. Smith took great care of my dog. Highly recommend!',
      date: '2024-07-30',
    },
    {
      title: 'Excellent Service',
      content: 'The clinic was clean and the staff were friendly.',
      date: '2024-06-15',
    },
  ],
};

const User = () => {
  return (
    <Box className="userDetailContainer">
      <Card className="userCard">
        <CardMedia
          component="img"
          alt="User Avatar"
          height="140"
          image={user.avatar}
          title="User Avatar"
          className="userAvatar"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.email}
          </Typography>
          <Typography variant="body1" className="userBio">
            {user.bio}
          </Typography>
        </CardContent>
      </Card>

      <Grid container spacing={2} className="userInfo">
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Address</Typography>
          <Typography>{user.address}</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Phone</Typography>
          <Typography>{user.phone}</Typography>
        </Grid>
      </Grid>

      <Box className="userReviews">
        <Typography variant="h6">User Reviews</Typography>
        {user.reviews.map((review, index) => (
          <Card key={index} className="reviewCard">
            <CardContent>
              <Typography variant="h6">{review.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {review.date}
              </Typography>
              <Typography variant="body1">{review.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default User;
