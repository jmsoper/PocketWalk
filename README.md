# PocketWalk

Share the story of your neighborhood the way you see it.

PocketWalk is a fullstack application lets users share guided tours of their neighborhoods and cities, or see places through the eyes (or steps!) of someone else. It is explorable as a reading resource from a desktop or as a guided tour by car, on a bicycle or on foot in mobile format. It is being built using Rails, JavaScript, a compact custom build of jQuery called "jQuickly" and the Google Maps API.

<!-- [See it live][heroku] -->

<!-- [heroku]: http://pocketwalk.com -->

Design features:

- User auth allows user to sign in and create tours
- Responsive design allows user to access app on multiple devices
- Uses unique markers for consistent visuals

###Welcome View
![welcome]

###Landing Page
![landingPage]

###Technical Details
COMING SOON

###UNDER CONSTRUCTION
* [x] Implement sorcery auth to allow users to signup and signin
* [x] Allow users to create and save their own tours
* [ ] Make users and tour descriptions searchable
* [ ] Photo uploads for users and tour stops
* [ ] Allow users to save favorite tours
* [ ] Allow users to follow other users
* [ ] Set up home page with infinite scroll of updates from followed users
* [ ] Set geolocation to user location -- provide searchable list of cities with tours
* [ ] Set up "treasure-hunt" mode, where information only pops up when user's geolocation matches destination
* [ ] Fix location information display
* [ ] Connect AWS for image uploads

[welcome]: app/assets/images/welcome.png
[landingPage]: app/assets/images/landing.png
