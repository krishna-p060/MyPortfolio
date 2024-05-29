import React from "react";
import { useState, useEffect } from "react";
import "./Typing.css";

function Typing({ text, typingSpeed = 100, deletingSpeed = 50, duration = 1000}) {
    const[displayText, setDisplayText] = useState("");
    const[isDeleting, setIsDeleting] = useState(false);
    const[index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if(!isDeleting) {
                if(displayText.length < text[index].length) {
                    setDisplayText((prev) => prev + text[index].charAt(displayText.length))
                }
                else{
                    setTimeout(() => {setIsDeleting(true)}, duration);
                }
            } 
            else{
                if(displayText.length > 0) {
                    setDisplayText((prev) => prev.slice(0, -1));
                }
                else{
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        }
    

    const timeout = setTimeout( () => {
        handleTyping(); },
        isDeleting ? deletingSpeed : typingSpeed
    );

    return() => clearTimeout(timeout);
    }, [displayText, isDeleting, index, text, typingSpeed, deletingSpeed, duration]);

  return (
    <div className="typing-effect">
       {displayText}
      <span className="typing-sp">|</span>
    </div>
  );
}

export default Typing;