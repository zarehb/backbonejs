require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        text: '../bower_components/text/text'
    }
});
require(["router"],function( Router ) {
	var app = new Router();
	Backbone.history.start();
});