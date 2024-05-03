import { useEffect, useState } from 'react';
import axios from 'axios';
import './dashbaord.css'
import { URL } from './config';

const Dashbaord = ()=>{
    const [list,setList] = useState({pending:0,completed:0}); 

    const getData = ()=>{
        axios.get(URL)
        .then((res)=>{

            console.log()

            let pen  = res.data.filter((item)=>{
                return !item.status;
            })

            let com  = res.data.filter((item)=>{
                return item.status;
            })

            setList({pending:pen.length,completed:com.length});

         


            
        })
      }



    useEffect(()=>{
        getData();
    },[])

    return <>

<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1>
        <strong>Todo App</strong>
        <br></br>
      </h1>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
        <div class="tile blue">
          <h3 class="title">Completed Task</h3>
          <p>{list.completed}</p>
        </div>
    </div>
    <div class="col-sm-6">
        <div  class="tile orange">
          <h3 class="title">Pending Task</h3>
          <p>{list.pending}</p>
        </div>
    </div>
  </div>

</div>

    </>

}

export default Dashbaord;