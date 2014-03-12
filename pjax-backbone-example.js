// Actual Example
var CategoryTreeView = PjaxView.extend({
  replacementEl: '#container',

  errorCallback: function() {
    console.log('Pjax failed.');

    // We don't want to redirect on error: therefore return false.
    return false;
  }
});

// Init.
$(function() { new CategoryTreeView({ el: '#categories' }); });
