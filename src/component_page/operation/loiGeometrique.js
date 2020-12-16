export default function loiGeometrique(probaSucces, nbEchec) {
  return probaSucces * Math.pow(1 - probaSucces, nbEchec);
}
