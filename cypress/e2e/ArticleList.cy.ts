describe("Article List", () => {
  it("should render article list correctly", () => {
    cy.visit("http://localhost:5173");
    cy.get(".MuiContainer-root").should("have.length", 1);
    cy.get(".Card-link").each(($card) => {      
      cy.wrap($card).find("img.MuiCardMedia-root.MuiCardMedia-media.MuiCardMedia-img").should("have.length", 1);
    });
  });
});