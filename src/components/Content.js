import React from 'react'
import "./Content.css"
import Mobile from "./Mobile"
import Slideshow from './Slideshow'
import YouTube from './Mobile'

import img1 from '../assets/img/01.jpg';
import img2 from '../assets/img/02.jpg';
import img3 from '../assets/img/03.jpg';
// import img4 from '../assets/img/04.jpg';
// import img5 from '../assets/img/05.jpg';
// import img6 from '../assets/img/06.jpg';

let textInput = 'HTML là ngôn ngữ đầu tiên mà một nhà thiết kế web phải học. HTML được dùng để tạo ra các nội dung cho trang web, ví dụ như: hình ảnh, âm thanh, video, các liên kết, các đoạn văn bản,.... HTML cực kỳ dễ học.'
let textInput2 = 'HTML là ngôn ngữ đầu tiên mà một nhà thiết kế web phải học. HTML được dùng để tạo ra các nội dung cho trang web, ví dụ như: hình ảnh, âm thanh, video, các liên kết, các đoạn văn bản,.... HTML cực kỳ dễ học.'
let textInput3 = 'HTML là ngôn ngữ đầu tiên mà một nhà thiết kế web phải học. HTML được dùng để tạo ra các nội dung cho trang web, ví dụ như: hình ảnh, âm thanh, video, các liên kết, các đoạn văn bản,.... HTML cực kỳ dễ học.'

const collection = [
    { src: img1, caption: textInput },
    { src: img2, caption: textInput2 },
    { src: img3, caption: textInput3 },
];

function Content() {
    return (
        <div id="Content">
            <div id="Content-section">
                <div className="content-carousel">
                    <div className="App">

                        <Slideshow
                            input={collection}
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
            </div>
        </div>
    )
}
export default Content