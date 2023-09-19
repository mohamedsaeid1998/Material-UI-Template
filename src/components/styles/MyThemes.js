const { grey, lightGreen, indigo, lightBlue } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        submit: {
          main: lightGreen["A700"]
        },
        fav: {
          main: grey[400]
        }

      }
      : {
        // palette values for dark mode
        submit: {
          main: indigo[600]
        },
        fav: {
          main: lightBlue[400]
        }

      }),
  },
});
export default getDesignTokens


