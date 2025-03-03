import { createSlice } from "@reduxjs/toolkit";

type RecordType = {
  id: string;
  type: string;
  name: string;
  value: string;
};

type InitialStateType = {
  currRecords: RecordType[];
  domainRecordsMap: {
    [key: string]: RecordType[];
  };
};

const initialState: InitialStateType = {
  currRecords: [],
  domainRecordsMap: {},
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    setCurrRecords: (state, action) => {
      state.currRecords = action.payload;
    },
    mapDomainRecords: (state, action) => {
      state.domainRecordsMap = action.payload;
    },
    addRecord: (state, action) => {
      state.currRecords.push(action.payload.record);
      state.domainRecordsMap[action.payload.domain].push(action.payload.record);
    },
    updateRecord: (state, action) => {
      const updatedRecords = state.currRecords.filter(
        (record) => record.id !== action.payload.newRecord.id
      );
      updatedRecords.push(action.payload.newRecord);
      state.currRecords = updatedRecords;
      state.domainRecordsMap[action.payload.domain] = updatedRecords;
    },
    removeRecord: (state, action) => {
      const updatedRecords = state.currRecords.filter(
        (record) => record.id !== action.payload.id
      );
      state.currRecords = updatedRecords;
      state.domainRecordsMap[action.payload.domain] = updatedRecords;
    },
  },
});

export const {
  setCurrRecords,
  mapDomainRecords,
  addRecord,
  updateRecord,
  removeRecord,
} = recordSlice.actions;

export default recordSlice.reducer;
