import styles from "./HeaderMenu.module.scss";
import { useContext } from "react";
import ProduitsFavorisContext from "../../../../contexts/ProduitFavorisContext";
import ProduitsFavoris from "../ProduitsFavoris/ProduitsFavoris";

function HeaderMenu() {
  const ProduitFavorisContext = useContext(ProduitsFavorisContext);
  return (
    <ul className={`${styles.menuContainer} border p-20`}>
      {ProduitFavorisContext.data.length > 0 ? (
        ProduitFavorisContext.data.map((favoris) => (
          <li key={favoris._id}>
            <ProduitsFavoris produit={favoris} />
          </li>
        ))
      ) : (
        <li>Aucun Favoris</li>
      )}
    </ul>
  );
}

export default HeaderMenu;
