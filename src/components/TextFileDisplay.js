import {React, useState} from "react";

const TextFileDisplay = (props) => {

let [textState, setTextState] = useState(props.report);

//function to parse text file from project gutenberg
let handleClick = async (e) => {

    let response = await fetch('./txtFiles/aliceInWonderland.txt');
    let loadedText = await response.text();
    let titleIndex = loadedText.indexOf("Title");
    let endTitle= loadedText.slice(titleIndex, titleIndex+200).search('\r\n|\r|\n') + titleIndex;
    let slicedTitle = loadedText.slice(titleIndex+7, endTitle);
    setTextState(loadedText);

};



    return (
        <div className="textFileDisplayCont">
            <button onClick={handleClick}>Load Text File</button>
            <button onClick={props.clearReport}>Close</button>
            <div className="textFileDisplayWithTags">
                <textarea className="textFileDisplay" placeholder='sample text here' value={textState}></textarea>
                <div className="tagSidebar">
                    <div>
                    Active Tags:
                        <ul>
                            <li>None</li>
                        </ul>
                    </div>
                    <div>
                    Add Tags:
                        <ul>
                            <li>Important</li>
                            <li>Search Crit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TextFileDisplay;