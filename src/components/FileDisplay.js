import {React, useState} from "react";
import SingleFile from './SingleFile';
import TextFileDisplay from './TextFileDisplay';

const FileDisplay = (props) => {

let [report, setReport] = useState('');
let [testTags, setTestTags] = useState({});

    let sampleFiles = [
        {
        id: 1,
        title: "Report 1",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple. ",
        tags: [],
        },
        {
        id: 2,
        title: "Report 2",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Banana.",
        tags: [],
        },
        {
        id: 3,
        title: "Report 3",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Orange.",
        tags: [],
        },
        {
        id: 4,
        title: "Report 4",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple.",
        tags: [],
        },
        {
        id: 5,
        title: "Report 5",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Orange.",
        tags: [],
        },
        {
        id: 6,
        title: "Report 6",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple.",
        tags: [],
        },
];


let showReport = (arg) => {
    setReport(sampleFiles[arg]);
    console.log(sampleFiles[arg].title);
};

let clearReport = () => {
    setReport();
};

let addTag = (tag, id) => {

//     let index= sampleFiles.findIndex( (item)=> {
//     return item.id === id;
// });
// sampleFiles[index].tags.push(tag);
// console.log(sampleFiles[index]);

let prevTags = testTags;
console.log(prevTags[id]);
(prevTags[id])?prevTags[id].push(tag): prevTags[id] = [tag];

setTestTags(prevTags);
console.log("state tags:", testTags);

};

let addTagCallback;

let getAddTagCallback = (func) => {
    addTagCallback = func;
};


// let displayTags = (id) => {
//     if (testTags[id]) {
//         testTags[id].map( (item) => {
//             return item
//         })
//     };

// };

let regex = new RegExp(`${props.searchCriteria}`,'i');

    return (
        <div className="allFileCont">
            {report && < TextFileDisplay searchCriteria={props.searchCriteria} addTag={addTag} activeTags= {testTags} id={report.id} report= {report} clearReport={clearReport} />}
            {sampleFiles.map( (item, index)=> {
                if (props.searchCriteria==='' || item.body.search(regex) > -1) {
                    return < SingleFile key={item.id}  activeTags= {testTags[item.id]} showReport={showReport} index={index} file={item}/>
                }
            })}

        </div>
    )
};

export default FileDisplay;