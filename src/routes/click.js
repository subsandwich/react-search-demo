import React, { useState } from 'react';


export default function ClickPage() {
    const [clickState, setClickState] = useState(0)

    const contentList = [
        "Default content on the page",
        "Hidden content on the page",
        "More hidden goodness to be found"
    ];

    return (
        <div className="page">
            <h1>Click Test</h1>
            <p>This is a test for dynamic content.</p>
            <button onClick={()=>setClickState((clickState + 1) % 3)}>Click me to change content</button>
            <p>{contentList[clickState]}</p>
        </div>
    );
}
