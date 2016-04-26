# PocketWalk

Learn about the history of Philadelphia education from the ground up.

PocketWalk is a web application that maps out Philly history, explorable as a reading resource from a desktop or as a guided tour on foot in mobile format. It was built using JavaScript, a compact custom build of jQuery called "jQuickly" and the Google Maps API.

[See it live][heroku]

[heroku]: http://pocketwalk.com

Design features:

- Custom jQuery build includes XMLHttpRequest to get current weather data
- Responsive design allows user to access app on multiple devices
- Uses unique markers for consistent visuals

###Welcome View
![welcome]

###Landing Page
![landingPage]

###Technical Details
COMING SOON

###Future Features
* Implement backend to allow users to signup and signin
* Allow users to create and save their own tours
* Make tours "taggable" with keywords
* Make users and tour-tags searchable
* Photo uploads for users
* Allow users to "like" tours
* Allow users to follow other users
* Set up home page with infinite scroll of updates from followed users
* Set geolocation to user location -- provide searchable list of cities with tours
* Set up "treasure-hunt" mode, where information only pops up when user's      geolocation matches destination

###To-Do:
* [ ] Fix location information display
* [ ] Adjust responsive design
* [ ] Connect AWS for image uploads
* [ ] Create user database
* [ ] Setup user auth
* [ ] Create tour database and associations
* [ ] Create tag database and associations
* [ ] Create user-show page and tour-show page

[welcome]: ./docs/images/welcome.png
[landingPage]: ./docs/images/landing.png
