import { Routes, Route } from "react-router-dom";
import Global from "./pages/global";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/*" element={<Global />} />
      </Routes>
    </>
  );
}

export default App;
