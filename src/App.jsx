import Nav from "./components/nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";
function App() {
  const webgiViewer = useRef();
  const contentRef = useRef();

  const handlePreview = () =>{
    webgiViewer.current.triggerPreview();
  }

  return (
    <div>
      <Loader/>
      <div ref= {contentRef} id="content">
      <Nav />
    <Jumbotron />
    <SoundSection/>
    <DisplaySection triggerPreview={handlePreview}/>
      </div>
      
    <WebgiViewer contentRef={contentRef} ref={webgiViewer}/>
    </div>
    
  );
}

export default App;
