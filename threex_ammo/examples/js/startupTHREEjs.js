function startUpTHREEjs(export, callback){

	//////////////////////////////////////////////////////////////////////////////////
	//		Init
	//////////////////////////////////////////////////////////////////////////////////

	// init renderer
	var renderer	= new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setClearColor(new THREE.Color('black'), 1)
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	document.body.appendChild( renderer.domElement );

	// array of functions for the rendering loop
	var onRenderFcts= [];

	// init scene and camera
	var scene	= new THREE.Scene();
	var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 1000);
	camera.position.z = 10;
	var controls	= new THREE.OrbitControls(camera)
	controls.enableKeys = false

	//////////////////////////////////////////////////////////////////////////////////
	//		render the whole thing on the page
	//////////////////////////////////////////////////////////////////////////////////

	// handle window resize
	window.addEventListener('resize', function(){
		renderer.setSize( window.innerWidth, window.innerHeight )
		camera.aspect	= window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()		
	}, false)

	// render the scene
	onRenderFcts.push(function(){
		renderer.render( scene, camera );		
	})
	
        var statsFrame = new Stats();
        statsFrame.domElement.style.position = 'absolute';
        statsFrame.domElement.style.top = '0px';
        document.body.appendChild( statsFrame.domElement );
	onRenderFcts.push(function(){
		statsFrame.update()
	})
	
	// run the rendering loop
	var lastTimeMsec= null
	requestAnimationFrame(function animate(nowMsec){
		// keep looping
		requestAnimationFrame( animate );
		// measure time
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		// call each update function
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(deltaMsec/1000, nowMsec/1000)
		})
	})
	
	//////////////////////////////////////////////////////////////////////////////
	//		Code Separator
	//////////////////////////////////////////////////////////////////////////////
	
	callback( renderer, scene, camera, controls, onRenderFcts )
}
