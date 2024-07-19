describe("ArticleDetail component", () => {
  it("renders article details correctly", () => {
    cy.visit("http://localhost:5173/article/100000009574649");

    // Check if the article image is rendered
    cy.get("img").should("be.visible");

    // Check if the article title is rendered
    cy.get(".MuiTypography-root").should("be.visible");
    cy.get(".MuiTypography-root").should("have.length", 8);
    // Check if the "Read More" link is rendered
    cy.contains("Read More").should("be.visible");
  });

  it("displays error message for invalid article id", () => {
    cy.visit("http://localhost:5173/article/123456789");
    cy.get(".MuiContainer-root").should("have.length", 1);
    // Check if the error message is displayed
    cy.contains(/Error\./i).should("be.visible");
    cy.contains(/Article not found\./i).should("be.visible");
  });
});
