import {AppBar, Button, Chip, Icon, IconButton, InputBase, Toolbar} from '@material-ui/core'
import React from 'react'
import "./styles.css"
import pageLogo from '../../assets/jumy-logo.png'
import SearchIcon from '../../assets/magnfier.png'
import headerRightIcon from '../../assets/current.png'
import headerRightAvatar from '../../assets/Avat2ar.png'
import TickIcon from '../../assets/Vector6.png'


const HeaderComponent = () => {

    return (
      <AppBar position="static" elevation={0}>
        <Toolbar className="headerStyle">
          <div className="logoDiv">
            <IconButton color="default">
              <img src={pageLogo} alt="Page Logo Image" />
            </IconButton>
            <Chip
              label="BETA"
              className="BetaText"
              size="small"
              color="primary"
              style={{ backgroundColor: "black" }}
            />
          </div>
          <div className="mainSearchDiv">
            <div className="searchIcon">
              <img src={SearchIcon} alt="Search Icon" />
            </div>
            <InputBase
              placeholder="Search art or artists..."
              className="inputInput"
            />
          </div>
          <Chip
            label="Explore"
            className="fieldText"
            variant="outlined"
            size="medium"
            style={{
              borderColor: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Drops"
            className="fieldText"
            variant="outlined"
            size="medium"
            style={{
              borderColor: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Community"
            className="fieldText"
            variant="outlined"
            size="medium"
            style={{
              borderColor: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <IconButton color="default">
            <img src={headerRightIcon} alt="Page Logo Image" />
          </IconButton>
          <IconButton color="default" className="tickIcon">
            <img src={TickIcon} alt="Tick Icon" />
          </IconButton>
          <IconButton color="default">
            <img src={headerRightAvatar} alt="Page Logo Image" />
          </IconButton>
          <button
            variant="contained"
            style={{
              marginLeft: "1rem",
              width: "13%",
              height: "40px",
              color: "white",
              lineHeight: "100%",
              fontFamily: "Gilroy-SemiBold",
              fontSize: "14px",
              backgroundColor: "black",
              border: "0px",
              borderRadius: "0px",
            }}
          >
            Create
          </button>
        </Toolbar>
      </AppBar>
    );
}

export default HeaderComponent
