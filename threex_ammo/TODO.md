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
