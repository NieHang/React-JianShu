import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendList, Download } from "../style";

class Recommend extends Component {
  render() {
    const { recommendList } = this.props;
    return (
      <RecommendList>
        {
          recommendList.map((value) => {
            return <img key={value} src={value} alt=""/>
          })
        }
        <Download>
          <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
          <div className="info">
            <div className="title">下载简书手机APP ></div>
            <div className="desc">随时随地发现和创作内容</div>
          </div>
          <div className="hiddenCode">
            <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
            <div className="arrow"></div>
          </div>
        </Download>
      </RecommendList>
    )
  }
}

const mapStateToProps = state => ({
  recommendList: state.getIn(['home', 'recommendList'])
})

export default connect(mapStateToProps, null)(Recommend);