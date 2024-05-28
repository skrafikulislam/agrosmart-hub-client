import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  DashBoardPage,
  FaqPage,
  HomePage,
  LoginPage,
  SignupPage,
  TeamPage,
} from "./pages/index";
import Navbar from "./components/NavBar/Navbar";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col bg-[#b8b882] min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
