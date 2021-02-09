//defender, v1.0, 19.01.2021.

//#region Osnovne postavke - logo i broj sezone
var logoLige = "https://i.postimg.cc/xq371qFr/25s.png";
var sezonaLige = "25";
var termin = "23.01.2021. godine (Subota) do 12:00 sati";
//#endregion

//#region Klubovi - naziv, logo i sastav
const klub01 = { naziv: "Backspace United", logo: "https://i.postimg.cc/Z02fJZL0/Zastavica-Backspace.png", sastav: { clan1: "Sheyi", clan2: "Nerminovic", clan3: "Burundi" } };
const klub02 = { naziv: "BH fanaticos", logo: "https://i.postimg.cc/jDQ3Mv4C/Zastavica-BHF2.png", sastav: { clan1: "Omerbavarac", clan2: "harry_90", clan3: "Centre forward" } };
const klub03 = { naziv: "Blue Train", logo: "https://i.postimg.cc/njVQFFPy/Zastavica-Blue-Train-FC-2020.png", sastav: { clan1: "anonimni", clan2: "Suki46", clan3: "Trebinjac94" } };
const klub04 = { naziv: "Crazy Legs", logo: "https://i.postimg.cc/TyhNqQWB/Zastavica-Crazy-Legs.png", sastav: { clan1: "nerkolfc", clan2: "delinjo", clan3: "soxx" } };
const klub05 = { naziv: "Čekićari", logo: "https://i.postimg.cc/m1CwM2Tm/Zastavica-eki-ari-2020.png", sastav: { clan1: "Mont0", clan2: "BaDa12", clan3: "alex1991" } };

const klub06 = { naziv: "FC Grizzlies", logo: "https://i.postimg.cc/FfqGcVLV/Zastavica-grizzlies.png", sastav: { clan1: "Justin", clan2: "harden", clan3: "BoixosNois1899" } };
const klub07 = { naziv: "FC Hollywood", logo: "https://i.postimg.cc/FkNYDVBm/Zastavice-Hollywood.png", sastav: { clan1: "S-Y-L-A-R", clan2: "dirkules", clan3: "phillies" } };
const klub08 = { naziv: "FC Ljuta Krajina", logo: "https://i.postimg.cc/jWNngrpt/2-Zastavica-Ljuta-Krajina.png", sastav: { clan1: "Padovan", clan2: "Goalgetter", clan3: "LjumanM95" } };
const klub09 = { naziv: "FC Premier", logo: "https://i.postimg.cc/v1TdPFvy/Zastavica-Premier.png", sastav: { clan1: "Belmin6", clan2: "defender", clan3: "Rooney88" } };
const klub10 = { naziv: "FK Bilder", logo: "https://i.postimg.cc/30TpLJWz/Zastavica-Bilder.png", sastav: { clan1: "Sviuodbranu", clan2: "BosniaBoston", clan3: "meepo" } };

const klub11 = { naziv: "FK Delfin", logo: "https://i.postimg.cc/QFr42yb1/Zastavica-Delfin.png", sastav: { clan1: "123456", clan2: "Pivopija", clan3: "Blancos10" } };
const klub12 = { naziv: "FK Formula", logo: "https://i.postimg.cc/zLggt2RQ/Zastavica-Formula-ss.png", sastav: { clan1: "coelho41", clan2: "Varg", clan3: "FRANK RIBERY" } };
const klub13 = { naziv: "FK Garaže", logo: "https://i.postimg.cc/Z099YMqD/Zastavica-Gara-e-2020.png", sastav: { clan1: "aldin-8", clan2: "spiska", clan3: "dinoo" } };
const klub14 = { naziv: "FK Gromovi", logo: "https://i.postimg.cc/9DWfxDn7/Zastavica-Gromovi.png", sastav: { clan1: "JohnCleese", clan2: "Pitagora", clan3: "1921boy" } };
const klub15 = { naziv: "FK Kockari", logo: "https://i.postimg.cc/CRKgQzyZ/Zastavica-Kockari.png", sastav: { clan1: "Maestro^^", clan2: "Viper", clan3: "huthut" } };

