import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

import Contact from "../../components/Contact";

const ContactList = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts);
  const { term } = useSelector((state: RootReducer) => state.filter);

  const contactFilter = () => {
    return itens.filter(
      (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
    );
  };

  return (
    <div>
      <ul>
        {contactFilter().map((n) => (
          <li key={n.name}>
            <Contact
              id={n.id}
              name={n.name}
              number={n.number}
              email={n.email}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
