Hi there! I'm a starting point for simple React applications that want to use Firebase.
That's right - I'm a full-front end app using a realtime cloud database for everything!

But really, I'm just looking for a good home.

I don't have that many opinions, but here they are:
- I prefer the Redux ecosystem
- I prefer that you use [redux-thunk](https://github.com/gaearon/redux-thunk) to handle asynchronicity
- I prefer the [ducks](https://github.com/erikras/ducks-modular-redux) approach to organizing your redux code

Gee, I hope that's okay.

I also require [Bootstrap 3](http://getbootstrap.com/) via CDN, so you can easily change it out.
I even use the Firebase CDN as well, just in case you decide you don't like Firebase anymore.

Here's how to start using me:

1. Fork your own copy of me
2. Create your app on [Firebase](https://firebase.google.com/)
3. Record your apiKey, authDomain, databaseUrl, and messagingSendId
4. Copy the above into the config object in my `app/db.js` file
5. `npm install`
6. `npm start` (this uses webpack-dev-server)

I think this is the beginning of a beautiful friendship.
If you notice any issues, please put them here in my GitHub.
Thanks!
