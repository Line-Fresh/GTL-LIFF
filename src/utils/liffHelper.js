const liff = window.liff;
const liffId = process.env.REACT_APP_LINE_LIFF_ID;
let isInit = false;
let profile = {};
let liffInfo = {};

const init = () => {
  liff
  .init({
    liffId
  })
  .then(() => {
    initializeApp();
  })
  .catch((err) => {
      alert('fail to login')
  });
}

const initializeApp = async() => {
  profile = await liff.getProfile() 
  console.log(profile)
}

const getProfile = () => { 
  return profile
}

//   sendMessages(messages) {

//   }

module.exports = {
  init, 
  getProfile
};