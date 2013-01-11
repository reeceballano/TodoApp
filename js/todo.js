function TodoCtrl($scope) {
	$scope.todos = [{text:'Hello World!', done:false},
					{text:'Learn Angular', done:false}];

	$scope.addTodo = function() {
		if($scope.todoText == '' || $scope.todoText == null) {
			alert("Please Put a value!");
			return false;
		} else {
			$scope.todos.push({text:$scope.todoText, done:false});
			$scope.todoText = '';
		}
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	}


}