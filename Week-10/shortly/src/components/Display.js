import React, { useEffect, useState } from "react";
import "../App.css";

function Display({ link }) {
  // console.log(link);
  const [shortLink, setShortLink] = useState("");
  
    const fetchData = async () => {
    
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
    const data = await res.json();
    setShortLink(data.result.full_short_link);
  };
  useEffect(() => {
    if (link.length) {
        fetchData();
      }
    });


  return (
    <div className="result">
      <p>{shortLink}</p>
      <button type="button" class="buttonDisplay"
      onClick={() => {navigator.clipboard.writeText(shortLink)}}
      >
      Copy</button>
    </div>
  );
}

export default Display;