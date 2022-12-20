import * as React from 'react';
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Zoom from '@mui/material/Zoom'
import * as Style from './style'

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function CategoryCard({categoryObj}) {
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
        <LightTooltip placement="bottom-start" arrow TransitionComponent={Zoom} title={categoryObj?.description}>
          <Style.StyledDescription variant="body2" color="text.secondary">
            {categoryObj?.description}
          </Style.StyledDescription>
        </LightTooltip>
      </CardContent>
      <CardActions>
        {/* <Button>Roa</Button> */}
      </CardActions>
    </Style.StyledCard>
  );
}
