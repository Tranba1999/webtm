import './App.css'
import "./assets/font/Meiryo.ttf"
import LeftMenu from "./components/LeftMenu"
import Content from "./components/Content"
import Content2 from "./components/Content2"
import Footer from "./components/Footer"
import ReactPlayer from "react-player"

function App() {
  return (
    <div className="App">
      <div id="main">
        <div>
          <LeftMenu></LeftMenu>
        </div>
        <div>
          <Content></Content>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}


export default App;
