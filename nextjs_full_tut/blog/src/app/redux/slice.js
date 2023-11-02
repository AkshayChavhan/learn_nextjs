const { createSlice , nanoid , current } = require("@reduxjs/toolkit");

const initialState = {
    users : (JSON.parse(localStorage.getItem("userItem"))) ?
    JSON.parse(localStorage.getItem("userItem"))
    :  
    []// replace it if you dont need localstorage:->  users : []
}

const Slice = createSlice({
    name : "addUserReducer" ,
    initialState ,
    reducers : {
        addUser:(state ,action) => {
            console.log("state ",current(state.users));
            const data = {
                id: nanoid() ,
                name : action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users));   //for use localstorage remove if dont needed
            localStorage.setItem("userItem" , userData);               //for use localstorage remove if dont needed
        },
        removeUser:(state ,action) => {
            console.log(action.payload);
            const data = state.users.filter((item) => item.id != action.payload);
            state.users = data;
            let userData = JSON.stringify(data);   //for use localstorage remove if dont needed
            localStorage.setItem("userItem" , userData);               //for use localstorage remove if dont needed
        }
    }
});

export const { addUser , removeUser } = Slice.actions ;
export default Slice.reducer ; 