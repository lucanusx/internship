let screenValue = "";

//  ekrana yazdirma fonksiyonu
function display(value) {
  document.getElementById("screen").innerHTML = value;
}

// sayisal tuslara basilinca calisacak
function numberPressed(number) {
  // Eğer ekranda 0 varsa, sayıyı değiştir
  if (screenValue === "0") {
    screenValue = number;
  } else {
    // Eğer ekranda 0 yoksa, sayının sonuna ekle
    screenValue += number;
  }

  display(screenValue);
}

// islem tuslarina basildiginda calisacak
function operationPressed(operation) {
  
  if (screenValue !== "") { // ekranda bir sayı varsa sonuna ekliyor
    screenValue += operation;
    display(screenValue);
  }
}

// hesaplama tusuna basilinca calisacak
function equalPressed() {
  // ekranda islem varsa sonucu hesaplama
  if (screenValue.includes("+") || screenValue.includes("-") || screenValue.includes("x") || screenValue.includes("/")) {
    screenValue = screenValue.replace("x", "*"); // x isaretini * ile degistirip carpma islemine ceviriyoruz
    let result = eval(screenValue);     // eval fonksiyonu ile sonucu al
    display(result);
    screenValue = result.toString();
  }
}

// ekrani temizleme
function clearPressed() {
  screenValue = "0";
  display(screenValue);
}

// kurulum fonksiyonu
function init() {

  clearPressed(); // sifirlama 
  
  // tum tuslari secip donguye sokuyoruz.
  let buttons = document.getElementsByClassName("number");
  for (let i = 0; i < buttons.length; i++) {
    let value = buttons[i].innerHTML;

    // tuslara tiklandiginda calisacak fonksiyon
    buttons[i].onclick = function() {
      // Eğer basilan tus sayi ise  numberPressed fonksiyonu
      if (!isNaN(value)) {
        numberPressed(value);
      } else if (value === "=") { 
        equalPressed();
      } else if (value === "TEMİZLE") { 
        clearPressed();
      } else { 
        operationPressed(value);
      }
    };
  }
}

// sayfa yuklenince kurulum yapilacak
window.onload = init;
