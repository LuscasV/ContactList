import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  term: string;
};

const initialState: FilterState = {
  term: "",
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    termSwitch: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { termSwitch } = FilterSlice.actions;

export default FilterSlice.reducer;
