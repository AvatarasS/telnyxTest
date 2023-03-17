class SolutionsPage{

    get paginationNextButton() {
      return cy.get('[class*="c-iLTAaE-icNHUuW-css"] svg[aria-describedby*="next"]')
    }

    get currentPageNumber() {
      return cy.get('[class="c-fdESms"] span[aria-label*="Current Page"]')
    }

    get totalPageNumber() {
      return cy.get('[class="c-fdESms"] span[aria-label*="Total pages"]')
    }
      
    checkPaginationNextButton() {
      this.totalPageNumber.invoke('text')
                          .then((text) => {
                            for (let i = 1; i < text; i++) {
                              this.paginationNextButton.click()
                              this.currentPageNumber.should('contain', `${i+1}`)
                              cy.url().should('contain', `/page/${i+1}`)
                            }
      })
      
    }
}
export default SolutionsPage