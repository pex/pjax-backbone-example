var PjaxView = Backbone.View.extend({
  events: {
    'click a[data-pjax]': 'getPjax'
  },

  // Ensures `replacementEl` and pjax is defined
  initialize: function() {
    if ('undefined' == typeof this.replacementEl) {
      throw '[Initialize Error] `replacementEl` needs to be defined';
    } else {
      this.$replacementEl = $(this.replacementEl);
    }
    if (!$.support.pjax) {
      throw '[Initialize Error] pjax is not present'
    }

    $(document).on('pjax:start',  this.startCallback);
    $(document).on('pjax:end',    this.endCallback);
    $(document).on('pjax:error',  this.errorCallback);
  },

  // Requests `href` via pjax
  getPjax: function(evnt) {
    $.pjax.click(evnt, this.$replacementEl);
  },

  // Default start callback
  startCallback: function() {
    console.log('Pjax starts.');
  },

  // Default end callback
  endCallback: function() {
    console.log('Pjax finished.');
  },

  // Default success callback
  errorCallback: function() {
    console.log('Pjax failed.');
  }

});
