import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10
    }
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold"
  },
  main: {
    minHeight: "80vh"
  },
  footer: {
    textAlign: "center",
    marginTop: 30
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  },
  grow: {
    marginLeft: 1000,
    alignItems: "center"
  }
})
export default useStyles
