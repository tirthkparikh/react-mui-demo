import { Stack } from "@mui/system"
import { TextField, InputAdornment } from "@mui/material"
import {useState} from 'react'

const MuiTextField = () => {
    const [value, setValue] = useState('')
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }
  return (
    <Stack spacing={4} margin='4%'>
        <Stack direction='row' spacing={2} >
            <TextField label='Name' variant="outlined"></TextField>
            <TextField label='Name' variant="filled"></TextField>
            <TextField label='Name' variant="standard"></TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="small" size="small" color="secondary"></TextField>
            <TextField
          label='Form Input'
          required
          helperText={
            !value ? 'Required' : 'Do not share your password with anyone'
          }
          type='password'
          error={!value}
          value={value}
          onChange={handleChange}
        />
            <TextField label="Readonly" size="small" inputProps={{readOnly : true}} color="secondary">Readonly</TextField>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Amount" InputProps={{
                startAdornment : <InputAdornment position="start">$</InputAdornment>,
            }}></TextField>
            <TextField label="weight" InputProps={{
                endAdornment : <InputAdornment position="end">kg</InputAdornment>,
            }}></TextField>
        </Stack>
        
        
    </Stack>
  )
}

export default MuiTextField