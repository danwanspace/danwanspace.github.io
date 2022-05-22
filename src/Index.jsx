/** @jsx createElement */
import { createElement, render, createComponent } from 'axii'

function Index() {
  return <container block block-height="100%" flex-display flex-direction-column>
    <homeBody block flex-grow-1 flex-display flex-align-items-center flex-justify-content-center>
      <inner block flex-display flex-align-items-center >
        <img src="https://danwan-cdn.oss-cn-hangzhou.aliyuncs.com/global/logo.png" />
        <downloadUrls block block-margin-left-50px>
          <version use="a" href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/mac/Danwan.zip" block>for mac</version>
          <version use="a" href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/windows/danwan.exe" block block-margin-top-50px>for windows 10/11</version>
        </downloadUrls>
      </inner>
    </homeBody>
    <homeFooter block block-padding-20px use="a" href="https://beian.miit.gov.cn/" target="_blank">浙ICP备19011407号-2</homeFooter>
  </container>
}

Index.Style = f => {
  f.root.elements.homeFooter.style({
    textAlign: "center",
    color: '#333',
    textDecoration: "none"
  })


  f.root.elements.version.style({
    cursor: "pointer",
    color: '#333',
    textDecoration: "underline"
  })
}

export default createComponent(Index)
