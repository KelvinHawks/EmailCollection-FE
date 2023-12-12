import { useState } from "react";
import "./App.css";
import BlogPage from "./blogs/pages/BlogPage";
//import ImagesNav from "./MainBody/components/ImagesNav";
//import Form from "./form/components/Form";
import TopHeader from "./header/TopHeader";
import Footer from "./shared/components/footer/Footer";
import Modal from "./shared/UIelements/Modal";
import Button from "./shared/components/formelements/Button";
import MainNavigation from "./shared/components/navigation/MainNavigation";

function App() {
  const [message, setMessage] = useState(false);
  //const [showContactModal, setShowContactModal] = useState(false);

  const closeContactModal = () => {
    setMessage(false);
  };

  return (
    <div className="App">
      <MainNavigation />
      <TopHeader />
      {/* <ImagesNav /> */}

      <Modal
        show={message}
        header="MESSAGE"
        footer={<Button onClick={closeContactModal}>Close</Button>}
        onCancel={closeContactModal}
      >
        <div className="email__div">
          <p>
            CONGRATULATIONS and WELCOME to MyCandidet. You will get UPDATED
            every Saturday at 7 AM
          </p>
        </div>
      </Modal>

      {/* <Form /> */}
      <BlogPage />
      <Footer setMessage={setMessage} />
    </div>
  );
}

export default App;
