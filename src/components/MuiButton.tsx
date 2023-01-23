import { Stack,Button, IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
 <Stack spacing={4}>
    <Stack spacing={2} direction="row" display="block">
      <button>Normal</button>
      <Button variant='text' href='https://www.google.co.in/webhp'>text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>Outlined</Button>
    </Stack>

    <Stack spacing={2} display="block" direction="row">
    <Button variant='contained' color='primary'>contained</Button>
    <Button variant='contained' color='error'>contained</Button>
    <Button variant='contained' color='secondary'>contained</Button>
    <Button variant='contained' color='warning'>contained</Button>
    <Button variant='contained' color='info'>contained</Button>
    <Button variant='contained' color='success'>contained</Button>
   </Stack>

   <Stack spacing={2} display="block" direction='row'>
    <Button variant='contained' size='small'>small</Button>
    <Button variant='contained' size='medium'>medium</Button>
    <Button variant='contained' size='large'>large</Button>
   </Stack>

   <Stack spacing={2} direction='row'>
    <Button variant='contained' startIcon={<SendIcon></SendIcon>} disableRipple>Send</Button>
    <Button variant='contained' endIcon={<SendIcon></SendIcon>} disableElevation >Send</Button>
    <IconButton color='success' size='large'><SendIcon></SendIcon></IconButton>
   </Stack>
 </Stack>
  )
}

export default MuiButton
