var THREEx = THREEx || {}

THREEx.AmmoWorld = function(){
        this._controls = []

        this._clock = new THREE.Clock();
        
        var collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
        var dispatcher = new Ammo.btCollisionDispatcher( collisionConfiguration );
        var broadphase = new Ammo.btDbvtBroadphase();
        var solver = new Ammo.btSequentialImpulseConstraintSolver();
        this.physicsWorld = new Ammo.btDiscreteDynamicsWorld( dispatcher, broadphase, solver, collisionConfiguration );

        // gravity
        this.physicsWorld.setGravity( new Ammo.btVector3( 0, -9.81, 0 ) );
}

////////////////////////////////////////////////////////////////////////////////
//          Code Separator
////////////////////////////////////////////////////////////////////////////////

THREEx.AmmoWorld.prototype.update = function(){
        var deltaTime = this._clock.getDelta();
        physicsWorld.stepSimulation( deltaTime, 10 );
}
////////////////////////////////////////////////////////////////////////////////
//          Code Separator
////////////////////////////////////////////////////////////////////////////////

THREEx.AmmoWorld.prototype.add = function(ammoControls){
        console.assert(ammoControls instanceof THREEx.AmmoControls)

        this.physicsWorld.addRigidBody( ammoControls.body );
        
        this._controls.push(ammoControls)
}

THREEx.AmmoWorld.prototype.remove = function(ammoControls){
        console.assert(ammoControls instanceof THREEx.AmmoControls)        
        
        console.assert(false, 'not yet implemented')
}