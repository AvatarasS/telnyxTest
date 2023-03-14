class SolutionsPage{

    get paginationNextButton() {
      return cy.get('[class*="c-iLTAaE-icNHUuW-css"] svg[aria-describedby*="next"]')
    }

    get currentPageNumber() {
      return cy.get('[class="c-fdESms"] span[aria-label*="Current Page"]')
    }
      
    paginationNextButtonClick() {
      let totalPages = 6
      for (let i = 1; i < totalPages; i++) {
        this.paginationNextButton.click()
        this.currentPageNumber.should('contain', `${i+1}`)
        cy.url().should('contain', `/page/${i+1}`)
      }
    }
}
export default SolutionsPage