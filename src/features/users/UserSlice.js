import {createSlice} from "@reduxjs/toolkit"


const initialState = [
    { 
        id:'1',
        name:'tazi',
        email:'tazi@gmail.com',
    },
    { 
        id:'2',
        name:'ali baba',
        email:'baba ali@gmail.com',
    }
];

const useSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state, action)=>{
            state.push(action.payload);
        },
        editUser:(state, action)=>{
            const { id, name, email} = action.payload;
            const existingUser = state.find(user =>user.id === id);
            if(existingUser){
                existingUser.name=name;
                existingUser.email=email;
            }
        },
        deleteUser:(state, action) =>{
            const {id}= action.payload;
            const existingUser = state.find(user =>user.id === id);
            if(existingUser){
                return state.filter(user=>user.id!==id);
            }
        }
    }
});


export const {addUser, editUser, deleteUser}=useSlice.actions
export default useSlice.reducer;