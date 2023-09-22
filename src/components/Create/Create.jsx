import './Create.module.scss'
import { Box, Button, InputAdornment, TextField, styled, useTheme } from "@mui/material";
import { ChevronRight } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';




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



  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendData = ({ title, price }) => {
    price = Number(price);
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
    <Box 
    onSubmit = { handleSubmit(sendData) }
    autoComplete = "off"
    sx = {{ width: "380px" }}
    component = "form">
      <TextField 
        autoComplete='off'
        fullWidth
        label="Transaction Title"
        sx={{ mt: "22px", display: "block" }}

        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title",{
          required: {value:true ,message:"Required field"},
          minLength:{value:3 , message:"minlength id 3 "}
          
        })}
        error={Boolean(errors.title)}
        helperText={
          Boolean(errors.title) ? errors.title?.message.toString() : null
        }
      />

      <TextField
        type='number'
        error={Boolean(errors.price)}
        helperText={
          Boolean(errors.price) ? errors.price?.message.toString() : null
        }
        {...register("price", {
          required: { value: true, message: "Required filed" },
        })}
        fullWidth
        label="Amount"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton sx={{ mt: "22px" }} variant="contained" type='submit'  >
        
        Submit <ChevronRight />
      </ColorButton>

    </Box>
  </>
}

export default Create

//   < Box
// onSubmit = { handleSubmit(onSubmit) }
// autoComplete = "off"
// sx = {{ width: "380px" }}
// component = "form"
//   >
// <TextField
//   fullWidth={true}
//   label="Transaction Title"
//   sx={{ mt: "22px", display: "block" }}
//   InputProps={{
//     startAdornment: <InputAdornment position="start">👉</InputAdornment>,
//   }}
//   variant="filled"
//   {...register("title", {
//     required: { value: true, message: "Requires field" },
//     minLength: { value: 3, message: "minumn length is 3" },
//   })}
//   error={Boolean(errors.title)}
//   helperText={
//     Boolean(errors.title) ? errors.title?.message.toString() : null
//   }
// />

// <TextField
//   error={Boolean(errors.price)}
//   helperText={
//     Boolean(errors.price) ? errors.price?.message.toString() : null
//   }
//   {...register("price", {
//     required: { value: true, message: "Required filed" },
//   })}
//   fullWidth={true}
//   label=" Amount"
//   id="filled-start-adornment"
//   sx={{ mt: "22px", display: "block" }}
//   InputProps={{
//     startAdornment: <InputAdornment position="start">$</InputAdornment>,
//   }}
//   variant="filled"
//   type="number"
// />

// <ColorButton
//   type="submit"
//   onClick={(params) => {}}
//   sx={{ mt: "22px" }}
//   variant="contained"
// >
//   Submit <ChevronRight />
// </ColorButton>
// </ >