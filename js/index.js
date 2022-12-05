/* Javascript -> Daglas Aitsen 2022 */

/* Kutsudes, muudab suure pildi pildiks, mille peale vajutati */
function muudaPilti(src, id) {
  document.getElementById("piltSuurElement").src = src /* Muudab elemendi 'piltSuurElement' pildi 'src' väärtust, muutes selle funktsiooni parameetri 'src' väärtuseks */
  /* Kui pilt on portrait orientatsioonis, siis lisab elemendile vastava klassi*/
  if (id == "3") {
    document.getElementById("piltSuurElement").classList.add("portraitImage")
  } else {
    document.getElementById("piltSuurElement").classList.remove("portraitImage")
  }
}
