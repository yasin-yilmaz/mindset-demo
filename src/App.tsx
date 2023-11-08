import ContactForm from "./components/ContactForm";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app text-center">
      <ContactForm />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
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
