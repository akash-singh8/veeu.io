import { createSlice } from "@reduxjs/toolkit";

type RecordType = {
  id: string;
  type: string;
  name: string;
  value: string;
};

type InitialStateType = {
  domainRecordsMap: {
    [key: string]: RecordType[];
  };
};

const initialState: InitialStateType = {
  domainRecordsMap: {},
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    mapDomainRecords: (state, action) => {
      state.domainRecordsMap = action.payload;
    },
    addRecord: (state, action) => {
      state.domainRecordsMap[action.payload.domain].push(action.payload.record);
    },
    updateRecord: (state, action) => {
      const updatedRecords = state.domainRecordsMap[
        action.payload.domain
      ].filter((record) => record.id !== action.payload.newRecord.id);
      updatedRecords.push(action.payload.newRecord);
      state.domainRecordsMap[action.payload.domain] = updatedRecords;
    },
    removeRecord: (state, action) => {
      state.domainRecordsMap[action.payload.domain] = state.domainRecordsMap[
        action.payload.domain
      ].filter((record) => record.id !== action.payload.id);
    },
  },
});

export const { mapDomainRecords, addRecord, updateRecord, removeRecord } =
  recordSlice.actions;

export default recordSlice.reducer;
