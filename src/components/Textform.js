import React,{useState} from 'react'

export default function Textform(props) {
    const handleclick=()=>{
        //console.log("Uppercase button Clicked");
        let a=text.toUpperCase();
        setText(a);
        props.showAlert("UpperCase Converted","success")
    }
    const handlereverse=()=>{
        //console.log("Uppercase button Clicked");
        let a=text.split(' ').reverse().join();
        setText(a);
        props.showAlert("Reverse Converted","success")
    }
    const handleloclick=()=>{
        let b=text.toLowerCase();
        setText(b);
        props.showAlert("LowerCase Converted","success")
    }
    const handlechange=(event)=>{/*event here is used for making changes*/
        //console.log("Text changed"); /*here we use event.target.value calls the event and also adds the changed content*/
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter the text');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} onChange={handlechange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='dark'?' 5px solid white':' 5px solid grey'}} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div> 
        {/* /*here we are using text as a value in order to change the text we are using onchange event*/ }
        <button className="btn btn-primary mx-2" onClick={handleclick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to LowerCase</button>
        <button className="btn btn-primary" onClick={handlereverse}>Reverse Text</button>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black '}}>
        <h2>Length</h2>
        <p>{text.split(' ').length} words and {text.length} characters.</p>
        <p>{0.008*text.split(' ').length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
