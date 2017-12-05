 // ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friends = [
  {
  name:"Ryn",
  photo:"https://avatars2.githubusercontent.com/u/27320333?s=400&v=4",
  scores:[
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
    {
  name:"Alexander",
  photo:"https://media.licdn.com/media/p/2/000/1e9/3cd/24e4581.jpg",
  scores:[
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5",
      "5"
    ]
  },
    {
  name:"Simone",
  photo:"http://www.animal-photography.com/thumbs/black_longhair_munchkin_on_hin~AP-1C7SDW-TH.jpg",
  scores:[
      "1",
      "5",
      "5",
      "5",
      "5",
      "3",
      "5",
      "2",
      "5",
      "1"
    ]
  },
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
   