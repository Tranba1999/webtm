import React from 'react'
import "./Content.css"
import Mobile from "./Mobile"
import Slideshow from './Slideshow'

import img4 from '../assets/img/04.jpg';
import img5 from '../assets/img/05.jpg';
import img6 from '../assets/img/06.jpg';

let textInput4 = "HTML là ngôn ngữ đầu tiên mà một nhà thiết kế web phải học. HTML được dùng để tạo ra các nội dung cho trang web, ví dụ như: hình ảnh, âm thanh, video, các liên kết, các đoạn văn bản,.... HTML cực kỳ dễ học.''"
let textInput5 = "A function to add extra logic for determining whether the link is active. This should be used if you want to do more than verify that the link’s pathname matches the current URL’s pathname."
let textInput6 = "HTML là ngôn ngữ đầu tiên mà một nhà thiết kế web phải học. HTML được dùng để tạo ra các nội dung cho trang web, ví dụ như: hình ảnh, âm thanh, video, các liên kết, các đoạn văn bản,.... HTML cực kỳ dễ học.''"

const collection = [
    { src: img4, caption: textInput4 },
    { src: img5, caption: textInput5 },
    { src: img6, caption: textInput6 },
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
                            timeout={`5000`}
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