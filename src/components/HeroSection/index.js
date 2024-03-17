import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import  '../../components/CSS/Animation.css'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const HeroSection = () => {
    return (
        <div id="hero">
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <div className='hero_buttons'>
                        <ResumeButton href={Bio.resume} target='display'><div className="hero_button_with_symbol"><DescriptionIcon/>Check Resume</div></ResumeButton>
                        <ResumeButton href={Bio.linkedin} target='display'><div className="hero_button_with_symbol"><LinkedInIcon/>Linkdin</div></ResumeButton>
                        <ResumeButton href={Bio.github} target='display'><div className="hero_button_with_symbol"><GitHubIcon/>Github</div></ResumeButton>
                        <Popup trigger={<ResumeButton><div className="hero_button_with_symbol"><EmailIcon/>E-mail </div></ResumeButton>} position="bottom center">
                        <div className='popup_class'>sankha.mumu@gmail.com</div></Popup>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img className='profile_pic' src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>  
                </HeroInnerContainer>
              
            </HeroContainer>
            
        </div>
        <div className='spacer2 layer2'></div>
        </div>
    )
}



export default HeroSection