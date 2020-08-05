import React,{useContext} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

export default function Navbarcomponent() {

  const {state,dispatch} = useContext(AuthContext)
  const history = useHistory()



  const renderList = ()=>{
    if(state){
        return [
          <li className="nav-item " key={1}>
          <Link className="nav-link text-white font-weight-bold" to="/"
            >Home 
          </Link>
        </li>,
          <li className="nav-item active" key={2}>
          <Link className="nav-link font-weight-bolder" to="/login"
          onClick={()=>{
          localStorage.clear()
          dispatch({type:"CLEAR"})
          history.push('/login')
          window.location.reload()
          }}
          >Logout</Link>
          </li>
        ]
    }else{
      return [
        <li className="nav-item active" key={3}>
              <Link className="nav-link font-weight-bolder" to="/register"
                >Register</Link>
            </li>,
            <li className="nav-item active" key={4}>
              <Link className="nav-link font-weight-bolder" to="/login"
                >Login</Link>
            </li>
      ]
    }
  }



    return (

        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-sm-start sticky-top">
        <Link className="navbar-brand font-weight-bold" to="/">INR Bit</Link>
  
        <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >Menu
        
      </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          {renderList()}

          </ul> 

        </div>
      </nav>


    )
}
