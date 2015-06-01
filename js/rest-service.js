function RestService(baseUrl) {
  this.baseUrl = removeTrailingSlash(baseUrl);
  this.errorHandler = function () { };
  
  function removeTrailingSlash(str) {
    return (str[str.length - 1] === '/') ? str.slice(0, -1) : str;
  }
}

RestService.prototype = {
  add: function (value) {
    return this.ajax('POST', undefined, value);
  },
  
  getAll: function () {
    return this.ajax('GET');
  },
  
  getById: function (id) {
    return this.ajax('GET', id);
  },
  
  update: function (id, value) {
    return this.ajax('PUT', id, value);
  },
  
  remove: function (id) {
    return this.ajax('DELETE', id);
  },
  
  fail: function (handler) {
    handler && (this.errorHandler = handler);
  },
  
  ajax: function (method, id, data) {
    return $.ajax({
      url: this.baseUrl + (id ? '/' + id : ''),
      method: method,
      contentType: 'application/json',
      data: (data ? JSON.stringify(data) : data)
    }).fail(this.errorHandler);
  }
};