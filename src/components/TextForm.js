import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = ("");
    setText(newText)
    props.showAlert("Text cleared!", "success");
  }
  const reverseString = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Word has been reversed!", "success");
  }
  const handleCopy = ()=>{
    console.log("I am copy");
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!", "success");
  }
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ] + /);
  setText(newText.join(" "))
  props.showAlert("Extra spaces has been removed!", "success");
}
   const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
const [text, setText] = useState("");
  // setText("Enter a text");
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={reverseString}>Reverse</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
<h2>Your Text Summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<h2>Preview</h2>
<p>{text.length>0?text:'Enter some text in above text box above to preview'}</p>
  </div>
  </>
  )
}
