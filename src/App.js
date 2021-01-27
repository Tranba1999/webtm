import './App.css'
import LeftMenu from "./components/LeftMenu"
import Content from "./components/Content"
import Content2 from "./components/Content2"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="main">
        <div>
          <LeftMenu>
          </LeftMenu>
        </div>
        <div>
          <Content>
          </Content>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}


export default App;
