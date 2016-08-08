---
layout: default
title:  "Firebase"
date:   2016-05-14 19:18:20 -0400
category: code
---

Creating interactive multiplayer experiences with Firebase

Building realtime features that work on all your different devices is the holy grail of app development. The Firebase Realtime Database lets you store and sync data instantly, and allows you to build a web, mobile or Unity application in minutes without worrying about wiring up a backend. The real time aspect and a number of lesser known, powerful features (such as transactions) make it possible to create a multiplayer gaming experience as well. In this session, you'll learn how to use the Firebase Realtime Database to keep track of your online players, synchronize game state across multiple connections, create chat rooms, and match players together for game play.

Mark Mandel

Firebase - grow user space and earn money. 

Develop
- Backend Service
- App Quality Services

Grow
- Acquisition
- Re-engagement

Earn
- In-apps Ads (AdMob)

Example. Rock, paper, scssior as multiplayer contest example
- Google Cloud Platform (Cloud Vision API), it can take a photo or send a photo of someone's face, and it's ability to say is this person sad, or angry? It's in Google Cloud Platform Sandbox.
- Happy, Angry, Surprised. Happy beats Angry, Surprised beats happpy, Angry beats Suprised, 
- Firebase supports both Android, IOS, Unity.

Firebase Configuration
- script.js (for web)
- copy and paste the code

Firebase Authentication
- Identity, who is this player?
- 'Firebase Auth': improving the sign-in and onboarding experience for end users. Including social media authentication.
- AuthProvide for Google, creating credentials
- auth change state - runs whenever your authentication state changes. It runs regardless of which provider you are using. 
- Firebase console shows users that were created. No backend.

Chat
- Firebase Realtime Database: NoSQL database. JSON database. Synchronized data across devices in miliseconds. Offline App support (?!!!)
- Simple as 

function sendChatMsg() {
	ref = firebase.database().ref('/chat');
	messageField = document.querySelector('#chat-message');
	ref.push().set({
		name: firebase.auth().currentUser.displayName,
		message: messageField.value
	});
}

Matchmaking
- One person creates a game and people join
- Two players joining at the same time problem
-- An atomic operation - no matter what, only one person joins - no two people join at the same time.
ex. var gameRef = ref.child(key);
this specific game is all we care about
transaction method - for that block of code, this is the only connection that is going to interact with that particular game. One and the another.

game.json
ref.orderByChild('state').equalTo(STATE.OPEN);
- filtering
- orerByChild take that state, and filters it to be equal to STATE.OPEN

removing a user
"child_removed" on handler

Using Transaction and filtering, making matchmaking easy.

GamePlay

on('value') handler
- let us know when game changes using switch protocol

You can take a picture with your camera and put right into canvas
var context = canvas.getContext('2d');

## Firebase Storage
- The place to store binary data
- Global scaled provided by Google Cloud Storage
- Robust, resumable uploads and downloads
- Store and share blob data

creator, joiner added in game.json

Firebase Remote Config
- IOS/Android
- Customize content for different audiences and measure results
- roll out features gradually and monitor the impact
- Save key values

Firebase Analytics
- For gaming/app this is awesome
- Free

This was an awesome talk. live coding.
Cloud Sandbox


Firebase just unveiled many significant and exciting new features. This session will give you an overview of what we’ve introduced and how you can use Firebase to build better apps and grow your business. Be sure to join us, as James Tamplin and Francis Ma - product leads of Firebase, give you the full picture. After this session you’ll be equipped with the tools needed to build and grow the next great app!