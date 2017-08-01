// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// -------- Your Code Goes Below this Line --------

// First, some helper functions...
function handleTextArea(formElement) {
  // create a container div for the fa icon and <textarea>
  newDivForTextArea = document.createElement('div');
  newDivForTextArea.id = "text-area-div"; /* so we can target this div and use flexbox */
  // create the new <textarea>
  newTextArea = document.createElement('textarea');
  newTextArea.id = formElement.id || '';
  newTextArea.placeholder = formElement.label || '';
  // create <i> for the fa icon
  newFontAwesomeIcon = document.createElement('i');
  newFontAwesomeIcon.className = "fa " + formElement.icon;
  // append the icon and the textarea to our container div
  newDivForTextArea.appendChild(newFontAwesomeIcon);
  newDivForTextArea.appendChild(newTextArea);

  // return the div back
  return(newDivForTextArea);
}

function handleSelect(formElement) {
  // create the new <select>
  newSelect = document.createElement('select');
  newSelect.id = formElement.id || '';
  // create the 'Select Language' default option for the <select>
  let newDefaultSelectOption = document.createElement('option');
  newDefaultSelectOption.value = ''; /* it will never be selected, so it doesn't need a value */
  let newDefaultOptionText = document.createTextNode('Select an option');
  newDefaultSelectOption.appendChild(newDefaultOptionText);
  // set selected and disabled so that user can't pick this option
  newDefaultSelectOption.setAttribute('selected','');
  newDefaultSelectOption.setAttribute('disabled','');
  // append the option to the select
  newSelect.appendChild(newDefaultSelectOption);

  // loop over the options given and add them to the select tag element
  formElement.options.forEach(function(option) {
    let newOption = document.createElement('option');
    newOption.value = option.value;
    let newOptionText = document.createTextNode(option.label);
    newOption.appendChild(newOptionText);
    // append the option to the select
    newSelect.appendChild(newOption);
  });

  // return the new select
  return(newSelect);
}

function handleInput(formElement) {
  // let's create a div for both the icon and the input
  newDivForInput = document.createElement('div');
  // create the input
  newInput = document.createElement('input');
  // create an <i> for the icon
  newFontAwesomeIcon = document.createElement('i');
  // give <i> the appropriate class to select the icon
  newFontAwesomeIcon.className = "fa " + formElement.icon;
  // append the <i> to the <div>
  newDivForInput.appendChild(newFontAwesomeIcon);
  // configre the <input>
  newInput.type = formElement.type || 'text';
  newInput.placeholder = formElement.label || '';
  newInput.id = formElement.id || '';
  // append the <input> to the <div>
  newDivForInput.appendChild(newInput);

  // return the new input
  return(newDivForInput);
}

// *****************************************************************************

// grab the parent div for the formData we are going to add
let parentDivForFields = document.querySelector('#fields');

// loop over all the properties of the formData object...
formData.forEach(function (formElement) {
  // element that we will add to the form
  let newFieldElement;

  switch( formElement.type ) {
    case 'textarea':
      newFieldElement = handleTextArea(formElement);
      break;
    case 'select':
      newFieldElement = handleSelect(formElement);
      break;
    default:
      newFieldElement = handleInput(formElement);
      break;
  }

  // append to the parent
  parentDivForFields.appendChild(newFieldElement);

});
