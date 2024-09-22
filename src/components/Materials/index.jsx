import MaterialList from "./listing";

const Material = ({ name }) => {
  return name ? <div>{name}</div> : <MaterialList />;
};
export default Material;
