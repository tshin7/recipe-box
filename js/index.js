"use strict";

var ModalRecipeNameTextArea = React.createClass({
  displayName: "ModalRecipeNameTextArea",

  handleChange: function handleChange(event) {
    this.props.nameTextAreaChanged(event);
  },

  render: function render() {

    return React.createElement("input", {
      id: "modalNameText",
      type: "text",
      placeholder: "Recipe Name",
      value: this.props.nameTextAreaContents,
      onChange: this.handleChange });
  }
});

var ModalIngredientsTextArea = React.createClass({
  displayName: "ModalIngredientsTextArea",

  handleChange: function handleChange(event) {
    this.props.ingredTextAreaChanged(event);
  },

  render: function render() {

    return React.createElement("textarea", {
      id: "modalIngredientsText",
      rows: "3",
      cols: "30",
      placeholder: "Enter ingredients separated by commmas.",
      value: this.props.ingredientsTextAreaContents,
      onChange: this.handleChange });
  }
});

var ModalAddButton = React.createClass({
  displayName: "ModalAddButton",

  handleModalAddButton: function handleModalAddButton() {
    this.props.modalAddButtonClicked();
  },

  render: function render() {

    return React.createElement("input", {
      id: "modalAddButton",
      type: "button",
      onClick: this.handleModalAddButton,
      value: "Add" });
  }
});

var ModalEditButton = React.createClass({
  displayName: "ModalEditButton",

  handleModalEditButton: function handleModalEditButton() {
    this.props.modalEditButtonClicked();
  },
  render: function render() {

    return React.createElement("input", {
      id: "modalEditButton",
      type: "button",
      onClick: this.handleModalEditButton,
      value: "Edit" });
  }
});

var ModalCancelButton = React.createClass({
  displayName: "ModalCancelButton",

  handleCancelRecipe: function handleCancelRecipe() {
    this.props.cancelButtonClicked();
  },

  render: function render() {

    return React.createElement("input", {
      id: "modalCancelButton",
      type: "button",
      onClick: this.handleCancelRecipe,
      value: "Cancel" });
  }
});

var ModalXButton = React.createClass({
  displayName: "ModalXButton",

  handleXButton: function handleXButton() {
    this.props.xButtonClicked();
  },

  render: function render() {

    return React.createElement("input", {
      className: "xButton",
      type: "button",
      onClick: this.handleXButton,
      value: "x" });
  }
});

var AddRecipeModalContent = React.createClass({
  displayName: "AddRecipeModalContent",

  render: function render() {

    return React.createElement(
      "div",
      { className: "modal-content" },
      React.createElement(ModalXButton, {
        xButtonClicked: this.props.xButtonClicked }),
      React.createElement(
        "h2",
        null,
        "Add Recipe"
      ),
      React.createElement(
        "h3",
        { className: "modalRecipeTitleText" },
        "Recipe Name"
      ),
      React.createElement(ModalRecipeNameTextArea, {
        nameTextAreaContents: this.props.nameTextAreaContents,
        nameTextAreaChanged: this.props.nameTextAreaChanged }),
      React.createElement(
        "h3",
        { className: "modalIngredientsTitleText" },
        "Ingredients"
      ),
      React.createElement(ModalIngredientsTextArea, {
        ingredientsTextAreaContents: this.props.ingredientsTextAreaContents,
        ingredTextAreaChanged: this.props.ingredTextAreaChanged }),
      React.createElement(
        "div",
        { className: "modalButtons" },
        React.createElement(ModalAddButton, { modalAddButtonClicked: this.props.modalAddButtonClicked }),
        React.createElement(ModalCancelButton, {
          cancelButtonClicked: this.props.cancelButtonClicked })
      )
    );
  }
});

