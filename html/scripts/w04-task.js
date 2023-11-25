/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Leonard Jackson ",

    photo: "jackson.png.jpg",

    favoriteFoods: [
        'Amasi',
        'Chicken',
        'Rice',
        'Cheese Cake',
      ],
    hobbies: [
        'Reading',
        'Waching or Playering Soccer',
        'Hiking',
       
    ],

    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Kenai, AK',
      length: '4 years'
    },
    {
        place: 'Utah Vally',
        length: '11 years'
    },
    {
        place: 'Rexburg, ID',
        length: '2.5 years'
    },
    {
        place: 'Kent, WA',
        length: '2 years'
    },
    {
        place: 'Virgina Beach, VA',
        length: '2 years'
    },
    {
        place: 'Stevensville, MT',
        length: '1.5 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = `images/${myProfile.photo}`;
document.getElementById("photo").alt = "Your Alt Text";
/* Favorite Foods List*/
const favoriteFoods = [ 
'Roast Beef',
'Amasi',
'Chicken',
'Rice',
'Cheese Cake',
   
];
const fFood = document.getElementById("favorite-foods");

for (let i = 0; i < favoriteFoods.length; i++) {
  const li = document.createElement("li");
  li.textContent = favoriteFoods[i];
  fFood.appendChild(li);
}

/* Hobbies List */
const hobbies = [
'Reading',
'Watching Soccer', 
'Playing Soccer',
'Hiking',
   
];
const ul = document.getElementById("hobbies");

for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = hobbies[i];
  ul.appendChild(li);
}

/* Places Lived DataList */
const placesLived = [
    {
        place: 'Zimbabwe, Harare',
        length: '20 years'
      },
      {
          place: 'Kenya/Tanzania',
          length: '2 years'
      },
      {
          place: 'South Africa, Johannesburg',
          length: '11 years'
      },
      {
        place: 'Rexburg, ID',
        length: '1 year'
    },
  ];
  const dl = document.getElementById("places-lived");
  
  for (let i = 0; i < placesLived.length; i++) {
    const dt = document.createElement("dt");
    dt.textContent = placesLived[i].place;
    const dd = document.createElement("dd");
    dd.textContent = placesLived[i].length;
    dl.appendChild(dt);
    dl.appendChild(dd);
}