import {React, useState} from "react";

const TextFileDisplay = (props) => {

//initialize states for active report and current tags
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

//iterate through constrained reports using callback
let iterateReports = (dir) => {
    props.iterateReport(props.report.index, dir);
};

//function to set tags based on key presses
let handleKeyPress = (e) => {
    if (e.key == 1) {
        if (!currentTags || currentTags.findIndex((item)=> item==="Important")===-1) {
            props.addTag('Important', textState.id);
            (currentTags)?setCurrentTags([...currentTags, 'Important']):setCurrentTags(['Important']);
        }
    } else if (e.key == 2){
        if (!currentTags || (props.searchCriteria && currentTags.findIndex((item)=> item===props.searchCriteria)===-1)){
            props.addTag(props.searchCriteria, textState.id);
            (currentTags)?setCurrentTags([...currentTags, props.searchCriteria]):setCurrentTags([props.searchCriteria]);
        }
    };
};


    return (
        <div className="textFileDisplayCont"  tabIndex="0" onKeyDown={handleKeyPress}>
            <button onClick={handleClick}>Load Text File</button>
            
            <div className="nav">
                    <div className="navArrow" onClick={()=>iterateReports(-1)}> &lt;- Prev</div>
                    <button onClick={props.clearReport}>Close</button>
                    <div className="navArrow" onClick={()=>iterateReports(1)}>Next -&gt;</div>
                </div>

            <div className="textFileDisplayWithTags">
                <textarea readOnly autoFocus className="textFileDisplay" placeholder='sample text here' value={textState.body}></textarea>
                <div className="tagSidebar">
                    {props.activeTags[props.id] &&                    
                    <div className="activeTags">
                    Active Tags:
                        <ul>
                            {props.activeTags[props.id].map( (item)=> {
                                return <li key={item}>{item}</li>
                            })}
                        </ul>
                    </div>}

                    <div className="inactiveTags">
                    Add Tags:
                        <ul>
                            {(!currentTags || currentTags.findIndex((item)=> item==="Important")===-1) && <li onClick={addTag}>Important</li>}
                            {((!currentTags && props.searchCriteria) || (props.searchCriteria && currentTags.findIndex((item)=> item===props.searchCriteria)===-1)) && <li onClick={addTag}>{props.searchCriteria}</li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TextFileDisplay;