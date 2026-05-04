class CompletedSession {

  constructor(page) {

    this.page = page;
  }


clickonCompletedSession() {

this.page.getByText('Charging sessions').click();

}

clickonCompletedSession(){
    this.page.getByText('Completed').click();
}








}

module.exports = { CompletedSession };
