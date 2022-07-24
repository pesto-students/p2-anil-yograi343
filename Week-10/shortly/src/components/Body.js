import React, { useState } from "react";
import "../App.css"

function Body({setLink}) {
    const [url,setUrl]=useState("");

    let handleClick=()=>{
        setLink(url);
        setUrl("");
    }

  return (
    <>
      <div className="container">
        <input  className="bInput"
        placeholder="Enter URL" 
        type="text" 
        value={url} 
        onChange={(e)=>setUrl(e.target.value)} />
        <button type="button" class="btn buttonBody"
        onClick={handleClick}>Generate</button>
        
      </div> 
    </>
  );
}

export default Body;
