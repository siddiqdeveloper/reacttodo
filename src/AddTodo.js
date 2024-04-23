import { useRef, useState } from "react";
import axios from "axios";
import { showToast } from 'react-next-toast';


const AddTodo = () =>{

    const [todo,setTodo] = useState('');

    const inputref = useRef();



    const save = ()=>{
        console.log(todo);
        let data = {name:todo};
        axios.post('https://crudcrud.com/api/7282b8453c7c449f84fb36dcd91469fb/unicorns',data)
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
            <input  ref={inputref} type="text" onChange={(e)=>{
                setTodo(e.target.value);
            }} class="input" />
            <input onClick={()=>{
                save();
            }} class="add" value="Add Task" />
        </div>
     
     
     
        </div>
    

    </>
}

export default AddTodo;