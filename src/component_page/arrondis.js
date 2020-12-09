export default function arrondis(valeur) {
  valeur *= 100;
  valeur = Math.round(valeur);
  return valeur / 100;
}
