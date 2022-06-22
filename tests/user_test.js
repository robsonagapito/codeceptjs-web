const HomePage = require('./../page/HomePage.js')
const UserGridPage = require('./../page/UserGridPage')
const UserShowPage = require('./../page/UserShowPage')
const UserEditPage = require('./../page/UserEditPage')

const homePage = new HomePage()
const userGridPage = new UserGridPage()
const userEditPage = new UserEditPage() 
const userShowPage = new UserShowPage()

Feature('user')

xScenario('TC01 - Create a new user', async ({ I }) => {
    I.amOnPage('https://agapito-server.herokuapp.com/')
    I.click('#users')
    I.click('#btn-new')
    I.fillField('#user_login', 'Agapito')
    I.fillField('#user_full_name', 'Robson Agapito')
    I.fillField('#user_email', 'agapito@agapito.com')
    I.fillField('#user_age', '28')
    I.click('#btn-save')
    I.see('Usuário foi criado com sucesso.')
    I.waitForElement('#codigo')
    let value = await I.grabHTMLFrom('#codigo')
    console.log(value)
})

Scenario('TC02 - Create a new user with page', async ({ I }) => {
    homePage.openSite()
    homePage.clickUser()
    userGridPage.clickNewUser()
    userEditPage.fillLogin('agapito123')
    userEditPage.fillFullName('Robson Agapito Correa')
    userEditPage.fillEmail('robsonagapito@gmail.com')
    userEditPage.fillAge('30')
    userEditPage.clickSave()
    let code = userShowPage.getCode()
    I.see('Usuário foi criado com sucesso.')
    I.saveScreenshot("TestingOK.png") 

    // const allure = codeceptjs.container.plugins('allure');
    // allure.addAttachment("Imagem",Buffer.from("./../output/TestingOk.png", 'base64'), 'image/png')


})
