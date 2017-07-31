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

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
// grab the parent div for the formData
let parentDiv = document.querySelector('#fields');
formData.forEach(function (e) {
  let newTag;
  // HANDLE THE textarea and select's first
  if( e.type === 'textarea' ) {
    newTag = document.createElement('textarea');
    newTag.id = e.id || '';
    defaultText = document.createTextNode(e.label);
    newTag.appendChild(defaultText);
  } else if ( e.type == 'select' ) {
    newTag = document.createElement('select');
    newTag.id = e.id || '';
    // create the Select Language
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    let defaultOptionText = document.createTextNode('Select an option');
    defaultOption.appendChild(defaultOptionText);
    defaultOption.setAttribute('selected','');
    defaultOption.setAttribute('disabled','');
    newTag.appendChild(defaultOption);
    // loop over the options given and add them to the select tag element
    e.options.forEach(function(s) {
      let newOption = document.createElement('option');
      newOption.value = s.value;
      let newOptionText = document.createTextNode(s.label);
      newOption.appendChild(newOptionText);
      newTag.appendChild(newOption);
    });
  } else {
    // let's create a div for both the icon and the input
    newTag = document.createElement('div');
    newTagInput = document.createElement('input');
    newFontAwesomeTag = document.createElement('i');
    newFontAwesomeTag.className = "fa " + e.icon;
    newTag.appendChild(newFontAwesomeTag);
    newTagInput.type = e.type || 'text';
    newTagInput.placeholder = e.label || '';
    newTagInput.id = e.id || '';
    newTag.appendChild(newTagInput);
  }
  // options are tricky...

  // append to the parent
  parentDiv.appendChild(newTag);

});
