import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Button from '../../Components/Button'
import TextField from '../../Components/TextField'
import { addUser} from './UserSlice'
import {v4 as uuidv4} from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:'',
        email:''
    });
    const handleAddUser = () =>{
      setValues({name:'',email:''})
      dispatch(addUser({
        id:uuidv4(),
        name: values.name,
        email:values.email
      }));
      navigate('/')
    }
  return (
    <div className='mt-10 max-w-xl mx-auto '>
        <TextField label="Name" value={values.name} onChange={(e)=>setValues({...values,name: e.target.value})} inputProps={{type:'text',placeholder:"Enter Name"}}/>
        <TextField label="Email" value={values.email} onChange={(e)=>setValues({...values,email: e.target.value})} inputProps={{type:'email',placeholder:"Enter Email"}} />
        <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser