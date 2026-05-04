import { Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
    </Routes>
  );
}

export default App;
