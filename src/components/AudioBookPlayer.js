import ReactAudioPlayer from "react-audio-player";
import React from "react";

//import Switch from "./Switch";

export default () => {
  //const [value, setValue] = useState(false);
  return (
    
      <div className="App">
        <h1>Audio Books</h1>
        <p>Japanned Box by Sir Arthur Conan Doyle</p>
        <ReactAudioPlayer
          src="https://ia800702.us.archive.org/0/items/ss076_1812_librivox/ss076_09__128kb.mp3"
          controls
          volume
        />
        <br />
        <p>The Crooked Man by Sir Arthur Conan Doyle</p>
        <ReactAudioPlayer
          src="https://ia800702.us.archive.org/0/items/ss076_1812_librivox/ss076_03__128kb.mp3"
          controls
        />
      </div>
    
  );
};
