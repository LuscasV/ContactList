import AddButton from "../../components/AddButton";
import ContactList from "../../containers/ContactsList";
import Header from "../../containers/Header";

const Home = () => {
  return (
    <>
      <Header />
      <ContactList />
      <AddButton />
    </>
  );
};

export default Home;
