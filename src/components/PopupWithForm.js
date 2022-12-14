import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._modalForm = this._popupElement.querySelector(".modal__form");
    this._modalFormInputs =
      this._popupElement.querySelectorAll(".modal__form-input");
    this._modalFormButton = this._popupElement.querySelector(
      ".modal__form-button"
    );
  }

  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", this._handleSubmit);
  }

  
  getInputValues() {
    const inputValues = {};
    this._modalFormInputs.forEach(
      (input) => (inputValues[input.name] = input.value)
    );
    return inputValues;
  }
  

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this.getInputValues());
  };

  closeModal() {
    super.closeModal();
    this._modalForm.reset();
  }
}
