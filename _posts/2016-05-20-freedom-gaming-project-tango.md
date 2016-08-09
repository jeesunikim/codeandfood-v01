---
layout: post
title:  "Freedom Gaming with Project Tango"
date:   2016-05-14 19:18:20 -0400
category: code
---

Project Tango transforms the way we play games by understanding your phone's precise 3D motion. Chase a virtual pet around your home, tag ghosts with your phone and fling rocks at castles in 3D. Gaming is the most popular app category for Project Tango - over 2/3 of all the Project Tango apps on Google Play are games. Learn how to build a simple Project Tango game along with some tips and tricks for development.

@eitan_me

##Building Augmented Reality with Project Tango
Tango understands physical space and then environment to track objects position and its environment. 

Motion Tracking, Depth Perceiption, Area Learning
Motion Tracking:
- core technology of PT
- understanding relative position from where they are
- visual features in the environment, combining that with inertial sensors to estimate position
Depth Perception:
- tango devices see in 3D
- Depth Perception + Motion Tracking do realtime meshing of environment.
Area Learning:
- Remember where they've been before

## Cat Game in Augmented Reality
- Linear Algebra, 3D geometry, coordinate frame transforms 
- Coordinate frame that Tango defines as they relate to each other
- 30 frames a second on Tango device
- Physics take care of it. As light comes in, different perspective takes place.
Composting a virtual character into this physical scene.

Instead of programitally setting the transform of the camera as it moves in the world, we'll get it from the tango device.
- Start of Service and Device

Floating cat into fixing it to the ground
- Using Depth Sensing API

Occlusion
- such as the cat hiding behind the podium
- tango can recreate 3D of the environment which can help with our occlusion problem.
- abstracted by SDK and meshing library in C ++ that you can hook up to Unity. It gives you game engine in real time.
- Cat being hidden behind the podium

Is it appropriate for technology that we have in our hand?

Floating Cat, Space Planets Game

Alien Game - using just motion tracking

Real time Demo.

Trade off
Heat is your enemoy on a mobile device
More Heat and CPU it uses

Creativity is King

All devices should have it
- Android start moving Project Tango to core Android's API
- Lenovo Project Tango Smart Phone later this summer (3 years journey)