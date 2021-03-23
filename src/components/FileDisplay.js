import {React, useState} from "react";
import SingleFile from './SingleFile';
import TextFileDisplay from './TextFileDisplay';

const FileDisplay = (props) => {

let [report, setReport] = useState('');

    let sampleFiles = [
        {
        id: 1,
        title: "Report 1",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple. ",
        },
        {
        id: 2,
        title: "Report 2",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Banana.",
        },
        {
        id: 3,
        title: "Report 3",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Orange.",
        },
        {
        id: 4,
        title: "Report 4",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple.",
        },
];


let showReport = (arg) => {
    setReport(sampleFiles[arg]);
    console.log(sampleFiles[arg].title);
};

let clearReport = () => {
    setReport('');
};

let regex = new RegExp(`${props.searchCriteria}`,'i');

    return (
        <div className="allFileCont">
            {report && < TextFileDisplay report= {report.body} clearReport={clearReport} />}
            {sampleFiles.map( (item, index)=> {
                if (props.searchCriteria==='' || item.body.search(regex) > -1) {
                    return < SingleFile key={item.id} showReport={showReport} index={index} file={item}/>
                }
            })}

        </div>
    )
};

export default FileDisplay;