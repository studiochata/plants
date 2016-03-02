angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
  {
    id: 0,
    name: 'Carrot',
    Seed Depth: '1 quarter inch, 3-4 inches appart',
    Season: 'Spring'
  }, 
  {
    id: 1,
    name: 'Kale',
    Seed Depth: 'Hey, it\'s me',
    Season: 'img/max.png'
  }, 
  {
    id: 2,
    name: 'Spinach',
    Seed Depth: 'I should buy a boat',
    Season: 'img/adam.jpg'
  }, 
  {
    id: 3,
    name: 'Turnip'
    Seed Depth: 'Look at my mukluks!',
    Season: 'img/perry.png'
  }, 
  {
    id: 4,
    name: 'Tomatoe',
    Seed Depth: 'This is wicked good ice cream.',
    Season: 'img/mike.png'
  },
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
