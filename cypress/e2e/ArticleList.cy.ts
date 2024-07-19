describe("Article List", () => {
  it("should render article list correctly", () => {
    cy.visit("http://localhost:5173");
    cy.get(".MuiContainer-root").should("have.length", 1);
    cy.get(".MuiGrid-root").each(($card) => {
      console.log($card);
      
      cy.wrap($card).find(".MuiCardMedia-root img").should("have.attr", "src");
    });
  });
});