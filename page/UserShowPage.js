const { I } = inject();

const elem = {
  lblCode: "#codigo"
}

class UserShowPage {
    async getCode() {
        let code = await I.grabHTMLFrom(elem.lblCode)
        return code
    }
}

module.exports = UserShowPage