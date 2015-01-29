exports.viewProject = function(req, res){
	//controller code goes here
	//Tell it to render our project page template
	
	// Slide 53
	var name = req.params.name;
	console.log("The project name is: " + name);
	res.render('project', {
		'projectName': name
	});
}