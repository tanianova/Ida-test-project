/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/checkInputValue.js":
/*!****************************************!*\
  !*** ./src/modules/checkInputValue.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var checkInputValue = function checkInputValue(_ref) {
  var formSelector = _ref.formSelector,
      submitSelector = _ref.submitSelector;
  var submitButton = document.querySelector(submitSelector);
  var form = document.querySelector(formSelector);

  var addWarning = function addWarning(input) {
    var warningSpan = document.createElement("span");
    warningSpan.classList.add("invalid");
    warningSpan.textContent = "Поле является обязательным";

    if (input.value === "" && !input.classList.contains("invalid-input")) {
      input.classList.add("invalid-input");
      input.after(warningSpan);
    }
  };

  var removeWarning = function removeWarning(input) {
    input.parentElement.removeChild(document.querySelector(".invalid"));
    input.classList.remove("invalid-input");
  };

  form.addEventListener("focusout", function (e) {
    var target = e.target;
    target.required && addWarning(target);
  });
  form.addEventListener("keyup", function (e) {
    var target = e.target;

    if (target.value.trim().length > 0) {
      target.classList.contains("invalid-input") && removeWarning(target);
      form.checkValidity() ? submitButton.disabled = false : submitButton.disabled = true;
    } else if (target.value.trim().length === 0 && target.required) {
      addWarning(target, "Поле является обязательным");
      submitButton.disabled = true;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkInputValue);

/***/ }),

/***/ "./src/modules/createCard.js":
/*!***********************************!*\
  !*** ./src/modules/createCard.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var createCard = function createCard(_ref, cardsContainer) {
  var name = _ref.name,
      description = _ref.description,
      price = _ref.price,
      link = _ref.link;
  var card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("animatedIn");
  card.innerHTML = "\n        <img class=\"card-img\" src=".concat(link, " alt=").concat(name, ">\n        <div class=\"card-info\">\n            <h4 class=\"card-title\">").concat(name, "</h4>\n            <p class=\"card-description\">").concat(description ? description : "Описание отсутствует", "</p>\n            <div class=\"card-price\">").concat(price, "<span>\u0440\u0443\u0431.</span></div>\n        </div>\n        <button class=\"card-delete\"></button>\n    ");
  cardsContainer.appendChild(card);
};

/* harmony default export */ __webpack_exports__["default"] = (createCard);

/***/ }),

/***/ "./src/modules/deleteCard.js":
/*!***********************************!*\
  !*** ./src/modules/deleteCard.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var deleteCard = function deleteCard(_ref) {
  var cardsContainerSelector = _ref.cardsContainerSelector,
      btnDeleteClass = _ref.btnDeleteClass;
  var cardsContainer = document.querySelector(cardsContainerSelector);

  var removeCardFromLocalStorage = function removeCardFromLocalStorage(card) {
    var cards = JSON.parse(localStorage.cards);

    for (var i = 0; i < cards.length; i++) {
      if (cards[i].name === card.children[1].children[0].innerText) {
        cards.splice(i, 1);
      }

      localStorage.cards = JSON.stringify(cards);
    }
  };

  cardsContainer.addEventListener("click", function (e) {
    var target = e.target;

    if (target && target.classList.contains(btnDeleteClass)) {
      target.parentNode.classList.remove("animatedIn");
      target.parentNode.classList.add("animatedOut");
      setTimeout(function () {
        target.parentNode.parentNode.removeChild(target.parentNode);
        removeCardFromLocalStorage(target.parentNode);
      }, 1000);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (deleteCard);

/***/ }),

