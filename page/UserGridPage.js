const { I } = inject();

const elem = {
  btnNew: "#btn-new"
}

class UserGridPage {

  clickNewUser(){
    I.click(elem.btnNew)
  }

}

module.exports = UserGridPage