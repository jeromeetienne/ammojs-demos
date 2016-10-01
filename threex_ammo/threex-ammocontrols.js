var THREEx = THREEx || {}

THREEx.AmmoControls = function(object3d){
        this.object3d = object3d
        
        var radius = 3
        
        var shape = new Ammo.btSphereShape( radius );
        var margin = 0.05;
        shape.setMargin( margin );

        var mass = 5;
        var localInertia = new Ammo.btVector3( 0, 0, 0 );
        shape.calculateLocalInertia( mass, localInertia );

        var transform = new Ammo.btTransform();
        transform.setIdentity();

        var pos = this.object3d.position;
        transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
        
        var motionState = new Ammo.btDefaultMotionState( transform );
        var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
        var body = new Ammo.btRigidBody( rbInfo );
}
