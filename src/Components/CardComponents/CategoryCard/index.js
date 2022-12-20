import React from 'react';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Zoom from '@mui/material/Zoom'
import * as Style from './style'

export default function CategoryCard({categoryObj}){
  return (
    <Style.StyledCard>
      <Style.StyledCardMedia
        component="img"
        height="140"
        image={categoryObj?.image}
        alt="green iguana"
      />
      <CardContent>
        <Style.StyledTitle gutterBottom variant="h6" component="div">
          {categoryObj?.title}
        </Style.StyledTitle>
        <Style.LightTooltip placement="bottom-start" arrow TransitionComponent={Zoom} title={categoryObj?.description}>
          <Style.StyledDescription variant="body2" color="text.secondary">
            {categoryObj?.description}
          </Style.StyledDescription>
        </Style.LightTooltip>
      </CardContent>
      <CardActions>
        {/* <Button>Roa</Button> */}
      </CardActions>
    </Style.StyledCard>
  );
}
