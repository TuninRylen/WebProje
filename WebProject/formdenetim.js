function iletisimKontrol() {
    var AdForm = document.forms["iletisimForm"]["Ad"].value;
    var SoyadForm = document.forms["iletisimForm"]["Soyad"].value;
    var MailForm = document.forms["iletisimForm"]["Mail"].value;
    var TelefonForm = document.forms["iletisimForm"]["Telefon"].value;
    var MesajForm = document.forms["iletisimForm"]["Mesaj"].value;


    if (AdForm == "") {
        alert("Lütfen Ad Alanını Boş Bırakmayınız!");
        return false;
    } else if (SoyadForm == "") {
        alert("Lütfen Soyad Alanını Boş Bırakmayınız!");
        return false;
    } else if (MailForm.indexOf("@") == -1) {
        alert("Lütfen Geçerli Bir Email Adresi Kullanınız!");
        return false;
    } else if (TelefonForm == "") {
        alert("Lütfen Telefon Numaranızı Doğru Bir Şekilde Giriniz!");
        return false;
    } else if (MesajForm == "") {
        alert("Lütfen İletişim Kutusunu Boş Bırakmayınız!");
        return false;
    } else {
        return true;
    }

}

function girisKontrol() {

    var MailForm = document.forms["girisForm"]["GirisMail"].value;
    var SifreForm = document.forms["girisForm"]["GirisSifre"].value;

    if (MailForm.indexOf("@") == -1) {
        alert("Lütfen Geçerli Bir Email Adresi Kullanınız!");
        return false;
    } else if (SifreForm == "") {
        alert("Lütfen Şifrenizi Doğru Bir Şekilde Giriniz!");
        return false;
    } else {
        return true;
    }

}
