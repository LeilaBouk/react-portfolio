import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'

function Header() {
  return (
    <Nav>

{/* <Icon src="https://c.tenor.com/TYWdCAZu258AAAAC/guardians-of-the-galaxy-rocket-raccoon.gif"/> */}

        <NavMenu>
        <a>
            {/* <img src='/images/project-icon.png' alt='projects'/> */}
            <span>PROJECTS</span>
        </a>

        <a>
            {/* <img src='/images/about-icon.png' alt='about'/> */}
            <span>ABOUT</span>
        </a>

        <a>
            {/* <img src='/images/contact-icon.png alt='contact'/> */}
            <span>CONTACT</span>
        </a>

        <a>
            {/* <img src='/images/resume-icon.png' alt='resume'/> */}
            <span>RESUME</span>
        </a>

        </NavMenu>

    </Nav>
  )
}

export default Header

const Nav = styled.nav`
height: 70px;
background: ${Palette.dark};
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: white;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            font-size: 20px;
            font-weight: bold;

            &:after {
                content: "";
                height: 2px;
                background: ${Palette.red};
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                transform-origin: center;
                transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                color: ${Palette.red};
            }
        }

        &:hover {
            color: ${Palette.red};
            span:after {
                transform: scaleX(1);
                opacity: 1;
                color: ${Palette.red};
            }
        }
    }
`

const Icon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`