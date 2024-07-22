import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { add } from "../../store/reducers/contacts";

import * as S from "./styles";
import Contact from "../../models/Contact";

const insertMaskInPhone = (phone: string) => {
  const noMask = phone.replace(/\D/g, "");
  const { length } = noMask;

  if (length <= 11) {
    return noMask
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(length === 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, "$1-$2");
  }
  return phone; // Retorna o número sem modificações se a máscara não puder ser aplicada
};

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const addContact = (e: FormEvent) => {
    e.preventDefault();
    const addingContact = new Contact(name, number, email, 8);

    dispatch(add(addingContact));
    navigate("/");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedPhone = insertMaskInPhone(e.target.value);
    setNumber(maskedPhone);
  };

  return (
    <S.Container>
      <h1>Novo Contato</h1>
      <S.Forms onSubmit={addContact}>
        <S.Campo
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
          placeholder="Nome"
        />
        <S.Campo
          value={number}
          onChange={handlePhoneChange}
          type="tel"
          required
          placeholder="(xx) x xxxx-xxxx"
        />
        <S.Campo
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="email"
          required
          placeholder="E-mail"
        />

        <S.AddButton type="submit">Adicionar</S.AddButton>
        <S.CancelButton to="/">Cancelar</S.CancelButton>
      </S.Forms>
    </S.Container>
  );
};

export default Form;
