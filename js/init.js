$(function () {
  // Create an instance of our RestService object
	var service = new RestService('http://tiny-pizza-server.herokuapp.com/collections/cdavies-pizzas/');
  
  // Add a fail handler for all AJAX calls on service
  service.fail(function (req, status, err) {
    if (!err || !err.message) {
      err = { message: 'Ruh roh!' };
    }
    
    $('.error-message').remove();
    $('.main-content').prepend(views('error-message', err));
    
    console.log('ERROR ', arguments);
  });
  
  // Load all of our current orders
  service.getAll().done(function (orders) {
    $('.main-content').html(views('orders-list', { orders: orders }));
  });
  
  // When our order form is submitted, call the API to add the order,
  // then redraw when the order is saved.
  $('.main-content').on('submit', '.order-form', function (e) {
    e.preventDefault();
    
    service.add(formToObject(this)).done(function (createdOrder) {
      $('.order-list').append(views('order', createdOrder));
    });
  });
  
  // When an order is removed, remove it from the API, then from
  // the DOM...
  $('.main-content').on('click', '.remove-order', function () {
    var orderElement = $(this).closest('.order');
    
    service.remove($(this).data('id')).done(function () {
      orderElement.remove();
    });
  });

  // A convenience function to turn a form into an object
  function formToObject(form) {
    var obj = {};
    
    // Turn our form into a hash/object representing the user's input
    $(form).find('input').each(function (i, input) {
      obj[input.name] = input.value;
    });
    
    return obj;
  }  
});