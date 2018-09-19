
define(['knockout', 'jquery', 'react', 'react-dom', 'redux'],
    function (ko, jquery, React, ReactDOM, ReactRedux) {


        var Image = React.createClass({
            propTypes: {
                product: React.PropTypes.object
            },
            render: function () {
                console.log(this.props.product.thumbImageURLs[0])
                var container =  React.createElement('img',{
                    src: this.props.product.thumbImageURLs[0]
                });
                return container;
            }
        });





        return React.createClass({
            propTypes: {
                model: React.PropTypes.object,
            },

            getInitialState:function(){
                var self = this;
                this.props.model.cart().allItems.subscribe(function(e){
                    self.setState($.extend(
                        self.state,{ cartItems: self.props.model.cart().allItems() }
                    ))
                });

                return {
                    cartItems: this.props.model.cart().allItems()
                }
            },

            render: function () {
                var container =  React.createElement('div',{},
                    React.createElement('ul'),
                    this.state.cartItems.map(function(product,i) {
                        // return
                        return React.createElement('li',{
                                "key":'p'+i,
                                "data-product": product,
                            },
                            product.catRefId,
                            React.createElement('div',{},
                                React.createElement(Image, { product: product.productData() })
                            )
                        );
                    }));
                return container
            }
        });
    }
);

