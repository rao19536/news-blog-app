import {styled} from '@mui/system'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const StyledSpinnerParent = styled(Box)(()=>({
    position:'relative',
    height: 'calc(100vh - 154px)'
}))
export const StyledCircularProgress = styled(CircularProgress)(()=>({
    position:'absolute',
    top:'50%',
    left:'50%', 
}))
