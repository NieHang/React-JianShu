// immutable库可以让state不被修改
import { fromJS } from "immutable";

// fromJs将defaultState转变成immutable对象
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "手绘",
      imgUrl:
        "//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 2,
      title: "读书",
      imgUrl:
        "//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 3,
      title: "旅行·在路上",
      imgUrl:
        "//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 4,
      title: "摄影",
      imgUrl:
        "//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 5,
      title: "简书电影",
      imgUrl:
        "//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 6,
      title: "自然科普",
      imgUrl:
        "//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },
    {
      id: 7,
      title: "故事",
      imgUrl:
        "//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }
  ],
  articleList: [
    {
      id: 1,
      title: "关于日更",
      desc:
        "01 昨天有朋友问我，日更写作是如何坚持的，这是一个非常难得事情吧！我停顿片刻，并没有回答！日更写作很难吗？之前的我，肯定会回答很难！因为做到日更...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/5199227-d17da32821cfeb32.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ],
  recommendList: [
    "//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
    "//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png",
    "//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
    "//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
    "//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
  ],
  writer: [
    {
      imgUrl:
        "//upload.jianshu.io/users/upload_avatars/6467455/452f4532-4e3d-45fe-a1c5-da4d7cf5ad6f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
      name: "前端架构师",
      fontNum: "3k",
      likeNum: 276
    },
    {
      imgUrl:
        "//upload.jianshu.io/users/upload_avatars/677687/c84b99723362.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96",
      name: "帅气的灯泡",
      fontNum: "4k",
      likeNum: 277
    }
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
