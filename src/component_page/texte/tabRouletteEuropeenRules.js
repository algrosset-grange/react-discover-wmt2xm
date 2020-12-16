import React from "react";
import arrondis from "../operation/arrondis.js";
export default function tabRouletteEuropeenRules() {
  return (
    <React.Fragment>
      <div>
        La roulette européenne est composé de 37 cases de 0 à 36 La table
        présente égallement 3 couleurs : vert rouge et noir Seul le est vert,
        les 36 autres cases sont répartie équitablement (noté que tous les
        nombres pair ne sont pas rouge.)
      </div>
      <h2>description des paris possibles</h2>
      <tab>
        <tr>
          <th>description</th>
          <th>gain</th>
          <th>chance de réussir (en %)</th>
        </tr>
        <tr>
          <td>mise sur une case</td>
          <td>35 fois la mise</td>
          <td>{arrondis((1 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>Mise sur deux numéros</td>
          <td>17 fois la mise</td>
          <td>{arrondis((2 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>
            Mise sur trois numéros (transversale dite aussi « transversale
            pleine » : exemple : 7-8-9)
          </td>
          <td>11 fois la mise</td>
          <td>{arrondis((3 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>Mise sur quatre numéros (carré : exemple : 25-26-28-29)</td>
          <td>8 fois la mise</td>
          <td>{arrondis((4 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>
            Mise sur six numéros (sixain dit aussi « transversale simple » :
            exemple : 13-14-15-16-17-18)
          </td>
          <td>5 fois la mise</td>
          <td>{arrondis((6 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>
            Mise sur douze numéros (douzaine ou colonne : exemple : colonne 1-34
            ou douzaine 1-12)
          </td>
          <td>2 fois la mise</td>
          <td>{arrondis((12 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>
            Mise sur une chance simple, soit dix-huit numéros (Noir-Rouge -
            Pair-Impair - Manque-Passe)
          </td>
          <td>1 fois la mise</td>
          <td>{arrondis((18 / 37) * 100)}</td>
        </tr>
        <tr>
          <td>
            Mise sur vingt-quatre numéros (deux colonnes adjacentes,
            vingt-quatre premiers (1-24) ou vingt-quatre derniers (13-36)
          </td>
          <td>1/2 fois la mise</td>
          <td>{arrondis((24 / 37) * 100)}</td>
        </tr>
      </tab>
    </React.Fragment>
  );
}
