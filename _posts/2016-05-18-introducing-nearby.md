---
layout: post
title:  "Introducing Nearby"
date:   2016-05-14 19:18:20 -0400
category: code
---

Introducing NearBy: Physical proximity within and without apps

Nearby brings awareness of close-by smartphones, devices, and beacons to your app, using a combination of Bluetooth, Wi-Fi, and ultrasound. Deep dive into Nearby's cross-platform, peer-to-peer API, as well as upcoming functionality for associating BLE beacons with on-device actions. We'll discuss Android and iOS features for relevant, proximity-powered triggers, sharing, group formation, and more.

Akshay Kavin and Andrew Bunner
1) - Discovery and communication
2) - Scanning for BLE Beacons
3) - Something new

Physical awareness 
- simple set of API

Chromecast Guest Mode
- Radio signal and ultrasound
- works on both android and iOS

Nearby. Messages Public API
- Google play Services
- Android 2.3 +

NearbyMessages
- Cocoapods.org
- iOS 7+

Examples of experiences 
- Pocket Casts
-- Uses NearBy to share the content within the app
- Trello
-- with Nearby, makes collaboration easy. 

### Technical Details
1. How it works
- Any devices that detect the same code can share the content
- using bluetooth classic, energy, ultrasound
-- both are the same part of the spectrum as wi-fi
-- Bluetooth 2.4 GHz radio, goes through walls up to about 100 feet.
-- Ultrasound, 18.5 - 20KHz audio. Doesn't go through walls around 5 ft

Android Java code.

Peer to Peer Permision - one time permission (once per app)
- No manifest change
- app will still auto update
- transparent explanation

2) - Scanning for BLE Beacons
- Scanning Permission
-- only requires location
-- no more bluetooth_admin
-- continued auto-updates

- More free scans
-- every screen-on event
-- piggyback on other apps
-- piggyback on location history
- Wakes your app
-- Nearby re-launches your app. Even if it's been killed.

Nearby for Beacons
- Location permission only
- More, free scans
- Wakes your app up
- More coming

3) Nearby Notifications
-- New feature on Android: Nearby Notifications
-- Target and its scanned to view products information feature
-- with Nearby, it shows you apps or websites from things around you, including your new devices
-- Target with a beacon installed, scan the product and you can view its product

What can I tie to my Beacon?
1. HTTPS web url
2. app intent with url fallback
3. direct app install*

Nearby Notifications
- App Install Criteria
1. Proximity-relevant (at a place or nearby device)
2. Action-oriented
3. Broad appeal (how appealing is this to the people who receve it)
4. Jump right in

Examples
United - remind the passengers to download an app before boarding
CVS - Kiosk and the app. 
University of Notre Dame - both app and mobile website. Installed beacons tell you the history of the location you are in..

No programming required - 

Getting Started
1. Get beacons
- g.co/beacons
- you can transform your devie into beacons
2. Configure them
- install beacon-maker's app
- choose either: 1) eddystone URL (web) 2) eddystone UID (web or app)
3. Register Beacons
- Beacon Tools App
- Shows up on web dashboard. You can monitor its battery level and its location
4. Tie them to web or app
- Beacon Tools App
- Dashboard is easier
- Beacon attachment
{"title": "",
"description": ""
"url": ""}
- image attached in the phone

they are located in developers.google.com/nearby

App Install Program
- 