import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Cards(props) {
 const fetchData=props.fetch
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fetchData.url}
          alt="Products images"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {
              fetchData.title
            }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
            {
              fetchData.title
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

