import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app text-center">
      <ContactForm />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
