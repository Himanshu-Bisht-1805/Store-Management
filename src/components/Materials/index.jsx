import { Route, Routes } from "react-router-dom";
import MaterialList from "./listing";

const Material = () => {
  return (
    <>
      <Routes>
        <Route
          key="material-list"
          path="/material-list"
          element={<MaterialList />}
        />
      </Routes>
    </>
  );
};
export default Material;
