define(["stage/scene"], function(Scene) {
	return function() {
		return {
			_scene: null,

			start: function(container) {
				_scene = new Scene();
				_scene.init(container);

				// ----- An example object placed into the scene -----
				var boxMesh = new THREE.Mesh(new THREE.BoxGeometry( 50, 50, 50 ), new THREE.MeshLambertMaterial({ color: new THREE.Color("#ff0000"), side:THREE.DoubleSide }));
				_scene.addToScene(boxMesh);
				
				_scene.startRendering();
			}
		};
	};
})