const klub16 = { naziv: "FK Pijetlovi", logo: "https://i.postimg.cc/TpnWRq0W/Zastavica-Pjetlovi.png", sastav: { clan1: "reds", clan2: "OTNYS_YNWA", clan3: "GracanicaAA" } };
const klub17 = { naziv: "FK Potkovice", logo: "https://i.postimg.cc/RFDd7dCS/potkovice.png", sastav: { clan1: "Edin TM87", clan2: "SaltCityAttack", clan3: "Mig_Mig" } };
const klub18 = { naziv: "FK Primitivci", logo: "https://i.postimg.cc/0MnbpfGL/Zastavica-Primitivci.png", sastav: { clan1: "StevieG8", clan2: "bavariapivo", clan3: "Otelo" } };
const klub19 = { naziv: "FK Topnici", logo: "https://i.postimg.cc/nsqRwNM9/Zastavica-Topnici.png", sastav: { clan1: "arelinho", clan2: "Admir_Sa", clan3: "amertiger" } };
const klub20 = { naziv: "Gongashi Powerhouse", logo: "https://i.postimg.cc/jWDwr6my/GPowerhouse.png", sastav: { clan1: "deyo", clan2: "ackeey", clan3: "Derdiyok" } };

const klub21 = { naziv: "Green Dragons", logo: "https://i.postimg.cc/BXcNnjKD/Zastavica-Green-Dragons-triple.png", sastav: { clan1: "legenda reala", clan2: "Cartman", clan3: "Aerials" } };
const klub22 = { naziv: "Jedinstvo Manchester", logo: "https://i.postimg.cc/QH7qst29/Zastavica-Manchester.png", sastav: { clan1: "forza", clan2: "Patrice_Evra_3", clan3: "Slatinash_7" } };
const klub23 = { naziv: "Joint_fc", logo: "https://i.postimg.cc/34H40pG5/Zastavica-Joint-FC2.png", sastav: { clan1: "KonjicBOY", clan2: "CarlitoBrigante", clan3: "fudbalfudbal" } };
const klub24 = { naziv: "Mislish United", logo: "https://i.postimg.cc/hQTd3sqG/Zastavica-Mislish-United2.png", sastav: { clan1: "__Liedson__", clan2: "tevezito", clan3: "OldFashioned" } };
const klub25 = { naziv: "Pivopije", logo: "https://i.postimg.cc/5HR1CTgK/Zastavica-Pivopije.png", sastav: { clan1: "scudetto89", clan2: "maldini3", clan3: "Pantelija" } };

const klub26 = { naziv: "Red Bavarian", logo: "https://i.postimg.cc/hXP3HFdQ/Zastavica-Red-Bavarian-2.png", sastav: { clan1: "geronimo", clan2: "effe_sa", clan3: "dr.adnan" } };
const klub27 = { naziv: "SK Stolac Hercegovina", logo: "https://i.postimg.cc/dDvktT77/Zastavica-Stolac.png", sastav: { clan1: "madridist", clan2: "Kulesza", clan3: "kraljttbvb" } };
const klub28 = { naziv: "Spamm", logo: "https://i.postimg.cc/K1MJ506z/Zastavica-Spamm.png", sastav: { clan1: "damir_82", clan2: "mirgerr", clan3: "FCBAYERN" } };
const klub29 = { naziv: "Spartans FC", logo: "https://i.postimg.cc/p5hbPD66/Zastavica-Spartans.png", sastav: { clan1: "pintol_TM87", clan2: "moj uzor-S.G", clan3: "brile" } };
const klub30 = { naziv: "Zadnja Klupa", logo: "https://i.postimg.cc/34c4jbdT/Zastavica-2-K.png", sastav: { clan1: "Bazinga12345", clan2: "CROtorious", clan3: "Napapijri" } };

const klubovi = [klub01, klub02, klub03, klub04, klub05,
    klub06, klub07, klub08, klub09, klub10,
    klub11, klub12, klub13, klub14, klub15,
    klub16, klub17, klub18, klub19, klub20,
    klub21, klub22, klub23, klub24, klub25,
    klub26, klub27, klub28, klub29, klub30];
