import React from "react"
import Head from "next/head"
import NextLink from "next/link"
import { AppBar, Container, Typography, Toolbar, Link } from "@material-ui/core"
import useStyles from "../utils/styles"
export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHerf>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        All rights reserved.next Amazona
      </footer>
    </div>
  )
}
