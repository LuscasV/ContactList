import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { CgClose } from "react-icons/cg";
import { MdEdit, MdEmail } from "react-icons/md";
import { IoMdContact, IoIosCheckbox } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";

import { remove, edit } from "../../store/reducers/contacts";

import * as S from "./styles";

import ContactClass from "../../models/Contact";

type Props = ContactClass;

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

const Contact = ({
  name: originalName,
  number: originalNumber,
  email: originalEmail,
  id,
}: Props) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (originalName.length > 0) {
      setName(originalName);
    }
  }, [originalName]);

  useEffect(() => {
    if (originalNumber.length > 0) {
      setNumber(originalNumber.toString());
    }
  }, [originalNumber]);

  useEffect(() => {
    if (originalEmail.length > 0) {
      setEmail(originalEmail);
    }
  }, [originalEmail]);

  function cancelEdit() {
    setEditing(false);
    setName(originalName);
    setNumber(originalNumber.toString());
    setEmail(originalEmail);
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedPhone = insertMaskInPhone(e.target.value);
    setNumber(maskedPhone);
  };

  return (
    <S.Card>
      <S.Icons>
        <IoMdContact />
      </S.Icons>
      <S.Campo
        disabled={!editing}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <S.Icons>
        <BsTelephoneFill />
      </S.Icons>
      <S.Campo
        disabled={!editing}
        value={number}
        onChange={handlePhoneChange}
      />

      <S.Icons>
        <MdEmail />
      </S.Icons>
      <S.Campo
        disabled={!editing}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <S.ButtonsContainer>
        {editing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    name,
                    number,
                    email,
                    id,
                  })
                );
                setEditing(false);
              }}
            >
              <IoIosCheckbox />
            </S.SaveButton>

            <S.CancelButton onClick={cancelEdit}>
              <TiCancel />
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setEditing(true)}>
              <MdEdit />
            </S.EditButton>

            <S.RemoveButton onClick={() => dispatch(remove(id))}>
              <CgClose />
            </S.RemoveButton>
          </>
        )}
      </S.ButtonsContainer>
    </S.Card>
  );
};

export default Contact;
