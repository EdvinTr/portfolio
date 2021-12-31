import { skillsData } from "../../components/skill/skills-data";

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
      cy.get("h2").contains("Projects");
    });
    it("should navigate to the contact page", () => {
      cy.get('a[href*="contact"]').click();
      cy.url().should("include", "/contact");
      cy.get("h2").contains("Contact Me");
    });
  });
});

export {};
