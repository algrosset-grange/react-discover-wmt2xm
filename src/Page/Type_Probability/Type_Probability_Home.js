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
          confrontés aux probabilité. Les jeux d'argent, répondre au pif à une
          question...{" "}
        </div>
        <div>
          Ici, vous allez trouver différents exemple. Si l'un de ses exemples
          vous intéresse, vous pourrez regarder sa page dédié
        </div>
        <div />

        <br />
        <div />
        <br />
        <Footer_Part />
      </React.Fragment>
    );
  }
}
