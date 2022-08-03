
const vdom = {
    type: 'ul',
    props: {
        className: 'list'
    },
    children: [
        {
            type: 'li',
            props: {
                className: 'item',
                style: {
                    background: 'pink',
                    color: 'brown'
                },
                onClick: function() {
                    alert(1);
                }
            },
            children: [
                '1111'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item',
				style: {
                    background: 'yellow',
                    color: 'brown'
                },
            },
            children: [
                '22224444'
            ]
        },
        {
            type: 'li',
            props: {
                className: 'item',
				style: {
                    background: 'orange',
                    color: 'black'
                },
            },
            children: [
                '3333'
            ]
        }
    ]
};

render(vdom, document.getElementById('root'));
