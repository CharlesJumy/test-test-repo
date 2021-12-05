import { padding } from '@mui/system';
import React from 'react'
import FooterComponent from '../../Components/FooterComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import HistoryComponent from '../../Components/HistoryComponent';
import ImageGallery from '../../Components/ImageGallery';


const HomeScreen = () => {
    return (
        <>
            <HeaderComponent/>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: '20px'        
            }}>
                <div>
                    <ImageGallery/>

                </div>
                <div>
                    <HistoryComponent/>

                </div>
            </div>
            <FooterComponent/>


        </>
    )
}

export default HomeScreen
