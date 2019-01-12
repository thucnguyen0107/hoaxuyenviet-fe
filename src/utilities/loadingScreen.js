let showLoading = () => {
  window.$("#spinner").css('display', 'block');
}
let hideLoading = () => {
  window.$("#spinner").fadeOut("slow");
}

const loadingScreen = {
  showLoading,
  hideLoading
}

export default loadingScreen;