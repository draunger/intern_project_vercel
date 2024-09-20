import { useState , useEffect} from 'react'
import Boxoffice from './Boxoffice';
import './App.css'
const App = () => {
  const [arr,setarr]=useState([]);
  useEffect(()=>{
      fetch(`https://dummyapi.online/api/movies`).then((res)=>{
        return res.json();
      }).then((resp)=>{
        setarr(resp);
      })
    },[])
    return (
      <div>
      <Boxoffice  arr={arr}  />
    </div>
  )
}

export default App
