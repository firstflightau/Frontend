import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMarkup } from "./markupApi";

export const fetchMarkupAmount=createAsyncThunk('markup/fetchMarkupAmount',async(token,{rejectWithValue,getState})=>{
    const state = getState();
     token=state?.tpToken?.tpTokenData?.access_token
    console.log(state, "state in the flight slice",);
    try{
        const response=await fetchMarkup(token);
        const {data}=response;
        if(data.statusCode!==200){
            throw new Error('Failed to fetch markup');
        }
        return data?.data;
    }catch(error){
        const message=error.response?.data?.message || error.message || 'Failed to fetch markup';
        return rejectWithValue({message});
    }
})
const markupSlice=createSlice({
    name:'markup',
    initialState:{
        isLoading:false,
        isError:false,
        errorMessage:'',
        markupAmount:0
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMarkupAmount.pending,(state)=>{
            state.isLoading=true;
            state.isError=false;
            state.errorMessage='';
        }).addCase(fetchMarkupAmount.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.markupAmount=action.payload;
        }).addCase(fetchMarkupAmount.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.errorMessage=action.payload;
            state.markupAmount=[];
        })
    }
})
export default markupSlice.reducer;