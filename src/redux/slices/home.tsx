import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiConfig} from '../../service/api';
import { HomeState } from '../../models';


export const initialState : HomeState = {
  list: [],
};

//instead of any create type according to Api in model folder
export const getListingData = createAsyncThunk(
  'listLatestData',
  async (params: any, thunkAPI) => {
    try {
      const apiRes : any = await new ApiConfig().getJSON(
        "",
        params,
      );
      const res = apiRes.data as any
      if (res?.status.error_code == 0) {
        return res;
      } else {
        return thunkAPI.rejectWithValue(new Error('Something went worng'));
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const homeSlice = createSlice({
  initialState: initialState,
  name: 'Home',
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(getListingData.fulfilled, (state: any, action) => {
      state.list = [...state.list, ...action?.payload?.data];
    });
  },
});

export default homeSlice.reducer;
