import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import logo from '../img/logo.jpeg';
import gameIcon from '../img/icon/game.svg';

function Navigation() {
    const logoanimation = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: logoanimation.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../logo.json')
    })
  }, [])
    return (
        <NavigationStyled>
            <div className="logoanimation" ref={logoanimation}>   
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                     <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/fsda" activeClassName="active-class" exact>Stake Now</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/f" activeClassName="active-class" exact>Staking Pools</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/s" activeClassName="active-class" exact>Your Staking</NavLink>
                </li>
                <li className="nav-item">
                     <NavLink to="/fss" activeClassName="active-class" exact>NFT Marketplace</NavLink>
                </li>
             
                <li className="nav-item">
                     <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                
                
                <li className="nav-item">
                     <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer className="footer">
                <p>@2022 <b>ABS SHAKIL</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right: 1px solid var(--border-color);
.avatar{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
        width: 70%;
        // border-radius: 50%;
        // border: 8px solid var(--border-color);
    }
}
.nav-items{
    width: 100%;
    text-align: center;
    .active-class{
        color: rgb(89, 241, 246);
        font-weight: 600;
        background-color: rgba(89, 241, 246, 0.16);
    }
    li{
        display: block;
        a{
            display: block;
            padding: .45rem 20px;
            position: relative;
            z-index: 10;
            text-transform: capitalize;
            text-align:left;
            transition: all .4s ease-in-out;
            font-weight: 600;
            letter-spacing: 1px;
            &:hover{
                text-decoration: none;
                background-color: rgba(145, 158, 171, 0.08);
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: rgba(145, 158, 171, 0.08);
                transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                opacity: 0.21;
                z-index: -1;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
        
    }
}
footer{
    border-top: 1px solid var(--border-color);
    width: 100%;
    p{
        padding: 1.3rem 0;
        font-size: 1.1rem;
        display: block;
        text-align: center;
    }
}
`;
export default Navigation;
