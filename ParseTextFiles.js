import {React, useState} from "react";

const ParseTextFiles = (props) => {

//initialize states for active report and current tags
let [parsedState, setParsedState] = useState({});

//example desired format
// let exampleFormat =  {
//     id: 1,
//     title: "Report 1",
//     firstSentence: "This is a sample report for testing the display",
//     body: "This is a sample report for testing the display. This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow. Apple. ",
//     };

let parseAllFiles = async () => {

    let allParsed= [];

    for (let i=1; i<11; i++) {
    //fetch txt file and get response in text format
    let response = await fetch(`./rawTxtFiles/${i}.txt`);
    let loadedText = await response.text();

    //find title index of doc
    let titleIndex = loadedText.indexOf("Title");
    let endTitle= loadedText.slice(titleIndex, titleIndex+200).search('\r\n|\r|\n') + titleIndex;

    //get title of doc
    let slicedTitle = loadedText.slice(titleIndex+7, endTitle);

    //body, set to arbitrary 1000 chars
    let body = loadedText.slice(0,5000);

    //set all in format, id just a counter, if there was a backend that would be set by database
    let parsed = {
        id: i,
        title: slicedTitle,
        body: body,
    };

    //push each file to parsed array
    allParsed.push(parsed);
    };

// console.log(allParsed);

//format output
return JSON.stringify(allParsed, null, 2);

};

useEffect( ()=> {
let getParsed = async () => {
    let all = await parseAllFiles();
    setParsedState(all);
    }
    getParsed();
},[]);

return (
    <div>     
            <textarea readOnly placeholder='sample text here' value={parsedState}></textarea>
    </div>
)
};

export default ParseTextFiles;