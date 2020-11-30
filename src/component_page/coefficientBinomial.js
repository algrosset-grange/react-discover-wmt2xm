export default function getCoefficientBinomial(nbEpreuve, nbSucces) {
  if (nbEpreuve == 0 || nbSucces == 0 || nbSucces == nbEpreuve) return 1;
  if (nbSucces == 1 || nbSucces == nbEpreuve - 1) return nbEpreuve;
  return (
    this.getCoefficientBinomial(nbEpreuve - 1, nbSucces - 1) +
    this.getCoefficientBinomial(nbEpreuve - 1, nbSucces)
  );
}
