import React,{useState} from 'react'

export default function TextForm(props) {
    const upClick=() => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const lowClick=() => {
       let newText=text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to LowerCase","success")
   }
   const clearClick=() => {
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
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  return (
    <>
<div className="container" style={{color : props.mode === 'light'? 'black' : 'white'}}>
    <h1>{props.heading}</h1>
  <textarea className={`form-control ${props.mode === 'light' ? 'light-mode' : 'dark-mode'}`} id="Mybox" value={text}  placeholder={"Type Here"} onChange={handleon} rows="8" style={{backgroundColor : props.mode === 'light'? 'white' :' rgba(33,37,41,1)', color : props.mode === 'light'? 'black' : 'white'}}></textarea>
  <div className="d-flex flex-column flex-sm-row justify-content-start mt-3">
    <button disabled={text.length===0} className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={upClick}>
      Convert To Uppercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={lowClick}>
      Convert To Lowercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary mb-2 mb-sm-0 me-sm-2" onClick={clearClick}>
      Clear Text
    </button>
    <button disabled={text.length===0} className="btn btn-primary" onClick={speak}>
      Speak
    </button>
  </div>
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
