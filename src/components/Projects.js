import React from 'react'
import styled from 'styled-components'
import { Palette } from './Colors'
import { Fonts } from './Fonts'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variant = {
    visible: { opacity: 1, scale: 1, y:10,  transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.9, y:20 },
  }


function Projects() {

    // Scroll animation
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
        else {
            control.start("hidden");
          }
      }, [control, inView]);

    //   Component contents
  return (

    <Container  id="projects">
    <h2>PROJECTS</h2>
    <motion.div
   ref={ref}
    variants={variant}
    initial="hidden"
    animate={control}>
    <Content>
        <Wrap>
            <img src="./images/movie.png" alt=""/>
            <div>
            <a href="https://jesus-orduno.github.io/movie-night-mania/" target="blank">
                <h4>View Project</h4>
                </a>
                <a href="https://github.com/jesus-orduno/movie-night-mania" target="blank">
                <h4>View Repository</h4>
                </a>
                <h5>
                HTML / Materialize / JavaScript
                 </h5>
            </div>
            <a href="https://jesus-orduno.github.io/movie-night-mania/" target="blank">
            <h3>Movie Night Mania</h3>
            </a>
        </Wrap>
        <Wrap>

            <img src="./images/shopshop.png" alt=""/>
            <div>
            <a href="https://mysterious-brushlands-70155.herokuapp.com/" target="blank">
            <h4>View Project</h4>
            </a>
            <a href="https://github.com/zhaihan001/Team-Project3-Shop-Shop" target="blank">
            <h4>View Repository</h4>
            </a>
            <h5>
               React / Styled Components / JavaScript
            </h5>
            </div>
            <a href="https://mysterious-brushlands-70155.herokuapp.com/" target="blank">
            <h3>Shop-Shop</h3>
            </a>
        </Wrap>
        <Wrap>
            <img src="./images/quiz.png" alt=""/>
            <div>
            <a href="https://leilabouk.github.io/M4-CodeQuiz/" target="blank">
            <h4>View Project</h4>
            </a>
            <a href="https://github.com/LeilaBouk/M4-CodeQuiz" target="blank">
            <h4>View Repository</h4>
            </a>
            <h5>
                HTML / CSS / JavaScript
            </h5>
            </div>
            <a href="https://leilabouk.github.io/M4-CodeQuiz/" target="blank">
            <h3>Coding Quiz</h3>
            </a>
        </Wrap>
        <Wrap>
            <img src="./images/passGen.png" alt=""/>
            <div>
            <a href="https://leilabouk.github.io/M3-PasswordGenerator/" target="blank">
            <h4>View Project</h4>
            </a>
            <a href="https://github.com/LeilaBouk/M3-PasswordGenerator" target="blank">
            <h4>View Repository</h4>
            </a>
            <h5>
                HTML / CSS / JavaScript
            </h5>
            </div>
            <a href="https://leilabouk.github.io/M3-PasswordGenerator/" target="blank">
            <h3>Password Generator</h3>
            </a>
        </Wrap>
        {/* <Wrap>
            <img src="./images/demo.png" alt=""/>
            <a href="https://github.com/LeilaBouk/M14-TechBlog" target="blank">
            <div>
            <h4>View Project</h4>
            <h4>View Repository</h4>
            <h5>
                Handlebars / SCSS / JavaScript
            </h5>
            </div>
            <h3>Bistro Board</h3>
            </a>
        </Wrap> */}
        <Wrap>

            <img src="./images/springbot.png" alt=""/>
            <div>
            <a href="https://leilabouk.github.io/SBGameDemo/" target="blank">
            <h4>View Project</h4>
            </a>
            <a href="https://github.com/LeilaBouk/SBGameDemo" target="blank">
            <h4>View Repository</h4>
            </a>
            <h5>
                HTML / SCSS / JavaScript
            </h5>
            </div>
            <a href="https://leilabouk.github.io/SBGameDemo/" target="blank">
            <h3>Springbot</h3>
            </a>
        </Wrap>
    </Content>
    </motion.div>
</Container>

  )
}

export default Projects

const Container = styled.div`
     background-size: cover;
     padding: 0 calc(3.5vw + 5px);
     padding-top: 2vw;

     h2 {
        font-size: 70px;
        text-decoration: underline;
        color: white;
        font-weight: bold;
        letter-spacing: 1px;
        word-spacing: 4px;
        text-underline-offset: 20px;
        font-family: ${Fonts.main};
     }
`

const Content = styled.div`
    display: grid;
    font-family: ${Fonts.secondary};
    grid-gap: 120px 40px;
    grid-template-columns: repeat(3, minmax(0,1fr));

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0,1fr));
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

const Wrap = styled.div`

position: relative;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
max-height:330px;
height:auto;
width:auto;
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: black;
        border-radius: 10px;
        z-index: 1;
    }

    h3 {
        margin: 0;
        border-radius: 10px;
        border: 3px solid rgba(249, 249, 249, 0.1);
        background: none;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        padding: 10px;
        color: white;
        font-size: 30px;
        cursor: pointer;
    }

    a {
        text-decoration: none; 
    }

    a:visited { 
        text-decoration: none;
        color: white; 
       }

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 0px;
        opacity: 0;
        z-index: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h5 {
            color: white;
        }

        h4 {
            margin: 10px;
            color: white;
            padding: 8px;
            border-radius: 10px;
            border: 3px solid rgba(249, 249, 249, 0.1);
            background: ${Palette.water};
            font-size: 20px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      
            &:hover {
              background: ${Palette.red};
            }
          }

        button{
            color: red;
        }
       }

    &:hover {
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        h3 {
            background: ${Palette.darkred};
            color: white;
        }

        div {
            opacity: 1;
            object-fit: cover;
            background: rgba(37, 39, 58, 0.76);
        }
    }
`

