import { Box, Paper, Typography, IconButton, useTheme } from '@mui/material'
import './Home.module.scss'
import { Close } from '@mui/icons-material'
import { useEffect, useState } from 'react'
const Home = () => {
  const [getData, setGetData] = useState([])
const theme = useTheme()
  useEffect(() => {
    fetch("http://localhost:3000/myData")
      .then((response) => response.json())
      .then((data) => setGetData(data))
  }, [])

  const deleteData=(item) => {
    fetch(`http://localhost:3000/myData/${item.id}`,{method:"DELETE"})
    const newArray = getData.filter((object) => {
      return object.id !== item.id
    })
    setGetData(newArray)
}
let totalPrice = 0
  return <>
    <Box >
      {getData.map((item) => {
        totalPrice += item.price
        return <>
          <Paper key={item.id} sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }} >
            <Typography variant="h6" sx={{ ml: "16px", fontSize: "1.3em" }}>{item.title.toUpperCase()}</Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton onClick={() => {
              deleteData(item)
            }} sx={{ position: "absolute", top: "0", right: "0" }}>
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        </>
      })}
      {totalPrice!==0?<Typography textAlign={'center'} mt={"30px"} color={theme.palette.primary.main} variant="h4">👉 You Spent $ {totalPrice}</Typography>:null}

    </Box>
  </>
}

export default Home