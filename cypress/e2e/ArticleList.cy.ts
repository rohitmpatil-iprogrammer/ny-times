describe("Article List", () => {
  it("should render article list correctly", () => {
    cy.visit("http://localhost:51730");
    cy.get(".MuiCardMedia-root").should("have.length", 10);
    cy.get(".MuiCardMedia-root").each(($card) => {
      cy.wrap($card).find(".MuiCardMedia-root img").should("have.attr", "src");
    });
  });
});