var EditRecipeModalContent = React.createClass({
  displayName: "EditRecipeModalContent",

  render: function render() {

    return React.createElement(
      "div",
      { className: "modal-content" },
      React.createElement(ModalXButton, {
        xButtonClicked: this.props.xButtonClicked }),
      React.createElement(
        "h2",
        null,
        "Edit Recipe"
      ),
      React.createElement(
        "h3",
        { className: "modalRecipeTitleText" },
        "Recipe"
      ),
      React.createElement(ModalRecipeNameTextArea, {
        nameTextAreaContents: this.props.nameTextAreaContents,
        nameTextAreaChanged: this.props.nameTextAreaChanged }),
      React.createElement(
        "h3",
        { className: "modalIngredientsTitleText" },
        "Ingredients"
      ),
      React.createElement(ModalIngredientsTextArea, {
        ingredientsTextAreaContents: this.props.ingredientsTextAreaContents,
        ingredTextAreaChanged: this.props.ingredTextAreaChanged }),
      React.createElement(
        "div",
        { className: "modalButtons" },
        React.createElement(ModalEditButton, { modalEditButtonClicked: this.props.modalEditButtonClicked }),
        React.createElement(ModalCancelButton, {
          cancelButtonClicked: this.props.cancelButtonClicked })
      )
    );
  }
});

var ModalBackground = React.createClass({
  displayName: "ModalBackground",

  render: function render() {
    var addOrEditModal = this.props.addOrEditModal;

    if (addOrEditModal === "add") {
      return React.createElement(
        "div",
        { className: "modal", style: this.props.modalStatus },
        React.createElement(AddRecipeModalContent, {
          modalAddButtonClicked: this.props.modalAddButtonClicked,
          xButtonClicked: this.props.xButtonClicked,
          cancelButtonClicked: this.props.cancelButtonClicked,
          ingredientsTextAreaContents: this.props.ingredientsTextAreaContents,
          ingredTextAreaChanged: this.props.ingredTextAreaChanged,
          nameTextAreaContents: this.props.nameTextAreaContents,
          nameTextAreaChanged: this.props.nameTextAreaChanged })
      );
    } else if (addOrEditModal === "edit") {
      return React.createElement(
        "div",
        { className: "modal", style: this.props.modalStatus },
        React.createElement(EditRecipeModalContent, {
          modalEditButtonClicked: this.props.modalEditButtonClicked,
          xButtonClicked: this.props.xButtonClicked,
          cancelButtonClicked: this.props.cancelButtonClicked,
          ingredientsTextAreaContents: this.props.ingredientsTextAreaContents,
          ingredTextAreaChanged: this.props.ingredTextAreaChanged,
          nameTextAreaContents: this.props.nameTextAreaContents,
          nameTextAreaChanged: this.props.nameTextAreaChanged })
      );
    }
  }
});

var IndividualRecipeButton = React.createClass({
  displayName: "IndividualRecipeButton",

  handleIndivRecButtonClicked: function handleIndivRecButtonClicked() {
    var index = this.props.index;
    this.props.indivRecipeButtonClicked(index);
  },

  render: function render() {
    var recipeName = this.props.name;

    return React.createElement(
      "div",
      { className: "recipeButtonsDiv" },
      React.createElement("input", {
        className: "recipeButtons",
        type: "button",
        onClick: this.handleIndivRecButtonClicked,
        value: recipeName })
    );
  }
});

var IndividualIngredient = React.createClass({
  displayName: "IndividualIngredient",

  render: function render() {
    var ingredientName = this.props.ingredientName;
    return React.createElement(
      "div",
      { "class": "cell" },
      ingredientName
    );
  }
});

var IngredientList = React.createClass({
  displayName: "IngredientList",

  render: function render() {
    var ingredientsArr = this.props.ingredients;
    var ingredientsWithHtml = [];
    for (var i = 0; i < ingredientsArr.length; i++) {
      ingredientsWithHtml.push(React.createElement(IndividualIngredient, {
        ingredientName: ingredientsArr[i],
        key: i }));
    }

    return React.createElement(
      "div",
      null,
      ingredientsWithHtml
    );
  }
});

var DeleteButton = React.createClass({
  displayName: "DeleteButton",

  handleDeleteButton: function handleDeleteButton() {
    var index = this.props.index;
    this.props.deleteButtonClicked(index);
  },

  render: function render() {

    return React.createElement("input", {
      className: "deleteButton",
      type: "button",
      onClick: this.handleDeleteButton,
      value: "Delete" });
  }
});

var EditButton = React.createClass({
  displayName: "EditButton",

  handleEditRecipe: function handleEditRecipe() {
    var ind = this.props.index;
    this.props.editRecipeClicked(ind);
  },

  render: function render() {

    return React.createElement("input", {
      className: "editButton",
      type: "button",
      onClick: this.handleEditRecipe,
      value: "Edit" });
  }
});

