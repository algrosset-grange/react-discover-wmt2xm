import coefficientBinomial from "./coefficientBinomial.js";

export default function loiBinomial(nbEpreuve, nbSucces, probaSucces) {
  return (
    coefficientBinomial(nbEpreuve, nbSucces) *
    Math.pow(probaSucces, nbSucces) *
    Math.pow(1 - probaSucces, nbEpreuve - nbSucces)
  );
}
