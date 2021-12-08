import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
} /* 라우터를 관리하는곳이 될것임 */

export default App;
