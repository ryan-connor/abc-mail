import {React, useState} from "react";

const TextFileDisplay = (props) => {

//initialize states for current tags
let [currentTags, setCurrentTags] = useState(props.activeTags[props.report.id]);

//function to add tag to active report
let addTag = (e) => {
props.addTag(e.target.innerText, props.report.id);
(currentTags)?setCurrentTags([...currentTags, e.target.innerText]):setCurrentTags([e.target.innerText]);
};

//iterate through constrained reports using callback
let iterateReports = (dir) => {
    props.iterateReport(props.report.index, dir);
};

//function to set tags based on key presses
let handleKeyPress = (e) => {
    if (e.key == 1) {
        if (!currentTags || currentTags.findIndex((item)=> item==="Important")===-1) {
            props.addTag('Important', props.report.id);
            (currentTags)?setCurrentTags([...currentTags, 'Important']):setCurrentTags(['Important']);
        }
    } else if (e.key == 2){
        if (!currentTags || (props.searchCriteria && currentTags.findIndex((item)=> item===props.searchCriteria)===-1)){
            props.addTag(props.searchCriteria, props.report.id);
            (currentTags)?setCurrentTags([...currentTags, props.searchCriteria]):setCurrentTags([props.searchCriteria]);
        }
    };
};


    return (
        <div className="textFileDisplayCont"  tabIndex="0" onKeyDown={handleKeyPress}>
                        
            <div className="nav">
                    <div className="navArrow" onClick={()=>iterateReports(-1)}> &lt;- Prev</div>
                    <button onClick={props.clearReport}>Close</button>
                    <div className="navArrow" onClick={()=>iterateReports(1)}>Next -&gt;</div>
                </div>

            <div className="textFileDisplayWithTags">
                <textarea readOnly autoFocus className="textFileDisplay" placeholder='sample text here' value={props.report.body}></textarea>
                <div className="tagSidebar">
                    {props.activeTags[props.report.id] &&                    
                    <div className="activeTags">
                    Active Tags:
                        <ul>
                            {props.activeTags[props.report.id].map( (item)=> {
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