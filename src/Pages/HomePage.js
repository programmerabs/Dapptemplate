import React from 'react'
import styled from 'styled-components';
import Timer from '../Components/Timer'
import Particle from '../Components/Particle';
import {MainLayout} from '../styles/Layouts';
import ImageSection from '../Components/ImageSection';
import Preloader from '../Components/Preloader/Preloader';
import Banner from '../img/banner.jpeg';

 
function HomePage() {
    return (
        <>
        <Preloader/>

        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h2 className='cmsoon'>META RUFFY PRELUNCH 4 FEBRUARY 2022  AT 20:00 UTC</h2>
                <Timer/>
                
            </div>
             
        </HomePageStyled>
         
        </>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${Banner});
    background-repeat:no-repeat;
    background-size:cover;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
