require(["config"], function() {
  	// Kick off the application.
  	require(["viewer"], function(Viewer) {
  		var viewer = new Viewer();
  		
  		viewer.start("viewer");
	});
});
