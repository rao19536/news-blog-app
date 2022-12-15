import { styled } from '@mui/system'
import { Box } from '@mui/system'

export const StyledParentContainer = styled(Box)(({theme})=>({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: 1,
    padding:'20px'
}))
