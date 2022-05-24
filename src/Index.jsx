/** @jsx createElement */
import { createElement, render, createComponent } from 'axii'

function Index() {
  return <container block block-height="100%" flex-display flex-direction-column>
    <homeBody block flex-grow-1 flex-display flex-align-items-center flex-justify-content-center>
      <inner block flex-display flex-align-items-center >
        <img src="https://danwan-cdn.oss-cn-hangzhou.aliyuncs.com/global/logo.png" />
        <downloadUrls block block-margin-left-50px>
          <version use="a" href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/mac/danwan.dmg" block>for mac</version>
          <versionHelp href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/windows/danwan.exe" block block-margin-top-10px>
            由于 danwan 还未正式上架，启动时可能出现“无法验证开发者”的问题，请看 <a target="_blank"  href="https://z8lxoxwryu.feishu.cn/docs/doccnEBdorpKm76tf8Ha3jTxgte">解决方法</a> 。
          </versionHelp>

          <version use="a" href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/windows/danwan.exe" block block-margin-top-50px>for windows 10/11</version>
          <versionHelp href="https://danwan-native.oss-cn-hangzhou.aliyuncs.com/windows/danwan.exe" block block-margin-top-10px>静默安装，安装成功会在桌面生成 danwan.exe</versionHelp>
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
    fontSize:16,
    textDecoration: "underline"
  })


  f.root.elements.versionHelp.style({
    color: '#999',
    fontSize:13,
  })
}

export default createComponent(Index)
