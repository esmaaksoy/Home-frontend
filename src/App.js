import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
     <ToastContainer />
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
    </>
  );
}

export default App;
