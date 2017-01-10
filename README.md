# PocketWalk

Share the story of your neighborhood the way you see it.

PocketWalk is a fullstack application lets users share guided tours of their neighborhoods and cities, or see places through the eyes (or steps!) of someone else. It is explorable as a reading resource from a desktop or as a guided tour by car, on a bicycle or on foot in mobile format. It is being built using Rails, JavaScript, a compact custom build of jQuery called "jQuickly" and the Google Maps API.

<!-- [See it live][heroku] -->

<!-- [heroku]: http://pocketwalk.com -->

Design features:

- User auth allows user to sign in and create tours
- Responsive design allows user to access app on multiple devices
- Users can see their own location, and nearby tours, in real-time

###Welcome View
![welcome]

###Landing Page
![landingPage]

###UNDER CONSTRUCTION
* [ ] Remove jQuickly and replace with vanilla js
* [ ] Remove gmaps4rails gem, replace with vanilla js
* [ ] Test coverage
* [x] Implement sorcery auth to allow users to signup and signin
* [ ] Add in mailer to reset password
* [ ] Reset signin configuration to accept username + password instead of email + password
* [x] Allow users to create and save their own tours
* [x] Create tours and add stops to tours
* [x] Display users on map when showing multiple or individual users
* [x] Display a user's tours on map when showing user
* [x] Display tour location on map if there are no stops
* [ ] Display a tour and its stops on the map when that tour is selected
* [ ] Make users and tour descriptions searchable
* [ ] Add autocomplete for Search
* [ ] Connect AWS for image uploads
* [ ] Photo uploads for users and tour stops
* [ ] Allow users to save favorite tours
* [ ] Allow users to follow other users
* [ ] Set up home page with infinite scroll of updates from followed users
* [ ] Set geolocation to user location -- provide searchable list of cities with tours
* [ ] Automatically index and display nearby tours on login
* [ ] Set up "treasure-hunt" mode, where information only pops up when user's geolocation matches destination
* [ ] Fix location information display
* [ ] Add "highlight" design for local tour index

[welcome]: app/assets/images/welcome.png
[landingPage]: app/assets/images/landing.png
