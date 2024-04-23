import axios from "axios";
import { useEffect } from "react";


const List =  () =>{

    useEffect(()=>{

        axios.get('https://crudcrud.com/api/7282b8453c7c449f84fb36dcd91469fb/unicorns')
        .then((res)=>{
            console.log(res.data);
        })

    },[])
    return <>Hi</>
}

export default List;