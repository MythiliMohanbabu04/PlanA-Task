export const getLoginBtn = () => {
  return cy.get("#login");
};
export const getUserNameInputField = () => {
  return cy.get("#userName");
};
export const getPasswordInputField = () => {
  return cy.get("#password");
};
export const getBookCollectionGrid = () => {
  return cy.get('[class="rt-tr-group"] [class="rt-tr -even"] [class="rt-td"]');
};
export const getLogoutBtn = () => {
  return cy.get("#submit");
};
export const getBackToStoreBtn = () => {
  return cy.get("#addNewRecordButton");
};
export const getAddBookBtn = () => {
  return cy.get(".text-right > #addNewRecordButton");
};
export const getProfileBtn = () => {
  return cy.get(":nth-child(6) > .element-list > .menu-list > #item-3");
};
export const getBookList = () => {
  return cy.get('[class="rt-tr-group"] [class="rt-tr -odd"] [class="rt-td"]');
};
export const getGoToStoreBtn = () => {
  return cy.get("#gotoStore");
};
export const getDeleteAccountBtn = () => {
  return cy.get(".text-center > #submit");
};
export const getDeleteAllBooks = () => {
  return cy.get(".buttonWrap > .text-right > #submit");
};
export const getFooter = () => {
  return cy.get(".modal-footer");
};
export const getCancelBtn = () => {
  return cy.get("#closeSmallModal-cancel");
};
export const getOKBtn = () => {
  return cy.get("#closeSmallModal-ok");
};
export const getEmptyRow = () => {
  return cy.get('[class="rt-noData"]');
};
