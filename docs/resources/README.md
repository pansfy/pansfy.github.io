# 你的生产力工具集成就高效人士
> 所谓工欲善其事，必先利其器。随身配备一个百宝箱，不仅效率倍增，而且趣味无穷。当你熟悉它后，能够为你节约大量时间，让你可以更加专注地改变世界。

## 1. 桌面工具集

* **Top 1**：[uTools](http://www.u.tools/)，是一个极简、插件化、跨平台的现代桌面软件。通过自由选配丰富的插件，打造你得心应手的工具集合。
* **Top 2**：[Everything](https://www.voidtools.com/zh-cn/)，是一款功能强大，便捷实用的文件搜索软件，瞬间搜索到你需要的文件。
* **Top 3**：[Visual Studio Code](https://code.visualstudio.com/)，一个运行于 Mac OS X、Windows和 Linux 之上的，针对于编写现代 Web 和云应用的跨平台源代码编辑器。
* **Top 4**：[Typora](http://www.typora.io/)，的一切都围绕纯粹的生产效率,而如果我们回头想想,高效、简单其实也是当初 Markdown 语言诞生的初衷。
* **Top 5**：[Snipaste](https://zh.snipaste.com)，是一个简单但强大的截图工具，也可以让你将截图贴回到屏幕上！

## 2. 浏览器工具集

高效必备的浏览器插件，支持 Firefox、Chrome、Edge，推荐Edge浏览器。

* **Top 1**：[Tampermonkey（油猴）](https://www.tampermonkey.net/)是一款免费的浏览器扩展和最为流行的用户脚本管理器，海量的脚本，让你做成想做的事。
* **Top 2**：[沙拉查词](https://saladict.crimx.com/download.html)，是一款专业划词翻译扩展，为交叉阅读而生，再也不用担心不认识的英文单词了。
* **Top 3**：[AdGuard](https://adguard.com/zh_cn/adguard-browser-extension/overview.html)，是一款功能强大堪称完美的广告拦截插件，可以拦截所有浏览器上的广告!各种视频广告、弹窗内容也是可以正常拦截的，它几乎是超越一切广告拦截软件的存在，不会对你浏览网页或者看视频造成任何不良影响。
* **Top 4**：[OneTab](https://www.one-tab.com/)，是一款可以帮助用户一键杀死浏览器中所有标签页并通过提示恢复部分有用标签页的浏览器插件。

## 3. 强力搜索引擎

* **Top 1**：[Google(需科学)](https://www.google.com/)，互联网上最大、影响最广泛的搜索引擎。
* **Top 2**：[百度](https://www.baidu.com)，众里寻他千百度，国内最通用的搜索引擎。
* **Top 3**：[Bing](https://cn.bing.com/)，全球领先的搜索引擎之一，北美地区第二大搜索引擎。
* **Top 4**：[Qwant(需科学)](https://www.qwant.com/)，“我们为您检索一切，除了你是谁”。

## 4. 老司机部落

* **Top 1**：[虫部落*快搜](https://search.chongbuluo.com/)，你所需的一切，应有尽有。
* **Top 2**：[大师兄导航](https://dsxdh.com/)，找网站更简单。
* **Top 3**：[Iconfont](https://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)，阿里妈妈MUX倾力打造的矢量图标管理平台。
* **Top 4**：[GitHub](https://github.com/)，一个面向开源及私有软件项目的托管平台，当前全球最大的、属于程序员的基友社区。
* **Top 5**：[Gitee](https://gitee.com/)，开源中国推出的基于Git的代码托管服务，提供免费的私有仓库托管，是中国境内规模最大的代码托管平台。
* **Top 6**：[Stack Overflow](https://stackoverflow.com/)，一个最好的软件类问答网站，给软件开发人员工作和学习提供了非常大的便利。

## 5. 国内综合镜像库

* **Top 1**：[清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirror.tuna.tsinghua.edu.cn/)
* **Top 2**：[浙江大学开源镜像站 (zju.edu.cn)](http://mirrors.zju.edu.cn/)
* **Top 3**：[上海交通大学软件源镜像服务 (sjtu.edu.cn)](https://mirrors.sjtug.sjtu.edu.cn/)
* **Top 4**：[中国科技大学开源镜像站](https://mirrors.ustc.edu.cn/)
* **Top 5**：[阿里巴巴开源镜像站-OPSX镜像站-阿里云开发者社区 (aliyun.com)](https://developer.aliyun.com/mirror/)
* **Top 6**：[欢迎访问网易开源镜像站 (163.com)](http://mirrors.163.com/)
* **Top 7**：[DaoCloud | Docker 极速下载](http://get.daocloud.io/)

## 6. 国内 Docker 镜像仓库
```bash
cat>/etc/docker/daemon.json<<EOF
{
    "registry-mirrors": [
       "http://hub-mirror.c.163.com",
       "https://registry.docker-cn.com",
       "https://docker.mirrors.ustc.edu.cn"
    ]
}
EOF
```