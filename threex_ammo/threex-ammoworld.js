var THREEx = THREEx || {}

THREEx.AmmoWorld = function(){
        this._ammoControls = []

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
        this.physicsWorld.stepSimulation( deltaTime, 10 );
        
        for(var i = 0; i < this._ammoControls.length; i++){
                var ammoControls = this._ammoControls[ i ];

                var motionState = ammoControls.physicsBody.getMotionState();
                console.assert( motionState )
                var btTransform = new Ammo.btTransform();
                motionState.getWorldTransform( btTransform );

                var position = btTransform.getOrigin();
                ammoControls.object3d.position.set( position.x(), position.y(), position.z() );

                var quaternion = btTransform.getRotation();
                ammoControls.object3d.quaternion.set( quaternion.x(), quaternion.y(), quaternion.z(), quaternion.w() );                        
        }        
}
////////////////////////////////////////////////////////////////////////////////
//          Code Separator
////////////////////////////////////////////////////////////////////////////////

THREEx.AmmoWorld.prototype.add = function(ammoControls){
        console.assert(ammoControls instanceof THREEx.AmmoControls)

        this.physicsWorld.addRigidBody( ammoControls.physicsBody );
        
        this._ammoControls.push(ammoControls)
}

THREEx.AmmoWorld.prototype.remove = function(ammoControls){
        console.assert(ammoControls instanceof THREEx.AmmoControls)        
        
        console.assert(false, 'not yet implemented')
}