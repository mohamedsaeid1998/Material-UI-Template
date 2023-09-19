import './Create.module.scss'
import { Box, Button, InputAdornment, TextField, styled, useTheme } from "@mui/material";
import { ChevronRight } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const Create = () => {
  const theme = useTheme()
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    // @ts-ignore
    backgroundColor: theme.palette.submit.main,
    "&:hover": {
      // @ts-ignore
      backgroundColor: theme.palette.submit.main,
      scale: "0.99",
    },
  }));

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  const sendData = () => {
    fetch("http://localhost:3000/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, price })
    }).then(() => {
      navigate("/")
    })
  }
  return <>
    <Box >
      <TextField
      autoComplete='off'
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}

        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
      type='number'
        onChange={(e) => {
          setPrice(Number(e.target.value))
        }}
        fullWidth
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton onClick={() => {
        sendData()
      }} sx={{ mt: "22px" }} variant="contained">
        Submit <ChevronRight />
      </ColorButton>

    </Box>
  </>
}

export default Create