import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CategoryCard({categoryObj}) {
  return (
    <Card sx={{ maxWidth: 345, m:2 }}>
      <CardMedia
        component="img"
        height="140"
        image={categoryObj?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {categoryObj?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {categoryObj?.description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button>Roa</Button> */}
      </CardActions>
    </Card>
  );
}
