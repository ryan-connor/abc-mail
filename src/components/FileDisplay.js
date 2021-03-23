import React from "react";
import SingleFile from './SingleFile';

const FileDisplay = () => {


    let sampleFiles = [
        {
        id: 1,
        title: "Report 1",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow",
        },
        {
        id: 2,
        title: "Report 2",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow",
        },
        {
        id: 3,
        title: "Report 3",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow",
        },
        {
        id: 4,
        title: "Report 4",
        firstSentence: "This is a sample report for testing the display",
        body: "This is the body of the report, with a lot more words and info in it. This report is pretty long so it should probably have hidden overflow",
        },
];




    return (
        <div className="AllFileCont">
            {sampleFiles.map( (item)=> {
                return < SingleFile key={item.id} file={item}/>
            })}

        </div>
    )
};

export default FileDisplay;