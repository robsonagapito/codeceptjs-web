const { I } = inject();

const elem = {
  inputLogin: "#user_login",
  inputFullName: "#user_full_name",
  inputEmail: "#user_email",
  inputAge: "#user_age",
  btnSave: "#btn-save"
}

class UserEditPage {

  fillLogin(text){
    I.fillField(elem.inputLogin, text)  
  }

  fillFullName(text){
    I.fillField(elem.inputFullName, text)  
  }

  fillEmail(text){
    I.fillField(elem.inputEmail, text)  
  }

  fillAge(text){
    I.fillField(elem.inputAge, text)  
  }

  clickSave(){
    I.click(elem.btnSave)
  }

}

module.exports = UserEditPage