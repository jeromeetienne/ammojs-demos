var THREEx = THREEx || {}

THREEx.AmmoControls = function(object3d, options){
        options = options || {}
        this.object3d = object3d

        
        ////////////////////////////////////////////////////////////////////////////////
        //          Compute shape from geometry\
        ////////////////////////////////////////////////////////////////////////////////

        var position = this.object3d.position;
        var quaternion = this.object3d.quaternion;
        var mass = options.mass !== undefined ? options.mass : null;
        
        if( object3d.geometry instanceof THREE.BoxGeometry ){
                if( mass === null ){
                        mass = object3d.geometry.parameters.width 
                                * object3d.geometry.parameters.height 
                                * object3d.geometry.parameters.depth                        
                }
                var btVector3 = new Ammo.btVector3()
                btVector3.setX(object3d.geometry.parameters.width/2)
                btVector3.setY(object3d.geometry.parameters.height/2)
                btVector3.setZ(object3d.geometry.parameters.depth/2)
                var shape = new Ammo.btBoxShape( btVector3 );
        }else if( object3d.geometry instanceof THREE.SphereGeometry ){
                if( mass === null ){
                        mass = 4/3 *Math.PI * Math.pow(object3d.geometry.parameters.radius,3)                        
                }
                var radius = object3d.geometry.parameters.radius        
                var shape = new Ammo.btSphereShape( radius );                
        }else if( object3d.geometry instanceof THREE.CylinderGeometry ){
                if( mass === null ){
                        mass = 2        // TODO get formula fron the internet                        
                }
                // debugger
                var p = object3d.geometry.parameters
                var size = new Ammo.btVector3( p.radiusTop, p.height * 0.5, p.radiusBottom)
                var shape = new Ammo.btCylinderShape( size );
        }else{
                // console.assert('unknown geometry type', object3d.geometry)
                var box3 = new THREE.Box3().setFromObject(this.object3d)
                var size = box3.getSize()
                if( mass === null ){
                        mass = size.x * size.y * size.z                        
                }

                if( mass === null )     mass = 5        // TODO compute from box size
                var btVector3 = new Ammo.btVector3()
                btVector3.setX(size.x/2)
                btVector3.setY(size.y/2)
                btVector3.setZ(size.z/2)
                var shape = new Ammo.btBoxShape( btVector3 );
                box3.getCenter(position)
        }
        
        var margin = 0.05;
        shape.setMargin( margin );

        var localInertia = new Ammo.btVector3( 0, 0, 0 );
        shape.calculateLocalInertia( mass, localInertia );

        var btTransform = new Ammo.btTransform();
        btTransform.setIdentity();
        btTransform.setOrigin( new Ammo.btVector3( position.x, position.y, position.z ) );
        btTransform.setRotation( new Ammo.btQuaternion( quaternion.x, quaternion.y, quaternion.z, quaternion.w ) );

        var motionState = new Ammo.btDefaultMotionState( btTransform );
        
        var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
        var body = new Ammo.btRigidBody( rbInfo );
        
        this.physicsBody = body
}

THREEx.AmmoControls.prototype.setLinearVelocity = function(x,y,z){
        this.physicsBody.setLinearVelocity( new Ammo.btVector3( x, y, z ) );
        this.physicsBody.activate()
        // this.physicsBody.setActivationState(th.DISABLE_DEACTIVATION);
}