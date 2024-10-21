import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text)
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showalert("Converted to Uppercase", "Success")
    }

    const handleLoClick = ()=>{
      console.log("Lowercase was clicked" + text)
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showalert("Converted to Lowercase", "Success")
  }

  const handleclearClick = ()=>{
    let newtext = " " ;
    setText(newtext)
    props.showalert("Text was cleared", "Success")
}


const handleExtraspaces = ()=>{
  let newtext = text.split(/[ ]+/);
  setText(newtext.join(" "))
  props.showalert("Extra spaces were removed", "Success")
}


    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value);
    }
    const [text, setText] = useState("")
  return (
    <>
    <div className='container'   style={{color: props.mode===`dark`?'white':'black'}}>
        <h2>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange= {handleOnChange} style={{backgroundColor: props.mode===`dark`?'grey':'white', color: props.mode===`dark`?'white':'black'}} id="MyBox" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick= {handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick= {handleclearClick}>Clear Text </button>
<button className="btn btn-primary mx-2" onClick= {handleExtraspaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3"   style={{color: props.mode===`dark`?'white':'black'}}>  
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text: 'Enter something in text box above to preview it'}</p>
    </div>
    </>
  )
}
