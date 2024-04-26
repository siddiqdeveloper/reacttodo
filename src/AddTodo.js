import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { showToast } from 'react-next-toast';
import { useParams } from "react-router-dom";


const AddTodo = () =>{

    const [todo,setTodo] = useState('');
    const [lable,setLable] = useState('Add Task');
    const inputref = useRef();
    const params = useParams();
    console.log(params);

    useEffect(()=>{

        if(params.code){

            setLable('Update Task');

            axios.get('https://crudcrud.com/api/a7b2b44075644970a7c6f710cc41d84c/unicorns/'+params.code)
            .then((res)=>{
                console.log(res.data);

                setTodo(res.data.name)

            })

        }
    },[])


    const save = ()=>{
        console.log(todo);
        let data = {name:todo};
        axios.post('https://crudcrud.com/api/a7b2b44075644970a7c6f710cc41d84c/unicorns',data)
        .then((res)=>{
            console.log(res);
            setTodo('');
            inputref.current.value = '';
            showToast.success('Todo Added successful')


        })
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