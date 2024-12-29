import React from 'react';

function AboutUs(props) {
  return (
    <div className="container mt-5" style={{color : props.mode === 'light'? 'black' : 'white'}}>
      <h2 className="text-center mb-4">About Textutils</h2>
      <p>
        <strong>TextUtils</strong> is a powerful and user-friendly web application designed to streamline text-based tasks and enhance productivity. Our mission is to provide an easy-to-use platform that helps users analyze, edit, and optimize their text with just a few clicks. Whether you need to convert text to uppercase, lowercase, clear unwanted text, or even have your text spoken aloud, <strong>TextUtils</strong> offers all the tools you need in one place.
      </p>
      <h3 className="mt-4">Our Features:</h3>
      <ul className={`list-group ${props.mode === 'light' ? 'light-mode' : 'dark-mode'}`}style={{ border: '1px solid' + (props.mode === 'light' ? 'black' : 'white')
      }}>
        <li className="list-group-item "style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Uppercase:</strong> Convert your text to uppercase with just one click.</li>
        <li className="list-group-item"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Lowercase:</strong> Change your text to lowercase effortlessly.</li>
        <li className="list-group-item"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Clear Text:</strong> Quickly clear the text input to start fresh.</li>
        <li className="list-group-item"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Speak:</strong> Have your text read aloud for better accessibility and convenience.</li>
        <li className="list-group-item"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Word and Character Count:</strong> Get instant feedback on the number of words and characters in your text.</li>
        <li className="list-group-item"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgba(33,37,41,1)',color: props.mode === 'light' ? 'black' : 'white' }}><strong>Preview:</strong> Check your text for readability.</li>
      </ul>
      <p className="mt-4">
        At <strong>TextUtils</strong>, we believe in simplicity and efficiency. We focus on providing essential features that save you time and help you work smarter, not harder. Whether you’re a student, writer, or professional, <strong>TextUtils</strong> is here to make your text-related tasks easier.
      </p>
    </div>
  );
}

export default AboutUs;
