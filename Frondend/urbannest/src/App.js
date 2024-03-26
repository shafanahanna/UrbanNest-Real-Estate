import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Twilio from "./Pages/About";
import SignIn from "./Pages/Signin";
import SignUp from "./Pages/Signup";
// import Profile from "./Pages/profile";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/twilio" element={<Twilio />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
