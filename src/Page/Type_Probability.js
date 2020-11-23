import React from "react";
import { Header_Part } from "../Header_Part.js";
import { Footer_Part } from "../Footer_Part.js";
export { Type_Probability };

class Type_Probability extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header_Part />
        <br />
        <h1>Type de probabilité rencontré</h1>
        <br />
        <div>
          Il existe de nombreux cas dans la vie de tous les jours où nous sommes
          confrontés aux probabilités. Les jeux d'argent, repondre au pif à une
          question...
        </div>
        <div>
          Ici, vous allez trouver différents exemple. Si l'un de ses exemples
          vous interesse, vous pourrez regarder sa page dédiée
        </div>
        <br />
        <div>
          "pile ou face" ou encore deux événements strictement oposés,
          incompatibles
        </div>
        <div>
          "A pile ou face, je paye 1 euro pour gagner 2 si pile apparait ou je
          paye 2 pour gagner 3 si face apparait, quel est le plus profitable ?"
        </div>
        <br />
        <div>a</div>
        <br />
        <Footer_Part />
      </React.Fragment>
    );
  }
}
