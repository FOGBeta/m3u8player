# M3U8播放器 - 专业的HLS流媒体在线播放工具

一个基于[hls.js](https://github.com/video-dev/hls.js)开发的现代Web端M3U8播放器，支持HLS流媒体播放，具有多语言界面和优雅的用户体验。

## ✨ 功能特点
🎥 **专业播放能力** - 基于hls.js库，支持M3U8/HLS流媒体格式

🌐 **多语言支持** - 内置中文和英文界面，可轻松扩展其他语言

📱 **响应式设计** - 完美适配桌面和移动设备

🎨 **现代UI设计** - 简约大气界面，毛玻璃效果，渐变背景

🔧 **易于使用** - 直观的界面设计，一键加载视频流

📖 **帮助中心** - 包含详细的M3U8格式说明和使用指南

💾 **本地存储** - 记住用户的语言偏好设置

## 🚀 快速开始
**前提条件**
现代浏览器（Chrome、Firefox、Safari、Edge等）

支持Media Source Extensions的浏览器环境

**安装与使用**
1. 下载项目
```
git clone https://github.com/your-username/m3u8-player.git
cd m3u8-player
```
2. 直接使用

打开index.html文件即可开始使用

无需额外构建步骤或依赖安装

3. 部署到服务器

将项目文件上传到Web服务器

通过浏览器访问对应的URL

## 📖 使用方法
打开M3U8播放器页面

在输入框中粘贴M3U8流媒体地址

点击"加载视频"按钮或按Enter键

使用视频播放器自带的控制条进行操作

点击右上角语言选择器切换界面语言

通过导航栏在主页和帮助中心之间切换

## 🌍 多语言支持
当前支持以下语言：

简体中文 (zh-CN)

English (en)

**添加新语言**
要添加新语言支持，请编辑HTML文件中的resources对象：
```
resources['your-language-code'] = {
    'app-name': 'Your Translation',
    'home': 'Your Translation',
    // 添加所有需要的翻译键值对
};
```
## 🛠️ 技术栈
**核心播放器**: [hls.js](https://github.com/video-dev/hls.js) - 用于HLS流媒体播放

**前端技术**: 纯HTML5 + CSS3 + JavaScript

**UI设计**: 现代CSS特性（渐变、毛玻璃效果、Flexbox布局）

**本地存储**: localStorage（用于保存语言偏好）

## 📁 项目结构
```
m3u8-player/
├── index.html          # 主播放器页面
├── help.html           # 帮助中心页面
├── README.md           # 项目说明文档
└── LICENSE             # 开源许可证文件
```
🔧 自定义配置
**修改主题颜色**
通过编辑CSS中的渐变背景色值可以轻松更改主题：
```
background: linear-gradient(135deg, #1a2a6c, #3f4c8c, #6c77a0);
```
**添加新功能**
项目采用模块化设计，可以轻松扩展新功能：

播放列表管理

画质选择

播放速度控制

字幕支持

## ❓ 常见问题
**为什么无法播放某些M3U8链接？**
可能的原因包括：

CORS限制：服务器未设置正确的跨域资源共享策略

格式不支持：链接可能不是有效的M3U8格式

网络问题：链接可能已失效或需要特定网络环境

加密内容：需要特定解密密钥才能播放的加密流

**如何在移动设备上获得最佳体验？**
确保使用最新版本的浏览器

保持稳定的网络连接

横屏观看可获得更大播放区域


## 📄 许可证
本项目基于 MIT 许可证开源 - 查看 [LICENSE](https://github.com/FOGBeta/m3u8player/blob/main/LICENSE) 文件了解详情

## 🙏 致谢
[hls.js](https://github.com/video-dev/hls.js) - 优秀的HLS客户端库

所有贡献者和用户

## 📞 联系我们
如有问题或建议，请通过以下方式联系我们：

创建 [Issue](https://img.shields.io/github/issues/FOGBeta/m3u8player)

发送邮件至: <fogbeta@qq.com>

⭐ 如果这个项目对您有帮助，请给我们一个Star！
