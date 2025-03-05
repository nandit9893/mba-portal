import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
