import React, { useState } from 'react'

type Props = {
    maxChars: number;
    children: string;      
}

const ExpandableText = ({maxChars, children}: Props) => {
    const[isExpanded, setExpanded] = useState(false);
    if(children.length <= maxChars)  <p>{children}</p>
    const text = isExpanded ? children : children.substring(0, maxChars);
    return <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
}

export default ExpandableText