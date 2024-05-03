import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { showToast } from 'react-next-toast';
import { useParams } from "react-router-dom";
import { URL } from './config';
const AddTodo = () =>{

    const [todo,setTodo] = useState('');
    const [lable,setLable] = useState('Add Task');
    const inputref = useRef();
    const params = useParams();
    console.log(params);

    useEffect(()=>{

        if(params.code){

            setLable('Update Task');

            axios.get(URL+params.code)
            .then((res)=>{
                console.log(res.data);

                setTodo(res.data.name)

            })

        }
    },[])


    const save = ()=>{
        let data = {name:todo};
        console.log(todo);
        if(params.code){

            axios.put(URL+params.code,data)
            .then((res)=>{
                console.log(res);
                setTodo('');
                inputref.current.value = '';
                showToast.success('Todo Updated Successfully')
    
            })

        }else{
           
        
            axios.post(URL,data)
            .then((res)=>{
                console.log(res);
                setTodo('');
                inputref.current.value = '';
                showToast.success('Todo Added successful')
    
            })

        }

       
    }
    return <>
     <div class="container">
        <div class="form">
            <input value={todo}  ref={inputref} type="text" onChange={(e)=>{
                setTodo(e.target.value);
            }} class="input" />
            <input onClick={()=>{
                save();
            }} class="add" value={lable} />
        </div>
     
     
     
        </div>
    

    </>
}

export default AddTodo;