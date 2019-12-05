const navigtlist:object[] = [
    {
        father: '首页',
        icon: 'ios-home',
        son: [],
        url: '/',
    },
    {
        father: '技术内容',
        icon: 'ios-book',
        son: [
            {name: 'Web前端', url: '/technology/web'},
            {name: 'node', url: '/technology/node'},
            {name: 'mysql', url: '/technology/mysql'},
        ]
    },
    {
        father: '关于',
        icon: 'ios-cloud',
        son: [
            {name: '关于', url: '/about'},
            {name: '空', url: ''},
        ],
        url: '/about'
    },
]

export default navigtlist
