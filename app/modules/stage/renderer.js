define(function() {
	return function() {
		return {
			_container: null,

			_skyboxColor: new THREE.Color("#f8f8f8"),
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