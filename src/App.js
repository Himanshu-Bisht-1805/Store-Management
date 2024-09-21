import "./App.css";
import AppLayout from "./components/Layout";

function App() {
  return (
    <div>
      <Route path="*" element={<AppLayout />} />
    </div>
  );
}

export default App;