var RecipeWithTitleAndButtons = React.createClass({
  displayName: "RecipeWithTitleAndButtons",

  render: function render() {
    var name = this.props.data.name;
    var ingredients = this.props.data.ingredients;
    var idName = "recipeDiv" + this.props.index;
    return React.createElement(
      "div",
      { className: "individualRecipeFullDiv" },
      React.createElement(
        "div",
        { className: "individualRecipeTitleDiv" },
        React.createElement(IndividualRecipeButton, {
          name: name,
          index: this.props.index,
          indivRecipeButtonClicked: this.props.indivRecipeButtonClicked })
      ),
      React.createElement(
        "div",
        {
          className: this.props.hideOrNot ? 'hide' : 'nohide',
          id: idName },
        React.createElement(
          "h3",
          { id: "ingredientsText" },
          "Ingredients"
        ),
        React.createElement(IngredientList, { ingredients: ingredients }),
        React.createElement(DeleteButton, {
          index: this.props.index,
          deleteButtonClicked: this.props.deleteButtonClicked }),
        React.createElement(EditButton, {
          editRecipeClicked: this.props.editRecipeClicked,
          index: this.props.index })
      )
    );
  }
});

var AddRecipeButton = React.createClass({
  displayName: "AddRecipeButton",

  handleAddRecipe: function handleAddRecipe() {
    this.props.addRecipeClicked();
  },

  render: function render() {

    return React.createElement("input", {
      id: "addRecipeButton",
      type: "button",
      onClick: this.handleAddRecipe,
      value: "Add Recipe" });
  }
});

