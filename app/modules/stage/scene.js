define(["stage/camera", "stage/lighting", "stage/renderer"], function(Camera, Lighting, Renderer) {
	return function() {
		return {
			_container: null,

			_scene: null,

			_camera: null,
			_lighting: null,

			_renderer: null,
			_keepRenderingScene: true,

			init: function(container) {
				// Get the div that the scene is going to be rendered into
				this._container = $("#" + container);

				// Create the three.js scene
				this._scene = new THREE.Scene();

	            // Create the camere and add it to the scene
	            this._camera = new Camera();
				this._camera.init(this._container);

	            this._scene.add(this._camera.getCamera());

	            // Craete the lighting and add it to the scene
	            this._lighting = new Lighting();
				this._lighting.init();

            	this._scene.add(this._lighting.getLight());

            	// Create the renderer and append it to the page
            	this._renderer = new Renderer();
				this._renderer.init(this._container	);

	            this._container.html(this._renderer.getDOMElement());
			},

			getScene: function() {
				return this._scene;
			},

			startRendering: function () {
		        var that = this;

		        var renderScene = function () {
		            if (that._keepRenderingScene) requestAnimationFrame( renderScene );

		            that._renderer.getRenderer().render(that._scene, that._camera.getCamera());
		        };

		        renderScene();
		    },

		    stopRendering: function() {
		    	this._keepRenderingScene = false;
		    }
		};

	};
})