/***/ "./src/modules/maskPrice.js":
/*!**********************************!*\
  !*** ./src/modules/maskPrice.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var maskPrice = function maskPrice(_ref) {
  var input = _ref.input;
  var inputs = document.querySelectorAll(input);

  var checkNumInputs = function checkNumInputs(e) {
    e.target.value = e.target.value.replace(/\D/, "");
  };

  var createMask = function createMask(e) {
    var mask = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    e.target.value = mask;
  };

  inputs.forEach(function (input) {
    input.addEventListener("input", checkNumInputs);
    input.addEventListener("change", createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (maskPrice);

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var renderCards = function renderCards(_ref) {
  var cardsContainerSelector = _ref.cardsContainerSelector;
  var cardsContainer = document.querySelector(cardsContainerSelector);
  var cards;
  localStorage.getItem("cards") === null ? cards = [] : cards = JSON.parse(localStorage.getItem("cards"));
  cards.forEach(function (_ref2) {
    var name = _ref2.name,
        link = _ref2.link,
        description = _ref2.description,
        price = _ref2.price;
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = "\n          <img class=\"card-img\" src=".concat(link, " alt=").concat(name, ">\n          <div class=\"card-info\">\n              <h4 class=\"card-title\">").concat(name, "</h4>\n              <p class=\"card-description\">").concat(description ? description : "Описание отсутствует", "</p>\n              <div class=\"card-price\">").concat(price, "<span>\u0440\u0443\u0431.</span></div>\n          </div>\n          <button class=\"card-delete\"></button>\n      ");
    cardsContainer.appendChild(card);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (renderCards);

/***/ }),

/***/ "./src/modules/saveCard.js":
/*!*********************************!*\
  !*** ./src/modules/saveCard.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var saveCard = function saveCard(data) {
  var cards;
  localStorage.getItem("cards") === null ? cards = [] : cards = JSON.parse(localStorage.getItem("cards"));
  cards.push(data);
  localStorage.setItem("cards", JSON.stringify(cards));
};

/* harmony default export */ __webpack_exports__["default"] = (saveCard);

/***/ }),

/***/ "./src/modules/sortCards.js":
/*!**********************************!*\
  !*** ./src/modules/sortCards.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sortCards = function sortCards(_ref) {
  var sortBtnSelector = _ref.sortBtnSelector,
      cardsContainerSelector = _ref.cardsContainerSelector;
  var sortBtn = document.querySelector(sortBtnSelector);
  var cardsContainer = document.querySelector(cardsContainerSelector);
  var cards = cardsContainer.children;
  sortBtn.addEventListener("change", sortCards);

  var renderCards = function renderCards(sortedCards) {
    sortedCards.forEach(function (card) {
      cardsContainer.append(card);
    });
  };

  function sortCards(e) {
    switch (e.target.value) {
      case "minPrice":
        return renderCards(_toConsumableArray(cards).sort(function (a, b) {
          return a.querySelector(".card-price").innerText.replace(/[^0-9]/g, "") - b.querySelector(".card-price").innerText.replace(/[^0-9]/g, "");
        }));

      case "maxPrice":
        return renderCards(_toConsumableArray(cards).sort(function (a, b) {
          return b.querySelector(".card-price").innerText.replace(/[^0-9]/g, "") - a.querySelector(".card-price").innerText.replace(/[^0-9]/g, "");
        }));

      case "name":
        return renderCards(_toConsumableArray(cards).sort(function (a, b) {
          return a.querySelector(".card-title").innerText.toLowerCase().localeCompare(b.querySelector(".card-title").innerText.toLowerCase());
        }));

      case "": //тут наверно нужно добавить сортировку по времени  добавления, еще не придумала, как реализовать
      // console.log([...cards]);

    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sortCards);

/***/ }),

/***/ "./src/modules/submitForm.js":
/*!***********************************!*\
  !*** ./src/modules/submitForm.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCard */ "./src/modules/createCard.js");
/* harmony import */ var _saveCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saveCard */ "./src/modules/saveCard.js");



