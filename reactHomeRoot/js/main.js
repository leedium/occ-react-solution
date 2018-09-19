define(['knockout', 'jquery', 'react', 'react-dom', 'redux','js/App'],
    function (ko, jquery, React, ReactDOM, ReactRedux, App) {
        return {
            beforeAppear: function () {
                // var self = this;
                // ReactDOM.render(
                //     React.createElement(App, {
                //         model: self
                //     }),
                //     document.getElementById('root')
                // );
            }
        }
    }
);