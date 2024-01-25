import { useState } from 'react';
import './App.css';
import { useSpeechSynthesis } from 'react-speech-kit';


function App() {
  const [value, setValue] = useState("");
  const { speak }  = useSpeechSynthesis();

  const handleSpeak = (values) => {
    if (value.trim() !== "") {
      speak({ text: values });
    }
  };

  const handelNumSpeak = (num) =>{
    speak({text: num});
  }
  

  function equal(input) {
    try {
      const result = eval(input);
      handleSpeak(result);
      return result;

    } catch (error) {
      return "Invalid expression!";
    }
  }



  return (
    <div className='container'>
      <div className='calculator'>
        <span> </span>
        <span> </span>
        <span> </span>
        <span> </span>
        <div className='display'>
          <input type='text' value={value} />
        </div>
        <div className='gridbtn'>
          <input type='button' value="AC" onClick={e => setValue('', handelNumSpeak("Clear"))}></input>
          <input type='button' value="%" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="C" onClick={e => setValue(value.slice(0, -1),handelNumSpeak("delete"))}></input>
          <input type='button' value="/" onClick={e => setValue(value + e.target.value, handelNumSpeak("divide"))}></input>


          <input type='button' value="7" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="8" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="9" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="*" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>


          <input type='button' value="4" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="5" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="6" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="-" onClick={e => setValue(value + e.target.value, handelNumSpeak("minus"))}></input>


          <input type='button' value="1" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="2" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="3" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="+" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>

          <input type='button' value="00" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="0" onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="." onClick={e => setValue(value + e.target.value, handelNumSpeak(e.target.value))}></input>
          <input type='button' value="=" className='equals' onClick={e => setValue(e => equal(value))}></input>
        </div>

      </div>

    </div>
  );
}

export default App;
