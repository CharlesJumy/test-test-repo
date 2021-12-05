import {Button, IconButton, Typography} from '@material-ui/core';
import React from 'react';
import "./styles.css"
import dummyIcon from '../../assets/Avatar.png'
import exploreImg from '../../assets/Vector.png'
import userImage from '../../assets/userImage.png'
import lines from '../../assets/lines.png'
import { Scrollbar } from "react-scrollbars-custom";
import Avatar2 from '../../assets/wwww.png'
import Avatar3 from '../../assets/Avatar22.png'
import Avatar4 from '../../assets/Avatar2222.png'
import Avatar5 from '../../assets/Avatarr44.png'
import Avatar6 from '../../assets/image11.png'
import Avatar7 from '../../assets/Avatar22.png'





const HistoryComponent = () => {
    const restingRefugee = () => (
        <div className="historyDivII">
            <label className="label">Edition 4/4</label>
            <div className="userDivII">
                <Typography variant="text" className="userText">
                    Resting Refugee
                </Typography>
                <img src={userImage} alt="explore image" width={'15%'} height={'15%'} style={{marginRight: '5rem'}}/>
            </div>
            <Typography variant="text" className="desc">
                Resting refuge translates the symbiotic relationship between<br/> colors and nature.
            </Typography>
            <div className={"bitContainer"}>
                <div className={"currentContainer"}>
                    <div className={"currentBitContainer"}>
                        <div className={"currentBitInnerContainer"}>
                            <label className="bitText">
                                CURRENT BID
                            </label>
                        </div>
                    </div>
                    <div>
                        <img src={lines} alt="explore image" width={'6%'} height={'6%'}/>
                        <Typography variant="text" className="ethText">
                            {' '}3.50 ETH
                        </Typography>
                    </div>
                    <Typography variant="text" className="usdTest">
                        $ 10.000 USD
                    </Typography>
                </div>
                <div className={"currentContainerII"}>
                    <div className={"currentBitContainerII"}>
                        <div className={"currentBitInnerContainer"}>
                            <label className="bitText">
                                END IN
                            </label>
                        </div>
                    </div>
                    <div style={{display: 'flex '}}>
                        <div>
                            <div>
                                <Typography variant="text" className="ethTextII">
                                    19
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text" className="usdTest">
                                    hours
                                </Typography>
                            </div>
                        </div>
                        <div style={{marginLeft: '1rem'}}>
                            <div>
                                <Typography variant="text" className="ethTextII">
                                    26
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text" className="usdTest">
                                    minutes
                                </Typography>
                            </div>
                        </div>
                        <div style={{marginLeft: '1rem'}}>
                            <div>
                                <Typography variant="text" className="ethTextII">
                                    32
                                </Typography>
                            </div>
                            <div>
                                <Typography variant="text" className="usdTest">
                                    seconds
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                variant="contained"
                className="cancelSaleBtn"
            >
                Cancel Sale
            </button>
        </div>
    )
    const historyComponent = () => (
        <div className="historyDiv">
            <label className="label">History</label>
            <Scrollbar 
             style={{ width: 'auto', height: 600 }}>
            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={dummyIcon} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar2} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar3} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar4} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar5} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar6} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar3} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar2} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

                
            </div>

            <div className="userDiv">
                <div className="userIcon">
                    <IconButton color="default" className="userImage">
                        <img src={Avatar5} alt="Page Logo Image"/>
                    </IconButton>
                    <div className="textPadding">
                    <Typography variant="text" className="HistoryText">
                        @felicia {' '}
                    </Typography>
                    <Typography variant="text">
                        made a bid for{' '}
                    </Typography>
                    <Typography variant="text" className="HistoryText">
                        3.5 ETH
                    </Typography>

                    <div>
                    <Typography variant="text" className="twentyMinText">
                        20 minutes ago
                    </Typography>
                    </div>
                    </div>
                </div>
                <IconButton color="default" className="exploreIcon">
                    <img src={exploreImg} alt="explore image"/>
                </IconButton>

             </div>
        </Scrollbar >

    </div>
    )
    return (
        <div className="mainContainer">
            {restingRefugee()}
            {historyComponent()}

        </div>
    )
}
export default HistoryComponent
