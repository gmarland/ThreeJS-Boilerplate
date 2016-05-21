define(function() {
	return function() {
		return {
			_directionalLight: null,

			 // directional lighting default setting, should be made configurable from the init
			_directionalLightSettings: {
                color: 0xffffff,
                intensity: 1.0,
                position: {
                    x: 200,
                    y: 300,
                    z: 590
                }
            },

			init: function() {
            	this._directionalLight  = new THREE.PointLight(this._directionalLightSettings.color, this._directionalLightSettings.intensity); 

                this._directionalLight.position.set(this._directionalLightSettings.position.x, this._directionalLightSettings.position.y, this._directionalLightSettings.position.z);
			},

			getLight: function() {
				return this._directionalLight;
			}
		};
	};
})