import {React, useState, useEffect} from "react";
import SingleFile from './SingleFile';
import TextFileDisplay from './TextFileDisplay';
import ParsedFiles from '../ParsedFiles';

const FileDisplay = (props) => {

//initialize states for active report, tags, and constrained results
let [report, setReport] = useState('');
let [testTags, setTestTags] = useState({});
let [constrained, setConstrained] = useState([]);

let sampleFiles = ParsedFiles;

//callback function to display a chosen report
let showReport = (arg) => {
    let report = sampleFiles[arg];
    report.index = arg;
    setReport(report);
};

//callback function to clear current active report
let clearReport = () => {
    setReport();
};

//callback function to add tag to active report
let addTag = (tag, id) => {
let prevTags = testTags;
(prevTags[id])?prevTags[id].push(tag): prevTags[id] = [tag];
setTestTags(prevTags);
};

//function to constrain results to display based on search criteria
let constrainItems = () => {
    let regex;
    let constrainedItems=[];

    if (props.searchCriteria === '' || props.searchCriteria[0] !== '-') {
        try {
            regex = new RegExp(`${props.searchCriteria}`,'i');
        } catch (e) {
            console.error(e);
        }
        
        sampleFiles.forEach( (report, index)=> {
        if (props.searchCriteria==='' || (report.body.search(regex) > -1)) {
            constrainedItems.push(index);
        };
    });

    } else if (props.searchCriteria[0] === '-'){
        try {
            regex = new RegExp(`${props.searchCriteria.slice(1)}`,'i');
        } catch (e) {
            console.error(e);
        }
        
        sampleFiles.forEach( (report, index)=> {
        if (!(report.body.search(regex) > -1)) {
            constrainedItems.push(index);
        };
    });
    };
    
    setConstrained(constrainedItems);

};

//re-constrain results whenever search criteria prop changes
useEffect( ()=> {
    constrainItems();
},[props.searchCriteria]);

//callback function to iterate through constrained reports
let iterateReport = (index, dir) => {

    if (constrained.length>0) {
        let currentConstrained = constrained.findIndex((item)=> item===index);
        if (currentConstrained===-1 ){
            currentConstrained=0;
        } else {
            currentConstrained +=dir;
        }
        if (currentConstrained >= constrained.length || currentConstrained < 0) {
            currentConstrained -=dir;
        }
        showReport(constrained[currentConstrained]);
    };
};

    return (
        <div className="allFileCont">
            {report && < TextFileDisplay key={report.id} searchCriteria={props.searchCriteria} iterateReport={iterateReport} addTag={addTag} activeTags= {testTags} id={report.id} report= {report} clearReport={clearReport} />}

            {constrained.map( (item) => {
                return < SingleFile key={sampleFiles[item].id}  activeTags= {testTags[sampleFiles[item].id]} showReport={showReport} index={item} file={sampleFiles[item]}/>
            })}
        </div>
    )
};

export default FileDisplay;