import "./App.css";
import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "./components/Home/Home";
function App() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [data,setData] = useState({})
  const navigate = useNavigate()
   async function login ()
   {
     let response = await fetch ("https://access-management-api.1click.tech/auth/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        "username": username,
       "password": password
      })
     });
     console.log(response.status)
     if(response.status === 200)
     {
          response= await response.json();
          console.log(response)
          const newdata = JSON.stringify(response)
          localStorage.setItem('data',newdata)
          navigate('/page')
          setData(response)
          console.log(response.token)
     }
     else{
      alert("wrong credentails")
     }
  
   }


  return (
    <>
      <div className="outer-parent">
        <div className="left-section">
          <div className="Box1">
            <div className="Box2"></div>
            <div className="Box3"></div>
            <div className="Box4"></div>
            <div className="Box5"></div>
          </div>
          <div className="Box22"></div>
          <div className="Box33">
            <div className="Box33-1" style={{color:"white"}}>{data.token}</div>
            <div className="Box33-2"></div>
            <div className="Box33-3"></div>
            <div className="Box33-4"></div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-part-1">
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="username" onChange={(e)=>setUserName(e.target.value)}  />
               
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)}   />
               
              </div>
              <div className="button-container">
                <button  onClick={()=>{login()}}>Submit</button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
