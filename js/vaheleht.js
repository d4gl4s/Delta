/* Javascript -> Daglas Aitsen 2022 */
var loendur = 0 /* Muutuja, mille abil loetakse järjenditest 'pildid' ja 'hinnangud' vastavad tualettruumide andmed */
const pildid = ["assets/tualett_2048.jpg", "assets/tualett_köök.jpg", "assets/tualett_raamatukogu.jpg", "assets/tualett_robootika.jpg", "assets/tualett_sissepääs.jpg"]
const hinnangud = [
  "+ Ruumikas ja mitmete tualettruumidega <br>+ Igas tualettruumis on kraanikauss <br>+ Suur peegel <br>- Vahetundide ajal tihti ülerahvastatud <br>- Mõnikord on paber otsas",
  "+ Lähedal köögile <br>- Vähe tualettruume <br>- Vahetundidel tihti ülerahvastatud <br>- Põrand tihti märg",
  "+ Ei ole vahetundide ajal ülerahvastatud <br>+ Rahulikum tualett võrreldes teistega <br>+ Igas tualettruumis on kraanikauss<br>+ Suur peegel<br>- Vähe tualettruume",
  "+ Rahulikum tualett <br>+ Suur peegel <br>-Vähem tualettruume ",
  "+ Kohe sissepääsu lähedal <br>+ Igas tualettruumis on kraanikauss <br>+ Suur peegel <br>- Vahetundide ajal mõnikord ülerahvastatud",
]

/* Kutsudes, avab järgmise tualettruumi hinnangu */
function järgmineTualett() {
  loendur += 1 /* Annab muutujale järgmise tualettruumi andmete indexi väärtuse */
  document.getElementById("tualettPilt").src = pildid[loendur] /* Vahetab tualettruumi pildi välja järjendis 'pildid' järgmise pildi vastu */
  document.getElementById("tualettHinnang").innerHTML = hinnangud[loendur] /* Vahetab tualettruumi hinnangu välja järjendis 'hinnangud' järgmise hinnangu vastu */
  if (loendur >= 4) loendur = -1 /* Kui loendur on jõudnud viimase hinnangu indexini, siis seab loenduri tagasi algusesse */
}

/* Kutsudes, avab eelmise tualettruumi hinnangu */
function eelmineTualett() {
  if (loendur <= 0) loendur = 5 /* Kui loendur on jõudnud esimese hinnangu indexini, siis seab loenduri tagasi lõppu */
  loendur -= 1 /* Annab muutujale eelmise tualettruumi andmete indexi väärtuse */
  document.getElementById("tualettPilt").src = pildid[loendur] /* Vahetab tualettruumi pildi välja järjendis 'pildid' oleva järgmise pildiga */
  document.getElementById("tualettHinnang").innerHTML = hinnangud[loendur] /* Vahetab tualettruumi hinnangu välja järjendis 'hinnangud' järgmise hinnangu vastu */
}
