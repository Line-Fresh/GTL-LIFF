const liff = window.liff;
const liffId = process.env.REACT_APP_LINE_LIFF_ID;
let isInit = false;
let profile = {};
let liffInfo = {};

class liffHelper {
  init() {
    liff
    .init({
      liffId
    })
    .then(() => {
      liff.login()
      isInit = true
    })
    .catch((err) => {
        alert('fail to login')
    });
  }

  getProfile() {
    if(!profile) profile = liff.getProfile() 
    return profile
  }

//   sendMessages(messages) {

//   }
};
export default new liffHelper();