import {styled} from '@mui/system'
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

export const StyledTitle = styled(Typography)(()=>({
    fontSize:'16px'
}))
export const StyledDescription = styled(Typography)(()=>({
    fontSize:'14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '5',
    WebkitBoxOrient: 'vertical',
}))
export const StyledCard = styled(Card)(()=>({
    maxWidth: '345px',
    maxHeight:'420px',
    margin:'12px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
    '&:hover':{
        boxShadow:'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
    }
}))
export const StyledCardMedia = styled(CardMedia)(()=>({
    '&:hover':{
        // display:'-webkit-transform',
        // webkitTransform: 'scale(1.3)',
        // msTransform: 'scale(1.3)',
        // transform: 'scale(1.3)'
    }
}))