var submitForm = function submitForm(_ref) {
  var formSelector = _ref.formSelector,
      cardsContainerSelector = _ref.cardsContainerSelector,
      inputsSelector = _ref.inputsSelector;
  var form = document.querySelector(formSelector);
  var inputs = document.querySelectorAll(inputsSelector);
  var cardsContainer = document.querySelector(cardsContainerSelector);

  var serializeForm = function serializeForm() {
    var data = new FormData(form);
    return Object.fromEntries(data);
  };

  var clearInputs = function clearInputs() {
    inputs.forEach(function (item) {
      item.value = "";
    });
  };

  var msgSuccess = function msgSuccess() {
    var statusMessage = document.createElement("p");
    statusMessage.classList.add("submit-message");
    statusMessage.innerText = "Товар успешно добавлен";
    form.appendChild(statusMessage);
    setTimeout(function () {
      statusMessage.remove();
    }, 2000);
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    msgSuccess();
    var data = serializeForm();
    (0,_saveCard__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    (0,_createCard__WEBPACK_IMPORTED_MODULE_0__["default"])(data, cardsContainer);
    clearInputs();
  };

  form.addEventListener("submit", handleFormSubmit);
};

/* harmony default export */ __webpack_exports__["default"] = (submitForm);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/SourceSansPro-Regular.ttf */ "./src/fonts/SourceSansPro-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/btn-delete.svg */ "./src/images/btn-delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Source Sans Pro;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n@font-face {\n  font-family: Inter;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\nhtml {\n  font-size: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n}\n\nh4 {\n  font: 600 20px/24px Source Sans Pro, sans-serif;\n  margin-bottom: 16px;\n}\n\np {\n  font: 16px/20px Source Sans Pro, sans-serif;\n}\n\nbody {\n  min-width: 320px;\n  line-height: 1.3;\n  font-family: Source Sans Pro;\n  color: #3F3F3F;\n  background-color: #E5E5E5;\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nselect {\n  border: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: inherit;\n  font: inherit;\n}\n\nsection {\n  padding: 32px 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.wrapper {\n  width: calc(100% - 64px);\n  max-width: 1440px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.button {\n  position: relative;\n  display: block;\n  padding: 10px 16px;\n  color: #fff;\n  border-radius: 10px;\n  text-align: center;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n  -webkit-transition: 0.3s -webkit-transform;\n  transition: 0.3s -webkit-transform;\n  transition: 0.3s transform;\n  transition: 0.3s transform, 0.3s -webkit-transform;\n  border: none;\n  background-color: #7BAE73;\n  cursor: pointer;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.button:hover {\n  color: #3F3F3F;\n}\n.button:disabled {\n  background-color: #EEEEEE;\n  color: #B4B4B4;\n  cursor: unset;\n}\n\n.animatedIn {\n  -webkit-animation: 2s fadeIn ease-in;\n          animation: 2s fadeIn ease-in;\n}\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animatedOut {\n  -webkit-animation: 2s fadeOut ease-out;\n          animation: 2s fadeOut ease-out;\n}\n\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.page-top {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-top__title {\n  font: 600 28px/35px Source Sans Pro, sans-serif;\n  letter-spacing: 0.3px;\n}\n.page-top .select-button {\n  width: 121px;\n  background: #FFFEFB;\n  color: #B4B4B4;\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  padding-left: 4px;\n}\n.page-top .select-button:hover {\n  color: #3F3F3F;\n}\n.page-top .select:hover::after {\n  border-color: #3F3F3F;\n}\n.page-top .select:after {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-left: 1px solid #B4B4B4;\n  border-bottom: 1px solid #B4B4B4;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.page-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  grid-gap: 16px;\n  gap: 16px;\n}\n.page-content__form {\n  width: 24.1%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #FFFEFB;\n  -webkit-box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n          box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n  padding: 24px;\n}\n.page-content__form .label {\n  position: relative;\n  color: #49485E;\n  font: 10px/13px Source Sans Pro, sans-serif;\n  letter-spacing: -0.02em;\n  margin-bottom: 4px;\n}\n.page-content__form .label.required:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  background-color: #FF8484;\n  width: 4px;\n  height: 4px;\n}\n.page-content__form .input {\n  -webkit-box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  margin-bottom: 16px;\n  padding: 10px 16px 11px;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input::-webkit-input-placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input::-moz-placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input:-ms-input-placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input::-ms-input-placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input::placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .textarea {\n  height: 108px;\n}\n.page-content__form .button {\n  font: 600 12px/15px Inter, sans-serif;\n  letter-spacing: -0.02em;\n  margin-top: 8px;\n  padding-bottom: 11px;\n}\n.page-content__form .invalid {\n  font: 400 8px/10px Source Sans Pro, sans-serif;\n  color: #FF8484;\n  letter-spacing: -0.02em;\n  margin-bottom: 2px;\n}\n.page-content__form .invalid-input {\n  border: 1px solid #FF8484;\n  margin-bottom: 4px;\n  padding: 9px 16px 10px;\n}\n.page-content__form .submit-message {\n  text-align: center;\n  color: #7BAE73;\n  font-size: 12px;\n  margin-top: 10px;\n}\n.page-content__cards-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 16px;\n  gap: 16px;\n  width: calc(75.9% - 16px);\n}\n.page-content__cards-container .card {\n  position: relative;\n  width: 100%;\n  background-color: #FFFEFB;\n  cursor: pointer;\n  -webkit-box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n          box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n}\n.page-content__cards-container .card-img {\n  width: 100%;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0px 0px;\n}\n.page-content__cards-container .card-title {\n  letter-spacing: 0.2px;\n}\n.page-content__cards-container .card-info {\n  padding: 12px 16px 24px;\n}\n.page-content__cards-container .card-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  margin-bottom: 16px;\n}\n.page-content__cards-container .card-price {\n  font: 600 24px/30px Source Sans Pro, sans-serif;\n  margin-top: 32px;\n}\n.page-content__cards-container .card-price span {\n  padding-left: 7px;\n}\n.page-content__cards-container .card-delete {\n  display: none;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  background-color: #FF8484;\n  border: none;\n  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.page-content__cards-container .card:hover .card-delete {\n  display: block;\n}\n\n@media screen and (max-width: 1100px) {\n  .page-content__cards-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 768px) {\n  .wrapper {\n    width: calc(100% - 30px);\n  }\n\n  .page-content__cards-container {\n    width: 50%;\n    grid-template-columns: 1fr;\n  }\n  .page-content__form {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-top__title {\n    font-size: 18px;\n  }\n\n  .page-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .page-content__cards-container {\n    width: 100%;\n  }\n  .page-content__cards-container .card-description {\n    font-size: 14px;\n  }\n  .page-content__form {\n    width: 100%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_globals.scss","webpack://./src/styles/_variables.scss","webpack://./src/styles/_top.scss","webpack://./src/styles/_content.scss","webpack://./src/styles/_media.scss"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: Source Sans Pro;\n    src: url('../fonts/SourceSansPro-Regular.ttf');\n}\n@font-face {\n    font-family: Inter;\n    src: url('../fonts/Inter-VariableFont_slnt\\,wght.ttf');\n}\n","@font-face {\n  font-family: Source Sans Pro;\n  src: url(\"../fonts/SourceSansPro-Regular.ttf\");\n}\n@font-face {\n  font-family: Inter;\n  src: url(\"../fonts/Inter-VariableFont_slnt,wght.ttf\");\n}\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n}\n\nh4 {\n  font: 600 20px/24px Source Sans Pro, sans-serif;\n  margin-bottom: 16px;\n}\n\np {\n  font: 16px/20px Source Sans Pro, sans-serif;\n}\n\nbody {\n  min-width: 320px;\n  line-height: 1.3;\n  font-family: Source Sans Pro;\n  color: #3F3F3F;\n  background-color: #E5E5E5;\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nselect {\n  border: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  color: inherit;\n  font: inherit;\n}\n\nsection {\n  padding: 32px 0;\n}\n\ninput,\ntextarea {\n  border: none;\n}\n\ntextarea {\n  resize: none;\n}\n\n.wrapper {\n  width: calc(100% - 64px);\n  max-width: 1440px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.button {\n  position: relative;\n  display: block;\n  padding: 10px 16px;\n  color: #fff;\n  border-radius: 10px;\n  text-align: center;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n  transition: 0.3s transform;\n  border: none;\n  background-color: #7BAE73;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.button:hover {\n  color: #3F3F3F;\n}\n.button:disabled {\n  background-color: #EEEEEE;\n  color: #B4B4B4;\n  cursor: unset;\n}\n\n.animatedIn {\n  animation: 2s fadeIn ease-in;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.animatedOut {\n  animation: 2s fadeOut ease-out;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.page-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.page-top__title {\n  font: 600 28px/35px Source Sans Pro, sans-serif;\n  letter-spacing: 0.3px;\n}\n.page-top .select-button {\n  width: 121px;\n  background: #FFFEFB;\n  color: #B4B4B4;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  padding-left: 4px;\n}\n.page-top .select-button:hover {\n  color: #3F3F3F;\n}\n.page-top .select:hover::after {\n  border-color: #3F3F3F;\n}\n.page-top .select:after {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 5px;\n  border-left: 1px solid #B4B4B4;\n  border-bottom: 1px solid #B4B4B4;\n  transform: rotate(-45deg);\n}\n\n.page-content {\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n}\n.page-content__form {\n  width: 24.1%;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFEFB;\n  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n  padding: 24px;\n}\n.page-content__form .label {\n  position: relative;\n  color: #49485E;\n  font: 10px/13px Source Sans Pro, sans-serif;\n  letter-spacing: -0.02em;\n  margin-bottom: 4px;\n}\n.page-content__form .label.required:after {\n  position: absolute;\n  content: \"\";\n  border-radius: 50%;\n  background-color: #FF8484;\n  width: 4px;\n  height: 4px;\n}\n.page-content__form .input {\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  margin-bottom: 16px;\n  padding: 10px 16px 11px;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .input::placeholder {\n  color: #B4B4B4;\n  font: 400 12px/15px Source Sans Pro, sans-serif;\n}\n.page-content__form .textarea {\n  height: 108px;\n}\n.page-content__form .button {\n  font: 600 12px/15px Inter, sans-serif;\n  letter-spacing: -0.02em;\n  margin-top: 8px;\n  padding-bottom: 11px;\n}\n.page-content__form .invalid {\n  font: 400 8px/10px Source Sans Pro, sans-serif;\n  color: #FF8484;\n  letter-spacing: -0.02em;\n  margin-bottom: 2px;\n}\n.page-content__form .invalid-input {\n  border: 1px solid #FF8484;\n  margin-bottom: 4px;\n  padding: 9px 16px 10px;\n}\n.page-content__form .submit-message {\n  text-align: center;\n  color: #7BAE73;\n  font-size: 12px;\n  margin-top: 10px;\n}\n.page-content__cards-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n  width: calc(75.9% - 16px);\n}\n.page-content__cards-container .card {\n  position: relative;\n  width: 100%;\n  background-color: #FFFEFB;\n  cursor: pointer;\n  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n  border-radius: 4px;\n}\n.page-content__cards-container .card-img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 4px 4px 0px 0px;\n}\n.page-content__cards-container .card-title {\n  letter-spacing: 0.2px;\n}\n.page-content__cards-container .card-info {\n  padding: 12px 16px 24px;\n}\n.page-content__cards-container .card-description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  margin-bottom: 16px;\n}\n.page-content__cards-container .card-price {\n  font: 600 24px/30px Source Sans Pro, sans-serif;\n  margin-top: 32px;\n}\n.page-content__cards-container .card-price span {\n  padding-left: 7px;\n}\n.page-content__cards-container .card-delete {\n  display: none;\n  position: absolute;\n  top: -8px;\n  right: -8px;\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  background-color: #FF8484;\n  border: none;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  background-image: url(\"../images/btn-delete.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.page-content__cards-container .card:hover .card-delete {\n  display: block;\n}\n\n@media screen and (max-width: 1100px) {\n  .page-content__cards-container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media screen and (max-width: 768px) {\n  .wrapper {\n    width: calc(100% - 30px);\n  }\n\n  .page-content__cards-container {\n    width: 50%;\n    grid-template-columns: 1fr;\n  }\n  .page-content__form {\n    width: 50%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .page-top__title {\n    font-size: 18px;\n  }\n\n  .page-content {\n    flex-direction: column;\n  }\n  .page-content__cards-container {\n    width: 100%;\n  }\n  .page-content__cards-container .card-description {\n    font-size: 14px;\n  }\n  .page-content__form {\n    width: 100%;\n  }\n}","html {\n    font-size: 100%;\n    box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n    box-sizing: inherit\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n    margin: 0;\n    padding: 0;\n}\n\nh4 {\n    font: 600 20px/24px Source Sans Pro, sans-serif;\n    margin-bottom: 16px;\n}\n\np {\n    font: 16px/20px Source Sans Pro, sans-serif;\n\n}\n\nbody {\n    min-width: 320px;\n    line-height: 1.3;\n    font-family: Source Sans Pro;\n    color: $font-main;\n    background-color: $background;\n    margin: 0;\n    padding: 0;\n\n}\n\na,\na:visited,\na:hover {\n    color: inherit;\n    text-decoration: none;\n}\n\nselect {\n    border: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    cursor: pointer;\n    color: inherit;\n    font: inherit;\n}\n\nsection {\n    padding: 32px 0;\n}\n\ninput,\ntextarea {\n    border: none;\n}\n\ntextarea {\n    resize: none;\n}\n\n.wrapper {\n    width: calc(100% - 64px);\n    max-width: 1440px;\n    position: relative;\n    margin: 0 auto;\n}\n\n.button {\n    position: relative;\n    display: block;\n    padding: 10px 16px;\n    color: #fff;\n    border-radius: 10px;\n    text-align: center;\n    font: 400 12px/15px Source Sans Pro, sans-serif;\n    transition: 0.3s transform;\n    border: none;\n    background-color: $success;\n    cursor: pointer;\n    transition: all .2s;\n\n    &:hover {\n        color: $font-main;\n    }\n\n    &:disabled {\n        background-color: $light-grey;\n        color: $dark-grey;\n        cursor: unset\n    }\n}\n\n.animatedIn {\n    animation: 2s fadeIn ease-in;\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n\n    to {\n        opacity: 1;\n    }\n}\n\n.animatedOut {\n    animation: 2s fadeOut ease-out;\n}\n\n@keyframes fadeOut {\n    from {\n        opacity: 1;\n    }\n\n    to {\n        opacity: 0;\n    }\n}","$font-main: #3F3F3F;\n$font-secondary:#49485E;\n$warning:#FF8484;\n$light-grey:#EEEEEE;\n$dark-grey:#B4B4B4;\n$white:#FFFEFB;\n$success:#7BAE73;\n$background:#E5E5E5;\n",".page-top {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 16px;\n\n    &__title {\n        font: 600 28px/35px Source Sans Pro, sans-serif;\n        letter-spacing: 0.3px;\n    }\n\n\n\n    .select {\n        &-button {\n            width: 121px;\n            background: $white;\n            color: $dark-grey;\n            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n            border-radius: 4px;\n            padding-left: 4px;\n            &:hover {\n                color: $font-main;\n            }\n        }\n\n        &:hover::after {\n            border-color: $font-main;\n        }\n\n\n        &:after {\n            position: absolute;\n            right: 15px;\n            top: 15px;\n            bottom: 0;\n            content: '';\n            display: block;\n            width: 5px;\n            height: 5px;\n            border-left: 1px solid $dark-grey;\n            border-bottom: 1px solid $dark-grey;\n            transform: rotate(-45deg);\n\n\n        }\n    }\n}",".page-content {\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n\n    &__form {\n        width: 24.1%;\n        display: flex;\n        flex-direction: column;\n        background-color: $white;\n        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n        border-radius: 4px;\n        padding: 24px;\n\n        .label {\n            position: relative;\n            color: $font-secondary;\n            font: 10px/13px Source Sans Pro, sans-serif;\n            letter-spacing: -0.02em;\n            margin-bottom: 4px;\n\n            &.required:after {\n                position: absolute;\n                content: '';\n                border-radius: 50%;\n                background-color: $warning;\n                width: 4px;\n                height: 4px;\n            }\n        }\n\n        .input {\n            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n            border-radius: 4px;\n            margin-bottom: 16px;\n            padding: 10px 16px 11px;\n            font: 400 12px/15px Source Sans Pro, sans-serif;\n\n\n            &::placeholder {\n                color: $dark-grey;\n                font: 400 12px/15px Source Sans Pro, sans-serif;\n            }\n        }\n\n        .textarea {\n            height: 108px;\n        }\n\n        .button {\n            font: 600 12px/15px Inter, sans-serif;\n            letter-spacing: -0.02em;\n            margin-top: 8px;\n            padding-bottom: 11px;\n        }\n\n        .invalid {\n            font: 400 8px/10px Source Sans Pro, sans-serif;\n            color: $warning;\n            letter-spacing: -0.02em;\n            margin-bottom: 2px;\n\n            &-input {\n                border: 1px solid $warning;\n                margin-bottom: 4px;\n                padding: 9px 16px 10px\n            }\n        }\n\n        .submit-message {\n            text-align: center;\n            color: $success;\n            font-size: 12px;\n            margin-top: 10px;\n        }\n    }\n\n    &__cards-container {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        gap: 16px;\n        width: calc(75.9% - 16px);\n\n\n        .card {\n            position: relative;\n            width: 100%;\n            background-color: $white;\n            cursor: pointer;\n            box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);\n            border-radius: 4px;\n\n            &-img {\n                width: 100%;\n                height: 200px;\n                object-fit: cover;\n                border-radius: 4px 4px 0px 0px;\n            }\n\n            &-title {\n                letter-spacing: 0.2px;\n            }\n\n            &-info {\n                padding: 12px 16px 24px;\n            }\n\n            &-description {\n                overflow: hidden;\n                text-overflow: ellipsis;\n                display: -webkit-box;\n                -webkit-line-clamp: 5;\n                -webkit-box-orient: vertical;\n                margin-bottom: 16px;\n            }\n\n            &-price {\n                font: 600 24px/30px Source Sans Pro, sans-serif;\n                margin-top: 32px;\n\n                span {\n                    padding-left: 7px;\n                }\n            }\n\n            &-delete {\n                display: none;\n                position: absolute;\n                top: -8px;\n                right: -8px;\n                width: 32px;\n                height: 32px;\n                cursor: pointer;\n                background-color: $warning;\n                border: none;\n                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n                border-radius: 10px;\n                background-image: url('../images/btn-delete.svg');\n                background-repeat: no-repeat;\n                background-position: center;\n\n            }\n\n            &:hover .card-delete {\n                display: block;\n            }\n        }\n    }\n}","@media screen and(max-width:1100px) {\n    .page-content__cards-container {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media screen and(max-width:768px) {\n    .wrapper{\n        width: calc(100% - 30px);\n    }\n\n    .page-content {\n        &__cards-container {\n            width: 50%;\n            grid-template-columns: 1fr;\n        }\n\n        &__form {\n            width: 50%;\n        }\n    }\n}\n@media screen and(max-width:600px) {\n    .page-top__title{\n        font-size: 18px;\n    }\n    .page-content{\n        flex-direction: column;\n        &__cards-container {\n            width: 100%;\n             .card-description{\n                 font-size: 14px;\n             }\n        }\n\n        &__form {\n            width: 100%;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b4c30855aff392d7e8dc.ttf";

/***/ }),

/***/ "./src/fonts/SourceSansPro-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/SourceSansPro-Regular.ttf ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/ed3e1a0f0cbd41e2d920.ttf";

/***/ }),

