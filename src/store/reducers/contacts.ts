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
      number: "(33) 99934-3679",
      email: "lucassilva@gmail.com",
    },
    {
      id: 2,
      name: "Marilaine Renata",
      number: "(33) 99936-5478",
      email: "marilaine@gmail.com",
    },
    {
      id: 3,
      name: "Maria Fernanda",
      number: "(33) 99933-4829",
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
    add: (state, action: PayloadAction<Contact>) => {
      const existingContact = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (existingContact) {
        alert("Já existe um contato com esse nome");
      } else {
        state.itens.push(action.payload);
      }
    },
  },
});

export const { remove, edit, add } = contactsSlice.actions;

export default contactsSlice.reducer;
