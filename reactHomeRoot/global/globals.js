requirejs.config({
    // module name mapped to CDN url
    paths: {
        'react': 'https://unpkg.com/react@15.3.2/dist/react',
        'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom'
    }
});

define(
    ['knockout', 'jquery', 'pubsub','react','react-dom'],
    // ['knockout', 'jquery', 'pubsub'],
    //---------------------'---------------------------------------------
    // MODULE DEFINITION
    //-------------------------------------------------------------------
    // function (ko, $, pubsub) {
    function (ko, $, pubsub, React, ReactDOM, redux) {
        return {
            onLoad: function(){
                console.log('react lib');

            }
        }
    }
);