/***/ "./src/images/btn-delete.svg":
/*!***********************************!*\
  !*** ./src/images/btn-delete.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/b15b3d7db34508dedbbc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_maskPrice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/maskPrice */ "./src/modules/maskPrice.js");
/* harmony import */ var _modules_checkInputValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/checkInputValue */ "./src/modules/checkInputValue.js");
/* harmony import */ var _modules_submitForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/submitForm */ "./src/modules/submitForm.js");
/* harmony import */ var _modules_deleteCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteCard */ "./src/modules/deleteCard.js");
/* harmony import */ var _modules_sortCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sortCards */ "./src/modules/sortCards.js");
/* harmony import */ var _modules_renderCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/renderCards */ "./src/modules/renderCards.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");







window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  (0,_modules_maskPrice__WEBPACK_IMPORTED_MODULE_0__["default"])({
    input: "[name=price]"
  });
  (0,_modules_checkInputValue__WEBPACK_IMPORTED_MODULE_1__["default"])({
    formSelector: ".page-content__form",
    submitSelector: ".page-content__form .button"
  });
  (0,_modules_submitForm__WEBPACK_IMPORTED_MODULE_2__["default"])({
    formSelector: ".page-content__form",
    cardsContainerSelector: ".page-content__cards-container",
    inputsSelector: ".page-content__form .input"
  });
  (0,_modules_renderCards__WEBPACK_IMPORTED_MODULE_5__["default"])({
    cardsContainerSelector: ".page-content__cards-container"
  });
  (0,_modules_deleteCard__WEBPACK_IMPORTED_MODULE_3__["default"])({
    cardsContainerSelector: ".page-content__cards-container",
    btnDeleteClass: "card-delete"
  });
  (0,_modules_sortCards__WEBPACK_IMPORTED_MODULE_4__["default"])({
    sortBtnSelector: ".select-button",
    cardsContainerSelector: ".page-content__cards-container"
  });
});
}();
/******/ })()
;
//# sourceMappingURL=scripts.js.map