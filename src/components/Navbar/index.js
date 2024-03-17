import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
// import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import CodeIcon from '@mui/icons-material/Code';
import CallIcon from '@mui/icons-material/Call';
import HubIcon from '@mui/icons-material/Hub';
import Person2Icon from '@mui/icons-material/Person2';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LinkIcon from '@mui/icons-material/Link';
import "../CSS/Mastercss.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DoneOutlineIcon size="large" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="/">
          <div className="Logo_with_nav_text ">
            <Person2Icon className='Project__icon'/> About
            </div>
          </NavLink>

          <NavLink href='/Projects'>
            <div className="Logo_with_nav_text">
            <CodeIcon className='Project__icon'/> Projects
            </div>
            </NavLink>

          <NavLink href='/Contact'>
          <div className="Logo_with_nav_text">
            <CallIcon className='Project__icon'/> Contact
            </div>
          </NavLink>

          <NavLink href='/Linktree'>
          <div className="Logo_with_nav_text">
            <LinkIcon className='Project__icon'/> Important Links
            </div>
          </NavLink>
        </NavItems>
        <ButtonContainer>
          {/* <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='/Projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='/Contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
          <MobileLink href='/Linktree' onClick={() => {
              setIsOpen(!isOpen)
            }}>Important Links</MobileLink>
            {/* <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton> */}
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar