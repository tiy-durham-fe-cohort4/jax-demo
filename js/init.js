$(function () {
	
	// "556c7be28fed340300000003"
	
//	deleteOne('556c7baf8fed340300000001').done(function () {
//		getAllOrders();
//	});

//	updateOne('556c7be28fed340300000003', {
//		address: "Durham, NC",
//		customer: "John Dough",
//		order: "Large veggie"	
//	});
	
	getAllOrders();
	
	function updateOne(id, pizzaOrder) {
		return $.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas/' + id,
			method: 'PUT',
			data: JSON.stringify(pizzaOrder),
			contentType: 'application/json'
		}).done(function (data) {
			console.log(data);
		});
	}
	
	// Deletes a single object by id
	function deleteOne(id) {
		return $.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas/' + id,
			method: 'DELETE'
		}).done(function (data) {
			console.log(data);
		});
	}
	
	function getOne(id) {
		$.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas/' + id,
			method: 'GET'
		}).done(function (data) {
			console.log(data);
		});		
	}
	
	function getAllOrders() {
		$.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas',
			method: 'GET'
		}).done(function (data) {
			console.log(data);
		});
	}
	
	$('.create-order').on('submit', function (e) {
		e.preventDefault();
		var pizzaOrder = {
			customer: 'John Dough',
			address: 'Raleigh, NC',
			order: 'Large veggie'	
		};
		
		$.ajax({
			url: 'http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas',
			method: 'POST',
			data: JSON.stringify(pizzaOrder),
			contentType: 'application/json'
		}).done(function (data) {
			console.log(data);
		}).fail(function () {
			console.log('RUH ROH', arguments);
		});	
	});
	
	// http://tiny-pizza-server.herokuapp.com/collections/cdavies-durham
	
});