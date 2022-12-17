import {styled} from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const StyledSpinnerParent = styled(Box)(()=>({
    position:'absolute',
    top:'50%',
    left:'50%'
}))
export const StyledCircularProgress = styled(CircularProgress)(()=>({
    // 
}))
