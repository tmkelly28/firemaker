Hi there! I'm a starting point for simple React applications that want to use Firebase.
That's right - I'm a full-front end app using a realtime cloud database for everything!

<img width="761" alt="screen shot 2016-11-14 at 9 15 32 am" src="https://cloud.githubusercontent.com/assets/12876798/20267994/3cae17c0-aa4b-11e6-9960-43743d49237d.png">

But really, I'm just looking for a good home.

I don't have that many opinions, but here they are:
- I prefer the Redux ecosystem
- I prefer that you use [redux-thunk](https://github.com/gaearon/redux-thunk) to handle asynchronicity
- I prefer the [ducks](https://github.com/erikras/ducks-modular-redux) approach to organizing your redux code

Gee, I hope that's okay. You can change them if you want...it's just that's what I come with out the box.

I also require [Bootstrap 3](http://getbootstrap.com/) via CDN, so you can easily change it out.
I even use the Firebase CDN as well, just in case you decide you don't like Firebase anymore.

But I hope you decide you still like me.

Here's how to start using me:

1. Fork your own copy of me
2. Create your app on [Firebase](https://firebase.google.com/)
3. Enable email/password authentication (under Authentication/Sign-In Method from your app's dashboard)
4. Record your apiKey, authDomain, databaseUrl, and messagingSendId
5. Copy the above into the config object in my `app/db.js` file
6. `npm install`
7. `npm start` (this uses webpack-dev-server)

I think this is the beginning of a beautiful friendship.

If you notice any issues, please put them here in my GitHub.
Thanks!
