///<reference types="cypress"/>
const APP_HOST = Cypress.env("APP_HOST");
describe("Emissions API Testing", () => {
  let randomProductName: string;
  let firstDate: string;
  let lastDate: string;
  it("Should list of available products & select a random product", () => {
    cy.request({
      method: "GET",
      url: `${APP_HOST}/api/v2/products.json`,
    }).then((response) => {
      const products = response.body;
      expect(products).to.be.an("array").and.have.length.above(0);
      products.forEach((product: any) => {
        expect(product).to.have.property("name").to.be.a("string");
        expect(product).to.have.property("description").to.be.a("string");
        expect(product).to.have.property("product_variable").to.be.a("string");
      });
      const randomProduct = products.find(
        (product: any) => product.name === "methane"
      );
      randomProductName = randomProduct.name;
      expect(randomProduct).to.exist;
    });
  });
  it("Should retrieve data range", () => {
    cy.request({
      method: "GET",
      url: `${APP_HOST}/api/v2/${randomProductName}/data-range.json`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const dataRange = response.body;
      firstDate = dataRange.first.substring(0, 10);
      lastDate = dataRange.last.substring(0, 10);
      expect(dataRange).to.have.property("first").to.be.a("string");
      expect(dataRange).to.have.property("last").to.be.a("string");
    });
  });
  it("Should retrieve statistics and check all the properties of the value object are numbers", () => {
    cy.request({
      method: "GET",
      url: `${APP_HOST}/api/v2/${randomProductName}/statistics.json?
interval=day&begin=${firstDate}&end=${lastDate}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const data = response.body;
      const values = data.flatMap((entry: any) => Object.values(entry.value));
      const areAllValuesNumbers = values.every(
        (value: any) => typeof value === "number"
      );
      expect(areAllValuesNumbers).to.be.true;
    });
  });
  it("Should retrieve statistics and check all the properties of the value object are numbers", () => {
    cy.request({
      method: "GET",
      url: `${APP_HOST}/api/v2/${randomProductName}/statistics.json?
interval=day&begin=${firstDate}&end=${lastDate}`,
    }).then((response) => {
      expect(response.status).to.eq(200);
      const data = response.body;
      const sampleSize = 2; // Adjust the sample size as needed
      const sampledData = Cypress._.sampleSize(data, sampleSize);
      sampledData.forEach((entry) => {
        const valueProperties = Object.values(entry.value);
        valueProperties.forEach((property: any) => {
          expect(property).to.be.a("number");
        });
      });
    });
  });
});
