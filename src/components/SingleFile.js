import React from "react";

const SingleFile = (props) => {


    let file = {
        id: props.file.id,
        title: props.file.title,
        firstSentence: props.file.firstSentence,
        body: props.file.body,
        index: props.index,
    };

    let handleClick = (e) => {
        props.showReport(file.index);
    };

    return (
        <div onClick={handleClick} className="singleFileCont">

            <div className="singleFileItem fileId">{file.id}</div>
            <div className="singleFileItem fileTitle">{file.title}</div>
            <div className="singleFileItem fileSentence">{file.firstSentence}</div>
            <div className="singleFileItem fileBody">{file.body}</div>

        </div>
    )
};

export default SingleFile;
