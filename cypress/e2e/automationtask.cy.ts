///<reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
let bookName: string;
let authorName: string;
import config from "../support/config";
import {
  getLoginBtn,
  getUserNameInputField,
  getPasswordInputField,
  getBookCollectionGrid,
  getLogoutBtn,
  getBackToStoreBtn,
  getAddBookBtn,
  getProfileBtn,
  getBookList,
  getGoToStoreBtn,
  getDeleteAccountBtn,
  getDeleteAllBooks,
  getCancelBtn,
  getOKBtn,
  getEmptyRow,
} from "../pageObjects/webautomation";
const { username, password } = config.LoginCredential;
describe("Web UI Testing", () => {
  before(() => {
    //Test1: Logs in with given credetinals
    cy.viewport("macbook-16");
    cy.visit("/");
    getLoginBtn().click({ force: true });
    getUserNameInputField().type(username);
    getPasswordInputField().type(password);
    getLoginBtn().click();
  });
  it("Automation Task", () => {
    //Test 1: Adds the 4th book from the list and navigates to profile and checks if the same book is present
    getBookCollectionGrid()
      .eq(5)
      .invoke("text")
      .then((text) => {
        bookName = text;
        cy.log(bookName);
        getBookCollectionGrid()
          .eq(6)
          .invoke("text")
          .then((authorText) => {
            authorName = authorText;
            cy.log(authorName);
            cy.contains(bookName).click();
          });
      });
    getLogoutBtn().contains("Log out").should("be.visible");
    getBackToStoreBtn().contains("Back To Book Store").should("be.enabled");
    getAddBookBtn()
      .contains("Add To Your Collection")
      .should("be.enabled")
      .click({ force: true });
    cy.wait(4000);
    getProfileBtn().click();
    getBookList().should(($lis) => {
      expect($lis, "5 items").to.have.length(5);
      expect($lis.eq(1), "second item").to.contain(bookName);
      expect($lis.eq(2), "third item").to.contain(authorName);
    });

    //Test 2: Navigates to the Profile and Deletes all the existing books from the list and Assert if the list of books is empty
    getProfileBtn().click();
    getGoToStoreBtn().contains("Go To Book Store").should("be.visible");
    getDeleteAccountBtn().contains("Delete Account").should("be.visible");
    getDeleteAllBooks()
      .contains("Delete All Books")
      .should("be.enabled")
      .click({ force: true });
    getCancelBtn().contains("Cancel").should("be.visible");
    getOKBtn().contains("OK").should("be.visible").click({ force: true });
    getEmptyRow().contains("No rows found").should("be.visible");
  });
});
