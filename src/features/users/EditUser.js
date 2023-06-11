import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Button from '../../Components/Button'
import TextField from '../../Components/TextField'
import {useDispatch, useSelector} from 'react-redux'
import { editUser } from './UserSlice'

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const {name, email} = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });
    const handleEditUser = () =>{
      setValues({name:'',email:''})
      dispatch(editUser({
        id:params.id,
        name:values.name,
        email:values.email
      }))
      navigate('/')
    }
  return (
    <div className='mt-10 max-w-xl mx-auto '>
        <TextField label="Name" value={values.name} onChange={(e)=>setValues({...values,name: e.target.value})} inputProps={{type:'text',placeholder:"Enter Name"}}/>
        <TextField label="Email" value={values.email} onChange={(e)=>setValues({...values,email: e.target.value})} inputProps={{type:'email',placeholder:"Enter Email"}} />
        <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}


export default EditUser