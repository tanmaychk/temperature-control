import React,{useState} from 'react'

const App= () => {
  const [temperaturevalue, setTemperaturevalue] = useState(21)
  const [temperaturecolor, setTemperaturecolor] = useState("cold")

  const increasetemperature=()=>{
    if(temperaturevalue===36) return alert('that is too hot');
    const inctemp=temperaturevalue+1;
    setTemperaturevalue(inctemp);
    if(inctemp>=25){
      setTemperaturecolor('hot')
    }
  }

  const decreasetemp=()=>{
    if(temperaturevalue===3) return alert('that is too cold');
    const dectemp=temperaturevalue-1;
    setTemperaturevalue(dectemp);
    if(dectemp<25){
      setTemperaturecolor('cold')
    }
  }
  return (
    <div className='app-container'>
      <div className='temperature-display-container'>
        <div className={`temperature-display ${temperaturecolor}`}>
          {temperaturevalue}°C
        </div>
      </div>
    <div className="button-container">
      <button onClick={()=> increasetemperature()}>+</button>
      <button onClick={()=> decreasetemp()}>-</button>
    </div>
    </div>
  )
}

export default App
