import '../styles/index.scss';
import '../styles//App.scss';
import { useState } from 'react';

// str = str.replace( /[aeiou]/ig, 'i' )

function App() {

  const [text, setText] = useState('');

  const handleChangeText = (ev) => {
    const currentText = ev.currentTarget.value;
    const regexVowels = /[aeiou]/ig;
    const mimimiText = currentText.replace( regexVowels, 'i')
    setText(mimimiText);
  }

  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" onChange={handleChangeText}></textarea>
      <p>{text}</p>
    </div>
  );
}

export default App;