var FullRecipeBox = React.createClass({
  displayName: "FullRecipeBox",

  getInitialState: function getInitialState() {

    var defaultData = [{
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
      name: "Recipe1"
    }, {
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
      name: "Recipe2"
    }, {
      ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
      name: "Recipe3"
    }];

    // Use this to delete all recipes and clear the local storage
    // localStorage.setItem('_instantMizu_recipes', null);
    var localData = JSON.parse(localStorage.getItem('_instantMizu_recipes'));
    if (localData === null || localData.length === 0) {
      console.log("adsf");
      localStorage.setItem('_instantMizu_recipes', JSON.stringify(defaultData));
      console.log(localStorage.getItem('_instantMizu_recipes'));
    }

    localData = JSON.parse(localStorage.getItem('_instantMizu_recipes'));

    var hiddenArr = [];
    for (var i = 0; i < Object.keys(localData).length; i++) {
      hiddenArr.push(true);
    }

    return {
      index: 0,
      addOrEditModal: "add",
      nameTextAreaContents: "",
      ingredientsTextAreaContents: "",
      modalStatus: { display: "none" },
      data: localData,
      hiddenStatus: hiddenArr
    };
  },

  componentWillMount: function componentWillMount() {
    document.addEventListener("keydown", this.handleEscapeKey, false);
  },

  componentWillUnmount: function componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscapeKey, false);
  },

  addRecipeClicked: function addRecipeClicked() {
    this.setState({
      addOrEditModal: "add",
      modalStatus: { display: "block" },
      nameTextAreaContents: "",
      ingredientsTextAreaContents: ""
    });
  },

  editRecipeClicked: function editRecipeClicked(ind) {
    var name = this.state.data[ind].name;
    var ingredients = this.state.data[ind].ingredients.join(", ");
    this.setState({
      index: ind,
      addOrEditModal: "edit",
      modalStatus: { display: "block" },
      nameTextAreaContents: name,
      ingredientsTextAreaContents: ingredients
    });
  },

  xButtonClicked: function xButtonClicked() {
    this.setState({
      modalStatus: { display: "none" }
    });
  },

  cancelButtonClicked: function cancelButtonClicked() {
    this.setState({
      modalStatus: { display: "none" }
    });
  },

  modalAddButtonClicked: function modalAddButtonClicked() {
    var newRecipe = {};
    newRecipe.name = this.state.nameTextAreaContents;
    var re = /\s*,\s*/;
    newRecipe.ingredients = this.state.ingredientsTextAreaContents.split(re);
    var recipeList = this.state.data;
    recipeList.push(newRecipe);
    // console.log(recipeList);
    localStorage.setItem('_instantMizu_recipes', JSON.stringify(recipeList));

    var hiddenStatusArr = this.state.hiddenStatus;
    hiddenStatusArr.push(true);

    this.setState({
      modalStatus: { display: "none" },
      data: recipeList,
      hiddenStatus: hiddenStatusArr
    });
  },

  modalEditButtonClicked: function modalEditButtonClicked() {
    var index = this.state.index;
    var newRecipe = {};
    newRecipe.name = this.state.nameTextAreaContents;
    var re = /\s*,\s*/;
    newRecipe.ingredients = this.state.ingredientsTextAreaContents.split(re);
    var recipeList = this.state.data;
    recipeList[index] = newRecipe;
    localStorage.setItem('_instantMizu_recipes', JSON.stringify(recipeList));

    this.setState({
      modalStatus: { display: "none" },
      data: recipeList
    });
  },

  deleteButtonClicked: function deleteButtonClicked(index) {
    var updatedData = this.state.data;
    updatedData.splice(index, 1);
    localStorage.setItem('_instantMizu_recipes', JSON.stringify(updatedData));

    var hiddenStatusArr = this.state.hiddenStatus;
    for (var i = 0; i < hiddenStatusArr.length; i++) {
      hiddenStatusArr[i] = true;
    }

    this.setState({
      data: updatedData,
      hiddenStatus: hiddenStatusArr
    });
  },

  nameTextAreaChanged: function nameTextAreaChanged(event) {
    this.setState({
      nameTextAreaContents: event.target.value
    });
  },

  ingredTextAreaChanged: function ingredTextAreaChanged(event) {
    this.setState({
      ingredientsTextAreaContents: event.target.value
    });
  },

  indivRecipeButtonClicked: function indivRecipeButtonClicked(index) {
    var hiddenStatusArr = this.state.hiddenStatus;
    if (hiddenStatusArr[index] === false) {
      hiddenStatusArr[index] = true;
    } else {
      for (var i = 0; i < hiddenStatusArr.length; i++) {
        if (i === index) {
          hiddenStatusArr[i] = false;
        } else {
          hiddenStatusArr[i] = true;
        }
      }
    }
    this.setState({
      hiddenStatus: hiddenStatusArr
    });
  },

  handleEscapeKey: function handleEscapeKey(e) {
    if (e.keyCode === 27) {
      this.setState({
        modalStatus: { display: "none" }
      });
    }
  },

  render: function render() {
    var recipes = [];
    for (var i = 0; i < this.state.data.length; i++) {
      var currentData = this.state.data[i];
      var hidden = this.state.hiddenStatus[i];
      recipes.push(React.createElement(RecipeWithTitleAndButtons, {
        data: currentData,
        index: i,
        deleteButtonClicked: this.deleteButtonClicked,
        editRecipeClicked: this.editRecipeClicked,
        indivRecipeButtonClicked: this.indivRecipeButtonClicked,
        hideOrNot: hidden,
        key: i }));
    }

    return React.createElement(
      "div",
      null,
      React.createElement(ModalBackground, {
        modalStatus: this.state.modalStatus,
        modalAddButtonClicked: this.modalAddButtonClicked,
        modalEditButtonClicked: this.modalEditButtonClicked,
        xButtonClicked: this.xButtonClicked,
        cancelButtonClicked: this.cancelButtonClicked,
        ingredientsTextAreaContents: this.state.ingredientsTextAreaContents,
        ingredTextAreaChanged: this.ingredTextAreaChanged,
        nameTextAreaContents: this.state.nameTextAreaContents,
        nameTextAreaChanged: this.nameTextAreaChanged,
        addOrEditModal: this.state.addOrEditModal }),
      React.createElement(
        "div",
        { id: "addRecipeButtonDiv" },
        React.createElement(AddRecipeButton, {
          modalStatus: this.state.modalStatus,
          addRecipeClicked: this.addRecipeClicked })
      ),
      React.createElement(
        "div",
        { id: "mainRecipesDiv" },
        recipes
      )
    );
  }
});

ReactDOM.render(React.createElement(FullRecipeBox, null), document.getElementById('app'));