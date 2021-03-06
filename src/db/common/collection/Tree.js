/**
 * Created by yangyxu on 9/17/14.
 */
zn.define(function () {

    return zn.Collection({
        cn: 'common.collection.Tree',
        methods: {
            orderTreeNode: function (id, order){
                var _defer = zn.async.defer();
                this.beginTransaction()
                    .block(zn.block.tree.orderNode(this._table, id, order))
                    .on('error', function (sender, error){
                        _defer.reject(error);
                    })
                    .on('finally', function (sender, data){
                        _defer.resolve(data);
                    })
                    .commit();

                return _defer.promise;
            },
            insert: function (values){
                var _defer = zn.async.defer();
                this.beginTransaction()
                    .block(zn.block.tree.addNode(this._table, values))
                    .on('error', function (sender, error){
                        _defer.reject(error);
                    })
                    .on('finally', function (sender, data){
                        _defer.resolve(data);
                    })
                    .commit();

                return _defer.promise;
            },
            delete: function (where){
                var _defer = zn.async.defer();
                this.beginTransaction()
                    .block(zn.block.tree.deleteNode(this._table, where))
                    .on('error', function (sender, error){
                        _defer.reject(error);
                    })
                    .on('finally', function (sender, data){
                        _defer.resolve(data);
                    })
                    .commit();

                return _defer.promise;
            },
            order: function (id, order){
                var _defer = zn.async.defer();
                this.beginTransaction()
                    .block(zn.block.tree.orderNode(this._table, id, order))
                    .on('error', function (sender, error){
                        _defer.reject(error);
                    })
                    .on('finally', function (sender, data){
                        _defer.resolve(data);
                    })
                    .commit();

                return _defer.promise;
            }
        }
    });

});
