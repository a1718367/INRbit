import React,{useContext, useState, useEffect} from 'react'
import { AuthContext } from '../contexts/AuthContext';
import Axios from 'axios';
import moment from 'moment-timezone';
import Moment from 'react-moment';

export default function Homepage() {

    const {state,dispatch} = useContext(AuthContext)
    const [hxdata, setHxdata] = useState();
    const [inr, setINR] = useState();
    const [date, setDate] = useState();
    const [dose, setDose]=useState();
    const [list, setList] = useState(true);

    useEffect(()=>{
        if(state){
            getINR()
            console.log(hxdata)
            
        }
    },[state])
    
    useEffect(()=>{
        if(state){
            console.log(hxdata)
            
        }
    },[hxdata])
    

    async function add(){
        
        const config ={
            header: {
                'Content-Type': 'application/json'
              }
        }
        const data = {
            
            inr: inr,
            dose: dose,
            date: moment().format(),
            userid: state._id
        }
        const add = await Axios.post('inr/add', data, config)
        console.log(add)
        setINR("");
        setDose("");
        getINR();

    }
    
    async function getINR(){
        const data = await Axios.get(`inr/data/user/${state._id}`)
        const fdata = data.data.map((result)=>{
            return {
                date:moment(result.date).format('llll'),
                inr:result.inr,
                dose:result.dose,
                id:result._id
            }
        })
        setHxdata(fdata)
    }

    
    async function remove(id){
        const data = await Axios.delete(`/inr/data/${id}`)
        getINR();
    }
    

    return (
        <div className="container mt-3">
           <h1>{state?state.name : null } </h1>
           {/* <h1>{state?state.email : "loading" } </h1> */}
           {/* <h1>{state?state._id : "loading" } </h1> */}
           <div>
               {state?
               <div className = "row container mt-5">
                <div className="col-sm-12 col-md-4">
                    <form>
                        <div className="form-group">
                            <label htmlFor="dose">Warfarin Dose</label>
                            <input 
                            type="text"
                            name="dose"
                            id="dose"
                            placeholder="Enter Warfarin Dose"
                            value={dose}
                            onChange={(e)=>setDose(e.target.value)}
                            className="form-control"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="INR">INR Value</label>
                            <input 
                            type="text"
                            name="INR"
                            id="INR"
                            placeholder="Enter INR Value"
                            value={inr}
                            onChange={(e)=>setINR(e.target.value)}
                            className="form-control"
                            ></input>
                        </div>
                    <button className="btn btn-block btn-dark" onClick={()=>add()}>Add INR</button>
                    </form>
                </div>

                <div className="col-sm-12 col-md-8">
                        
                {/* <ul>{hxdata? hxdata.map((result)=>(
                <li key={result._id}>{result.date} {result.dose} {result.inr}</li>))
                    :"loading"}</ul> */}
                    <h3>History</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Dose</th>
                            <th scope="col">INR</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hxdata? hxdata.map((result, i)=>(
                            <tr key={i}>
                                <td>{result.date}</td>
                                <td>{result.dose} mg</td>
                                <td>{result.inr}</td>
                                <td><button className="btn btn-small btn-primary" onClick={()=>remove(result._id)}>Delete</button></td>
                            </tr>
                        )):null}
                    </tbody>

                </table>
            
                    
                </div>
           </div>:
           <h1>Please Sign Up or Login</h1>
           
           }
           </div>
            

           
        </div>
    )
}
