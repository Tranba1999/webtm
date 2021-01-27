import React from 'react'
import "./Content.css"
import Mobile from "./Mobile"
import Slideshow from './Slideshow'
import YouTube from './Mobile'
import ReactPlayer from "react-player"


import img1 from '../assets/img/01.jpg';
import img2 from '../assets/img/02.jpg';
import img3 from '../assets/img/03.jpg';
// import img4 from '../assets/img/04.jpg';
// import img5 from '../assets/img/05.jpg';
// import img6 from '../assets/img/06.jpg';

let textInput = 'Đây là một cái ước chừng sáu bảy tuổi nữ đồng, vàng nhạt áo lưới trên thêu lên nhiều đóa trắng nhạt hoa mai, một đầu tóc đen thui quán đã thành đôi búi tóc, một đôi linh động mắt to đen bóng đấy, khéo léo cái mũi đẹp đẽ tinh xảo xuống cái miệng nhỏ nhắn đỏ tươi, nổi bật lên toàn bộ khuôn mặt cẩn thận thanh lệ.'
let textInput2 = 'Cái này trống lúc lắc có lẽ có chút thời đại rồi, hai bên trống trước mặt có chút ố vàng, phía trên vẽ lấy mấy cái rắn lục đồ án, hợp với hai lỗ tai hai quả viên đạn cao thấp lật qua lật lại, thỉnh thoảng rơi vào trống trên mặt, phát ra vài tiếng nhẹ vang lên.'
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
                <div className="content-video">
                <ReactPlayer url="https://www.youtube.com/embed/wX2w-hGHOJA?autoplay=1&rel=0&modestbranding=1" width="245px" height="430px" controls={true} playing={true} loop={true} />
                </div>
            </div>
        </div>
    )
}
export default Content