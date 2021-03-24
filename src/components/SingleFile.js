import {React, useState} from "react";

const SingleFile = (props) => {

    // let [tags, setTags] = useState([]);

    let file = {
        id: props.file.id,
        title: props.file.title,
        firstSentence: props.file.firstSentence,
        body: props.file.body,
        index: props.index,
    };

    // let addTag = (tag) => {
    //     setTags= [...tags, tag];
    //     console.log("tags:", tags);
    // };

    let handleClick = (e) => {
        props.showReport(file.index);
    };

    // props.getAddTagCallback(addTag);

    return (
        <div onClick={handleClick} className="singleFileCont">

            <div className="singleFileItem fileId">{file.id}</div>
            <div className="singleFileItem fileTitle">{file.title}</div>
            <div className="singleFileItem fileSentence">{file.firstSentence}</div>
            <div className="singleFileItem fileBody">{file.body}</div>
            {props.activeTags && <div className="activeTagsDisplay">{props.activeTags.map( (item) => {return <li >{item}</li>})} </div>}

        </div>
    )
};

export default SingleFile;
