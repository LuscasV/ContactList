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

  return (
    <S.Card>
      <S.Icons>
        <IoMdContact />
      </S.Icons>
      <S.TextArea
        disabled={!editing}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setName(e.target.value)
        }
      />

      <S.Icons>
        <BsTelephoneFill />
      </S.Icons>
      <S.TextArea
        disabled={!editing}
        value={number}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setNumber(e.target.value)
        }
      />

      <S.Icons>
        <MdEmail />
      </S.Icons>
      <S.TextArea
        disabled={!editing}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setEmail(e.target.value)
        }
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
