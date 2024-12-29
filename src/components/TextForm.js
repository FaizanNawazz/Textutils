import React,{useState} from 'react'

export default function TextForm(props) {
    const upClick=() => {
       // console.log("Uppercase was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const lowClick=() => {
      // console.log("Lowercasecase was Clicked" + text);
       let newText=text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase","success")
   }
   const clearClick=() => {
    // console.log("Lowercasecase was Clicked" + text);
     let newText='';
     setText(newText);
     props.showAlert("Text Cleared","success")
 }
 const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking","success")
}
    const handleon=(event) => {
       // console.log("onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
<div className="container" style={{color : props.mode === 'light'? 'black' : 'white'}}>
    <h1>{props.heading}</h1>
  <textarea className={`form-control ${props.mode === 'light' ? 'light-mode' : 'dark-mode'}`} id="Mybox" value={text}  placeholder={"Type Here"} onChange={handleon} rows="8" style={{backgroundColor : props.mode === 'light'? 'white' :' rgba(33,37,41,1)', color : props.mode === 'light'? 'black' : 'white'}}></textarea>
<button className="btn btn-primary my-3" onClick={upClick}>Convert To Uppercase</button>
<button className="btn btn-primary my-3 mx-2" onClick={lowClick}>Convert To Lowercase</button>
<button className="btn btn-primary my-3 " onClick={clearClick}>Clear Text</button>
<button className="btn btn-primary my-3 mx-2" onClick={speak}>Speak</button>
</div>
<div className="container my-2" style={{color : props.mode === 'light'? 'black' : 'white'}}>
  <h2>Your Text Summary</h2>
  <p>{wordCount} words and {text.length} characters</p>
  <p>{0.008 * text.split("").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Text above to Preview"}</p>
</div>
    </>
  )
}
