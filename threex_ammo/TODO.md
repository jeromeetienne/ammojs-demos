# Could that be a threex ?
- like with workers by default
- converting from three.js geometry
- User Case : "for this object3d, make it in the physics"
- those are ```controls```
- THREEx.AmmoWorld()
  - ammoWorld.add(ammoControls)/.remove(ammoControls)
  - ammoWorld.update()
- THREEx.AmmoControls(object3d)

# Possible demo
- pool ball
- domino
- image destruction
- castle of cards
- throwing dice
  - good looks and angle https://youtu.be/Uo3kZDVG6dA?t=11

# Possible task
- make a demo
  - throw a ball into a cube of crates with trump
  - make domino and make it interactive
    - make it such as you can give the path from a string - how to join the letter
    - or simply make a bspline
    - make a hardcoded three.js line of domino
- throwing some dice, pool, bowling
- compute the terrain
  - do a cube geometry at first
  - display it
  - make a physic conversion of it
- port the vehicule into your demo
  - threex.ammovehicule.js
- make physics easy to tune with dat.gui
- make vr support

# Plan to import vehicule
- take the three.js demo
- port it bit by bit

# Demo Domino
- find textures for the dominoes
- make a spiral shape for the line of dominoes
  - maybe to do a text in cursive writing
- if possible, sounds/particles on collision

# Demo Image-Destruction
- DONE have the possibility to change your image
  - be careful with the source image aspect
  - store it in the url's hash
- if possible, sounds/particles on collision
- maybe ability to renew experiences with a different images once one is completed
- have a preset of multiple images in the 'info'
