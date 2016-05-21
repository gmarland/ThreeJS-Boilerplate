define(function() {
	return function() {
		return {
			_container: null,

			_skyboxColor: 0xff0000,
			_skyboxOpacity: 1,

			init: function(container) {
	            this._renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

	            this._renderer.setSize(container.width(), container.height());
	            this._renderer.setClearColor(this._skyboxColor, this._skyboxOpacity);
			},

			getRenderer: function() {
				return this._renderer;
			},

			getDOMElement: function() {
				return this._renderer.domElement;
			}
		};
	};
})