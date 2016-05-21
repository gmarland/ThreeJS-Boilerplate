define(["scene"], function(Scene) {
	return function() {
		return {
			_scene: null,

			start: function(container) {
				_scene = new Scene();
				_scene.init(container);
				
				_scene.startRendering();
			}
		};
	};
})