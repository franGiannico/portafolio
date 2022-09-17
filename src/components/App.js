import "../styles/styles.scss"
import Header from "./sections/Nav/Header";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import MyWork from "./pages/myWork";
import Footer from "./sections/Footer"
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


const App = () => (
  <Router>
    <Header/>
      <Routes>
        <Route path="demos" element={<MyWork/>}/>
        <Route path="aboutMe" element={<AboutMe/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>    
    <Footer/>
  </Router>
)
export default App;