//#endregion

function getKlubNaziv(naziv) {
    for (klub of klubovi) {
        if (klub.naziv == naziv) {
            return naziv;
        }
    }
}

function getKlubLogo(naziv) {
    for (klub of klubovi) {
        if (klub.naziv == naziv) {
            return klub.logo;
        }
    }
}

function getKlubSastav(naziv) {
    var sastav = "";
    for (klub of klubovi) {
        if (klub.naziv == naziv) {
            for (var clan of Object.values(klub.sastav)) {
                sastav += ("[quote=" + clan + "][/quote]\n");
            }
            return sastav;
        }
    }
}

function kreirajPost() {
    var x = document.getElementById("domaciTim");
    var domaciTim = x.options[x.selectedIndex].text; //naziv domaćina

    var y = document.getElementById("gostujuciTim");
    var gostujuciTim = y.options[y.selectedIndex].text; //naziv gosta

    var paroviDomacin = document.getElementById("paroviDomacin").value; //parovi za domaćina
    var paroviGost = document.getElementById("paroviGost").value; //parovi za gosta

    var inpTermin = document.getElementById("termin").value; //termin

    var odlomak1 = "[img]" + logoLige
        + "[/img]\n\n[color=#FF8000][size=150]SportSport liga " + sezonaLige
        + ". sezona[/size][/color]\n\n[size=150][b]"
        + domaciTim + " - " + gostujuciTim + "[/b][/size]\n\n";

    var odlomak2 = "[size=150][b]" + domaciTim + "[/b][/size][img]"
        + getKlubLogo(domaciTim) + "[/img]\n\n[b]\n"
        + getKlubSastav(domaciTim) + "[/b]\n\n";

    var odlomak3 = "[size=150][b]" + gostujuciTim + "[/b][/size][img]"
        + getKlubLogo(gostujuciTim) + "[/img]\n\n[b]\n"
        + getKlubSastav(gostujuciTim) + "[/b]\n\n";

    var odlomak4 = "[b]Parovi za domaćine:[/b]\n\n[code]\n"
        + paroviDomacin + "\n[/code]\n\n";

    var odlomak5 = "[b]Parovi za goste:[/b]\n\n[code]\n"
        + paroviGost + "\n[/code]\n\n";

    var odlomak6 = "[b]Ova tema je namijenjena samo za igrače ova dva kluba.\n"
        + "Igrači svoje prognoze mogu ostaviti najkasnije do " + inpTermin + ".[/b]";

    var post = odlomak1 + odlomak2 + odlomak3 + odlomak4 + odlomak5 + odlomak6;

    //console.log(post);
    navigator.clipboard.writeText(post);
}

$(document).ready(function () {

    var selectDomaci = document.getElementById("domaciTim");
    var selectGosti = document.getElementById("gostujuciTim");

    for (klub of klubovi) {
        selectDomaci.options[selectDomaci.options.length] = new Option(klub.naziv, klub.naziv);
        selectGosti.options[selectGosti.options.length] = new Option(klub.naziv, klub.naziv);
    }

    document.getElementById("paroviDomacin").placeholder =
        "Manchester City - Aston Villa" + "\n" +
        "Marseille - Lens" + "\n" +
        "Schalke - FC Koln" + "\n" +
        "Freiburg - E.Frankfurt" + "\n" +
        "Villarreal - Granada" + "\n" +
        "Valencia - Osasuna" + "\n\n" +
        "Bonus par:" + "\n" +
        "Augsburg - Bayern" + "\n" +
        "Eibar - Atl.Madrid";

    document.getElementById("paroviGost").placeholder =
        "Fulham - Manchester Utd" + "\n" +
        "A. Bielefeld - Stuttgart" + "\n" +
        "RB Leipzig - Union Berlin" + "\n" +
        "Betis - Celta Vigo" + "\n" +
        "Liverpool - Burnley" + "\n\n" +
        "Bonus par:" + "\n" +
        "Augsburg - Bayern" + "\n" +
        "Eibar - Atl.Madrid";

    document.getElementById("termin").value = termin;

    $('.js-example-basic-single').select2();
});