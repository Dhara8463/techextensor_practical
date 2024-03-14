import React from 'react';
import '../OpenDoors/opendoors.css';
import lottie from "../../assets/fonts/undefined.json - 2";
import { Player } from '@lottiefiles/react-lottie-player';
import change_nna from "../../assets/images/change__narrative.svg";

const OpenDoors = () => {
  return (
    <div className='opendoors__main-wrapper'>
      <div className='opendoors__title'>OPENING DOORS TO THE RIGHT CONVERSATIONS</div>
      <div className='opendoors__caption'>Black-woman owned, women-led…</div>
      <div className='opendoors_describe'>
        <div>
          <div className='opedoors_left_Describe  opedoors_left_Describe_1'>The number of women in technology continues to rise and as a woman-owned and run business, Discussion Box is here to change the narrative and challenge the status quo.</div>
          <Player src={lottie} background="transparent" speed="1" style={{ width: "537px", height: "520px" }} autoplay></Player>
        </div>
        <div>
          <div className='opedoors_left_Describe opedoors_left_Describe_2'>We are building a growing community of accomplished female executives, and are uniquely placed to start discussions with both male and female leaders across all corners of the world.</div>
          <div className='whitecollar_title_wrapper'>
            <div className='whitecollar_title'>WHITE-COLLAR? <br /><span>NO COLLAR! </span></div>
            <div className='opedoors_left_Describe opedoors_left_Describe_3'>We’re people first and professionals second. We keep it simple, honest, and straightforward. As people of our word, we are deeply committed to delivering value at every turn, creating experiences that build enduring trust and respect. We choose to nurture communities, not leads.</div>
          </div>
        </div>
      </div>
      <div className='changing__narrative'>
        <div className='opendoors__title chan_nna_title'>CHANGING THE NARRATIVE. DISRUPTING NORMS.</div>
        <div className='opedoors_left_Describe change_nna_firm'>We firmly believe in breaking boundaries, lowering accessibility barriers and holding space for uncommon empathy and integrity, in all our business activities. It’s not why we’re good, it’s why we’re <span>different!</span></div>
      </div>
      <img src={change_nna} alt='change_nna' className='change_nna' />
    </div>
  )
}

export default OpenDoors