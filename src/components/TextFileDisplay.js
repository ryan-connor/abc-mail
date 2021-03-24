import {React, useState, useEffect} from "react";

const TextFileDisplay = (props) => {

let [textState, setTextState] = useState(props.report);
let [currentTags, setCurrentTags] = useState(props.activeTags[props.id]);

//function to parse text file from project gutenberg
let handleClick = async (e) => {

    let response = await fetch('./txtFiles/aliceInWonderland.txt');
    let loadedText = await response.text();
    let titleIndex = loadedText.indexOf("Title");
    let endTitle= loadedText.slice(titleIndex, titleIndex+200).search('\r\n|\r|\n') + titleIndex;
    let slicedTitle = loadedText.slice(titleIndex+7, endTitle);
    let prevState = {...textState};
    prevState.body=loadedText;
    setTextState(prevState);
};

let addTag = (e) => {
console.log(e.target.innerText);
props.addTag(e.target.innerText, textState.id);
(currentTags)?setCurrentTags([...currentTags, e.target.innerText]):setCurrentTags([e.target.innerText]);


// props.addTag(e.target.innerText);

};

let iterateReports = (dir) => {

    console.log(dir);
    console.log("report index:", props.report.index);
    props.iterateReport(props.report.index, dir);


};




    return (
        <div className="textFileDisplayCont">
            <button onClick={handleClick}>Load Text File</button>
            
            <div className="nav">
                    <div className="navArrow" onClick={()=>iterateReports(-1)}> &lt;- Prev</div>
                    <button onClick={props.clearReport}>Close</button>
                    <div className="navArrow" onClick={()=>iterateReports(1)}>Next -&gt;</div>
                </div>
            <div className="textFileDisplayWithTags">

                <textarea readOnly className="textFileDisplay" placeholder='sample text here' value={textState.body}></textarea>
                <div className="tagSidebar">
                    {props.activeTags[props.id] &&                    
                    <div className="activeTags">
                    Active Tags:
                        <ul>
                            {props.activeTags[props.id].map( (item)=> {
                                return <li>{item}</li>
                            })}
                        </ul>
                    </div>}

                    <div className="inactiveTags">
                    Add Tags:
                        <ul>
                            {console.log("active tags from id", props.activeTags[props.id])}
                            {console.log("active tags from report", props.activeTags[props.report.id])}
                            {console.log("current tags:", currentTags)}
                            {console.log("search crit:", props.searchCriteria)}
                            {(!currentTags || currentTags.findIndex((item)=> item==="Important")===-1) && <li onClick={addTag}>Important</li>}
                            {(!currentTags || (props.searchCriteria && currentTags.findIndex((item)=> item===props.searchCriteria)===-1)) && <li onClick={addTag}>{props.searchCriteria}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TextFileDisplay;