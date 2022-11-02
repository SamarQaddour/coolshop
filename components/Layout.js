import React, { useContext } from "react"
import Head from "next/head"
import NextLink from "next/link"
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Link,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Switch
} from "@material-ui/core"
import useStyles from "../utils/styles"
import { Store } from "../utils/Store"
import Cookies from "js-cookie"
export default function Layout({ children, title, description }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode } = state
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      body1: {
        fontWeight: "normal"
      }
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000"
      },
      secondary: {
        main: "#208080"
      }
    }
  })
  const classes = useStyles()
  const darkModeChangeHander = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" })
    const newDarkMode = !darkMode
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF")
  }
  return (
    <div>
      <Head>
        <title> {title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHerf>
              <Link>
                <Typography className={classes.brand}>amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}>
              <Switch
                checked={darkMode}
                onChange={darkModeChangeHander}
              ></Switch>
              <NextLink href="/cart" passHerf>
                <Link>
                  <Typography className={classes.brand}>Cart</Typography>
                </Link>
              </NextLink>
              <NextLink href="/login" passHerf>
                <Link>
                  <Typography className={classes.brand}>Login</Typography>
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          All rights reserved.next Amazona
        </footer>
      </ThemeProvider>
    </div>
  )
}
