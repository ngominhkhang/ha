TransactionsList = Backbone.Collection.extend({
    url: "/transactions",

    initialize: function() {
        this.model = Account;
    }
})

TransactionsList.get = function() {
    if (_.isEmpty(TransactionsList.list)) {
        TransactionsList.list = new TransactionsList();
        TransactionsList.list.fetch();
    }

    return TransactionsList.list;
}