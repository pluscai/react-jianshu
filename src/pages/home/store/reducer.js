import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },{
        id: 2,
        title: '手绘',
        imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }],
    articleList: [{
        id: 1,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18763524-a7b10ae3853800e1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 2,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18763524-a7b10ae3853800e1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 3,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18763524-a7b10ae3853800e1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },{
        id: 4,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc: '文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18763524-a7b10ae3853800e1?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList: [{
        id: 1,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
    }, {
        id: 2,
        imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }

}