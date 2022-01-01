import projects from "../../components/project-display/project-data";

// TODO: fix webpack, cant handle png files
describe("Projects Page", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });
  describe("ProjectDisplay", () => {
    it("shows titles for each project", () => {
      cy.get("[data-cy=project-title]").should("have.length", projects.length);
    });
  });
});

export {};
