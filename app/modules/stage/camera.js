define(function() {
	return function() {
		return {
			_camera: null,

			// Default camera settings
			_cameraSettings: {
	            fov: 75,
				position: {
	                x: 0,
	                y: 0,
	                z: 300
				},
				lookAt: {
	                x: 0,
	                y: 0,
	                z: 0
				}
			},
			
			init: function(container) {
	            var far = ((Math.max(this._cameraSettings.position.x, this._cameraSettings.position.y, this._cameraSettings.position.z))*2);
	            var aspect = (container.width() / container.height());

	            this._camera = new THREE.PerspectiveCamera(this._cameraSettings.fov, aspect, 0.1, far);

	            this._camera.position.x = this._cameraSettings.position.x;
	            this._camera.position.y = this._cameraSettings.position.y;
	            this._camera.position.z = this._cameraSettings.position.z;

	            this._camera.lookAt(new THREE.Vector3(this._cameraSettings.lookAt.x, this._cameraSettings.lookAt.y, this._cameraSettings.lookAt.z));
			},

			getCamera: function() {
				return this._camera;
			}
		};
	};
})