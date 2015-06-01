function views(templateId, model) {
  var template = _.template($('#' + templateId).html(), { variable: 'm' });
  return template(model);
}