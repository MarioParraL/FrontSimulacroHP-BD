import { FunctionalComponent } from "preact";

const Header: FunctionalComponent = () => {
  return (
    <div class={"Header"}>
      <h2>HARRY POTTER</h2>
      <div class={"nav-links"}>
        <a href={"/buscar"}>Buscador</a>
        <a href={"/characters"}>Characters</a>
        <a href={"/houses"}>Casas</a>
        <a href={"/filter"}>Filtrar</a>
        <a href={"/favoritos"}>Favoritos</a>
        <a href={"/logout"}>Logout</a>
        <a href={"/"}>Home</a>
      </div>
    </div>
  );
};

export default Header;
