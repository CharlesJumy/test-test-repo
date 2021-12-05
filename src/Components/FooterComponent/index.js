import React from 'react'
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'
import footerIcon from '../../assets/20px.png'
import Divider from '@mui/material/Divider';
import "./styles.css"


const FooterComponent = (props) => {
    const {classes} = props

    const bottomOneContainer = () => (
        <div className={classes.mainDivText}>
            <div>
                <Typography variant="h6" className={classes.addressText}>
                    The Offices 4, One Central
                </Typography>
                <Typography variant="h6" className={classes.addressText}>
                    Dubai, United Arab Emirates
                </Typography>
            </div>

            <Typography variant="h6" className={classes.emailText}>
                hello@jumy.co
            </Typography>
            <div className={classes.socialAccountText}>
                <Typography variant="h6" className={classes.socialText}>
                    Instagram
                </Typography>
                <Typography variant="h6" className={classes.socialText}>
                    Twitter
                </Typography>
                <Typography variant="h6" className={classes.socialText}>
                    Medium
                </Typography>
            </div>

        </div>
    )
    const bottomTwoContainer = () => (
        <div className={classes.mainDivTextII}>
            <Typography variant="h6" className={classes.addressText}>
                All right reserved.
            </Typography>
            <Typography variant="h6" className={classes.emailText}>
                <img src={footerIcon} alt="Footer Image" />
            </Typography>
            <div className={classes.socialAccountText}>
                <Typography variant="h6" className={classes.socialText}>
                    FAQ
                </Typography>
                <Typography variant="h6" className={classes.socialText}>
                    Terms
                </Typography>
                <Typography variant="h6" className={classes.socialText}>
                    policy
                </Typography>
            </div>

        </div>
    )
    return (
        <div className={classes.mainRoot}>
            <div className={classes.root}>
                <Grid
                    className={classes.footerText}
                    item xs={12}
                >
                    <Typography variant="title" className="areYouArtist">
                        Are you an artist?
                    </Typography>
                </Grid>
                <button
                    variant="contained"
                    className="tellmeAbout"
                >
                    Tell us about you
                </button>

            </div>
            {bottomOneContainer()}
            <Divider className={classes.lineStyle} />
            {bottomTwoContainer()}
        </div>
    )
}
const styles = (theme) => ({
  mainRoot: {
    width: "100%",
    position: "absolute",

    backgroundColor: "black",
  },
  root: {
    textAlign: "center",
  },
  lineStyle: {
    backgroundColor: "#131413",
  },

  addressText: {
    color: "white",
    width: "177px",
    fontSize: "14px",
    fontFamily: "Gilroy-SemiBold",
  },
  emailText: {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "Gilroy-Medium",
    padingTop: "148px !important",
    padingBottom: "69px !importan",
  },
  socialText: {
    paddingRight: "1rem",
    color: "white",
    fontSize: "16px",
    fontFamily: "Gilroy-Medium",
  },
  mainDivText: {
    marginTop: "4rem",
    padding: "2rem",
    justifyContent: "space-between",
    display: "flex",
  },
  mainDivTextII: {
    borderTopColor: "white",
    padding: "2rem",
    justifyContent: "space-between",
    display: "flex",
  },
  socialAccountText: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
  },
  footerText: {
    color: "white",
    lineHeight: 1.5,
    fontFamily: "Gilroy-SemiBold",
    marginTop: "3.5rem",
    marginTop: "160px",
  },
});

export default withStyles(styles)(FooterComponent)
