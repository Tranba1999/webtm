import React from 'react'
import "./Content.css"
import Mobile from "./Mobile"
import Slideshow from './Slideshow'
import YouTube from './Mobile'
import ReactPlayer from "react-player"


import imgSlider from '../assets/img/01.jpg';


let textSlider = 'Font Awesome allows you to combine two icons to make effects with masking. You define your normal icon and then use the mask prop to define a second icon to lay on top. The first icon will be constrained within the masking icon.'
let textSlider2 = 'Using Font Awesome and React together is a great pairing, but creates the need to use multiple packages and consider different combinations. In this tutorial you explored some of the ways you can use Font Awesome and React together.'
let textSlider3 = 'Before installing and using the icons, it’s important to know how the Font Awesome libraries are structured. Since there are many icons, the team decided to split them up into multiple packages.'

const arraySlider = [
    { src: imgSlider, caption: textSlider },
    { src: imgSlider, caption: textSlider2 },
    { src: imgSlider, caption: textSlider3 },
]

function Content() {
    return (
        <div id="Content">
            <div id="Content-section">
                <div className="content-carousel">
                    <div className="slider-app">
                        <Slideshow
                            input={arraySlider}
                            ratio={`3:2`}
                            mode={`automatic`}
                            timeout={`4000`}
                        />
                        <div>
                        </div>
                    </div>
                </div>
                <div className="content-mobile">
                </div>
                <div className="content-video">
                <ReactPlayer url="https://www.youtube.com/watch?v=Ik7RQQB0ZCA" width="275px" height="575px" controls={true} playing={true} loop={true} />
                </div>
            </div>
        </div>
    )
}
export default Content