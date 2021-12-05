import { Button, Divider, Typography } from '@material-ui/core'
import React from 'react'
import galleryPic from '../../assets/big_picture.png'
import AvatarImage from '../../assets/img.png'
import "./styles.css"
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/thumbnail1.png'
import instra from '../../assets/instarGram.png'
import twitter from '../../assets/twitter.png'
import explore from '../../assets/Vector.png'





const ImageGallery = () => {
    return (
      <div>
        <img
          src={galleryPic}
          alt="gallery Big Picture"
          style={{ width: "auto", height: "668px", margin: "35px" }}
        />

        <div className="userdetailBorder">
          <div className="userDetail">
            <img src={AvatarImage} alt="Image Avatar" className="AvatarImage" />
            <div className="textstyleJumaker">
              <Typography variant="h6" className="textstyle1">
                Jumaker
              </Typography>
              <Typography variant="text" className="textstyle2">
                @Jumaker
              </Typography>
            </div>
            <Typography variant="text" className="textstyle">
              Jumaker is a contemporary digital Artist with a unique signature
              and very authentic genr...
            </Typography>
          </div>
          <div className="ImageDiv">
            <img src={image1} alt="image1" className="imageGallery" />
            <img src={image2} alt="image2" className="imageGallery" />
            <img src={galleryPic} alt="image1" className="imageGallery" />
            <img src={image3} alt="image1" className="imageGallery" />
          </div>

          <div className="socialDiv">
            <div>
              <img src={instra} alt="instraGram Logo" />
              <Typography variant="text" className="textstyle3">
                @Jumaker
              </Typography>
            </div>
            <div>
              <img src={twitter} alt="instraGram Logo" />
              <Typography variant="text" className="textstyle3">
                @Jumaker
              </Typography>
            </div>
            <button className="SocialBtn">Follow</button>
            <img src={explore} alt="explore Image" className="imageexplore" />
          </div>
        </div>
      </div>
    );
}

export default ImageGallery;
