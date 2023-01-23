import { Stack,Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

const MuiButton = () => {
    const [formats, SetFormats] = useState<string|null>(null);

     const formatChange = (event: React.MouseEvent<HTMLElement>,updatedFormats : string|null)=>{
        console.log(event);
        SetFormats(updatedFormats);
     }
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

   <Stack  direction='row' display='block' >
   <ButtonGroup variant='contained' orientation='vertical' size='small' color="secondary" aria-aria-label='alignment button group'>
   <Button onClick={()=> alert("left clicked")} >left</Button>
   <Button  onClick={()=> alert("center clicked")}>center</Button>
   <Button  onClick={()=> alert("right clicked")}>right</Button>
   </ButtonGroup>
   </Stack>

   <Stack direction='row'>
    <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={formatChange} exclusive>
        <ToggleButton value='bold'><FormatBoldIcon></FormatBoldIcon></ToggleButton>
        <ToggleButton value='italic'><FormatItalicIcon></FormatItalicIcon></ToggleButton>
        <ToggleButton value='underline'><FormatUnderlinedIcon></FormatUnderlinedIcon></ToggleButton>
    </ToggleButtonGroup>
   </Stack>

 </Stack>
  )
}

export default MuiButton
