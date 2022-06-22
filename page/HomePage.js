const { I } = inject();

const elem = {
  menUser: "#users"
}

class HomePage {
  clickUser(){
    I.click(elem.menUser)
  }

  openSite(){
    I.amOnPage('https://agapito-server.herokuapp.com/')
  }
}

module.exports = HomePage