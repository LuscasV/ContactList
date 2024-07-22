import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/Contact";

type ContactsState = {
  itens: Contact[];
};

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: "Lucas Valadao",
      number: "33 999343679",
      email: "lucassilva@gmail.com",
    },
    {
      id: 2,
      name: "Marilaine Renata",
      number: "33 999365478",
      email: "marilaine@gmail.com",
    },
    {
      id: 3,
      name: "Maria Fernanda",
      number: "33 999334829",
      email: "mariafernanda@gmail.com",
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contact) => contact.id !== action.payload),
      ];
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      );

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload;
      }
    },
  },
});

export const { remove, edit } = contactsSlice.actions;

export default contactsSlice.reducer;
