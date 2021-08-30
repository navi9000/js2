import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";


function Test(props) {
    let { id } = useParams();

    let item = props.data.filter(item => item.id == id)

    return (<div>{item[0].text}</div>)
}

export default Test;