import { skillsData } from "../../src/components/skill/skills-data";
describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Skill Cards", () => {
    it("should render skill cards", () => {
      const skillCardLength = skillsData.length;
      cy.get("[data-cy=skill-card]").should("have.length", skillCardLength);
    });
  });
  describe("Navigation", () => {
    it("should navigate to the projects page", () => {
      cy.get('a[href*="projects"]').click();
      cy.url().should("include", "/projects");
      cy.get("[data-cy=page-heading]").contains("Projects");
    });
    it("should navigate to the contact page", () => {
      cy.get('a[href*="contact"]').click();
      cy.url().should("include", "/contact");
      cy.get("[data-cy=page-heading]").contains("Contact Me");
    });
  });
});

export {};
