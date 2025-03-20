function jourTravaille(dateString) {
  let joursFeries = ["01/01/2024", "01/04/2024", "01/05/2024", "08/05/2024", "09/05/2024", "20/05/2024", "14/07/2024", "15/08/2024", "01/11/2024", "11/11/2024", "25/12/2024"];

  let estFerie = false;

  joursFeries.forEach((jour) => {
    if (jour === dateString) {
      estFerie = true;
    }
  });

  console.log(`Le ${dateString} est ${estFerie ? "un jour férié" : "un jour travaillé"}.`);
}

jourTravaille("01/01/2024");