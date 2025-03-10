function bisextile(année) {
  if (année % 4 == 0 || année % 400 == 0) {
    return année + " est une année bissextile";
  } else {
    return année + " n'est pas une année bisextile";
  }
}

console.log(bisextile(2025));
