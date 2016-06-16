// ***************************************************************
// ROUTES (customers)
// ***************************************************************

Router.map(function() {

  // customerS INDEX
  // -------------------------------------------------------
  this.route('customersIndex', {
    template: 'customersIndex',
    path: '/customers',
    waitOn: function () {
      return Meteor.subscribe('customers');
    },
    data: {
      customers: function () {
        return Customers.find({}, {sort: {updatedAt: -1}});
      }
    }
  });

  // customer NEW
  // -------------------------------------------------------
  this.route('customerNew', {
    template: 'customerNew',
    path: '/customers/new'
  });

  // customer SHOW
  // -------------------------------------------------------
  this.route('customerShow', {
    template: 'customerShow',
    path: '/customers/:_id',
    waitOn: function () {
      return Meteor.subscribe('customer', this.params._id);
    },
    data: function () {
      return Customers.findOne(this.params._id);
    }
  });

  // customer EDIT
  // -------------------------------------------------------
  this.route('customerEdit', {
    template: 'customerEdit',
    path: '/customers/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('customer', this.params._id);
    },
    data: function () {
      return Customers.findOne(this.params._id);
    }
  });

});