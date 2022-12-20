import {styled} from '@mui/system'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

export const StyledTitle = styled(Typography)(({theme})=>({
    fontSize:'16px',
    color:theme.palette.text.primary,
    fontWeight:500
}))
export const StyledDescription = styled(Typography)(({theme})=>({
    color:theme.palette.text.secondary,
    fontSize:'14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
}))
export const StyledCard = styled(Card)(()=>({
    maxWidth: '268px',
    maxHeight:'420px',
    margin:'12px',
    borderRadius:8,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    '&:hover':{
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    }
}))
export const StyledCardMedia = styled(CardMedia)(()=>({
    objectFit:'contain',
    marginTop:20,
    transition: '0.5s all ease-in-out',
    '&:hover':{
        transform: 'scale(1.1)',
        cursor:'pointer'
    }
}))
export const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
}));