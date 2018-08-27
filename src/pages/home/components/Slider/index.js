import React, { Component } from "react";
import {
  Banner,
  Container,
  Img,
  Dots,
  DotUl,
  Dot,
  LeftArrow,
  RightArrow
} from "./style";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgList: [
        "//upload.jianshu.io/admin_banners/web_images/4377/8c839e7b721b8f2023452edaceefd2fb899d340b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        "//upload.jianshu.io/admin_banners/web_images/4405/fecf3937f294094b7e9b91db8caaa3340a310c9a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        "//upload.jianshu.io/admin_banners/web_images/4408/3d4240562488598d1a40c1db5ffb39894d9c5b7d.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        "//upload.jianshu.io/admin_banners/web_images/4427/59bf298e860d8e75c34e0a7e2c01c16859a29178.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
      ],
      index: 0,
      interval: true,
      arrowShow: false
    };
    this.handleSlider = this.handleSlider.bind(this);
    this.handleStopInterval = this.handleStopInterval.bind(this);
    this.handleRunInterval = this.handleRunInterval.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
  }

  componentDidMount = () => {
    this.handleSlider();
  };

  render() {
    const { imgList, index, arrowShow } = this.state;
    return (
      <Container
        onMouseEnter={this.handleStopInterval}
        onMouseLeave={this.handleRunInterval}
      >
        <Img style={{ left: `${-index * 625}px` }}>
          {imgList.map((value, index) => {
            return <Banner key={value} src={value} />;
          })}
        </Img>
        <Dots>
          <DotUl>
            {imgList.map((value, item) => {
              return (
                <Dot
                  key={value}
                  className={index === item ? "active" : ""}
                  onClick={this.handleDotClick.bind(this, item)}
                />
              );
            })}
          </DotUl>
        </Dots>
        <LeftArrow
          onClick={this.handleLeftClick}
          style={{ opacity: arrowShow ? ".6" : "0" }}
        >
          ＜
        </LeftArrow>
        <RightArrow
          onClick={this.handleRightClick}
          style={{ opacity: arrowShow ? ".6" : "0" }}
        >
          ＞
        </RightArrow>
      </Container>
    );
  }
  handleSlider() {
    setInterval(() => {
      let { imgList, index, interval } = this.state;
      if (interval) {
        if (index < imgList.length - 1) {
          this.setState((state, props) => ({ index: ++index }));
        } else {
          this.setState((state, props) => ({ index: 0 }));
        }
      } else {
        this.setState((state, props) => ({ index }));
      }
    }, 5000);
  }
  handleStopInterval() {
    this.setState((state, props) => ({ interval: false, arrowShow: true }));
  }
  handleRunInterval() {
    this.setState((state, props) => ({ interval: true, arrowShow: false }));
  }
  handleDotClick(item, e) {
    this.setState((state, props) => ({ index: item }));
  }
  handleLeftClick() {
    let { imgList, index } = this.state;
    if (index > 0) {
      this.setState((state, props) => ({ index: --index }));
    } else {
      console.log(index);
      this.setState((state, props) => ({ index: imgList.length - 1 }));
    }
  }
  handleRightClick() {
    let { imgList, index } = this.state;
    if (index < imgList.length - 1) {
      this.setState((state, props) => ({ index: ++index }));
    } else {
      this.setState((state, props) => ({ index: 0 }));
    }
  }
}
