import React from 'react'
import "./about.css"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import acm from '../../img/acmaward.PNG'
import fanuc from '../../img/awartcert/fanuc.PNG'
import citi from '../../img/awartcert/citi.PNG'
import atmae from '../../img/awartcert/atmae.PNG'
const About = () => {
 

  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                 className="a-img" />
                
            </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Below is some of the awards I have recieved including ones I achieved with 
          the wonderful people I have worked with over the years.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a-award">
        <Zoom>
          <img src={acm} alt="acm award" className="a-award-img"
          />
        </Zoom>
         
         
          <div className="a-award-texts">
            <h4 className="a-award-title">Secure Container for Data Protection in Transit and at Rest</h4>
            <p className="a-award-desc">
            ACM Mid-Southeast Chapter Conference – November 15, 2019 – Gatlinburg, TN
            </p>
          
          </div>
        </div>
            <div className="a-award">
            <Zoom>
            <img src={atmae} alt="acm award" className="a-award-img"
            />
            </Zoom>
            
            
            <div className="a-award-texts">
                <h4 className="a-award-title">Secure Container for Data Protection in Transit and at Rest</h4>
                <p className="a-award-desc">
                ACM Mid-Southeast Chapter Conference – November 15, 2019 – Gatlinburg, TN
                </p>
            
            </div>
            </div>


            <div className="a-award">
            <Zoom>
            <img src={fanuc} alt="acm award" className="a-award-img"
            />
            </Zoom>
            
            
            <div className="a-award-texts">
                <h4 className="a-award-title">Secure Container for Data Protection in Transit and at Rest</h4>
                <p className="a-award-desc">
                ACM Mid-Southeast Chapter Conference – November 15, 2019 – Gatlinburg, TN
                </p>
            
            </div>
            </div>
        </div>
    </div>
  )
}


export default About