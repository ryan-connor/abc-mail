import {React, useState} from "react";

const TextFileDisplay = () => {

let [textState, setTextState] = useState('');


let handleClick = async (e) => {

    let response = await fetch('./txtFiles/aliceInWonderland.txt');
    let loadedText = await response.text();

    // console.log(loadedText);
    setTextState(loadedText);

};



    return (
        <div className="textFileDisplayCont">
            <button onClick={handleClick}>Load Text File</button>
            <textarea className="textFileDisplay" placeholder='sample text here' value={textState}></textarea>
        </div>
    )
};

export default TextFileDisplay;