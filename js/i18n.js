// 多语言资源
const resources = {
    'zh-CN': {
        //首页index相关翻译
        'app-name': 'M3U8播放器',
        'app-description': '专业的HLS流媒体在线播放工具',
        'home': '主页',
        'help-center': '帮助中心',
        'stream-placeholder': '请输入M3U8流媒体地址...',
        'load-video': '加载视频',
        'waiting-stream': '等待加载视频流...',
        'loading-stream': '正在加载视频流...',
        'stream-success': '视频流加载成功！',
        'network-error': '网络错误: ',
        'media-error': '媒体错误: ',
        'fatal-error': '不可恢复的错误',
        'unsupported-browser': '您的浏览器不支持HLS播放',
        'quality': '清晰度:',
        'auto': '自动',
        'resolution': '分辨率:',
        'bitrate': '码率:',
        'buffer-length': '缓冲长度:',
        'current-level': '当前等级:',
        'footer-line1': '基于hls.js实现的M3U8播放器 | 仅供学习使用',
        'footer-line2': 'hls.js是基于Apache License 2.0的开源项目，您可以在遵守许可证条款的前提下使用',
        //帮助中心相关翻译
        'help-title': 'M3U8帮助中心',
        'help-description': '了解M3U8格式和使用方法',
        'faq1-question': '什么是M3U8格式？',
        'faq1-answer': 'M3U8是UTF-8编码的M3U播放列表文件格式，用于HTTP Live Streaming (HLS)协议。\nHLS是苹果公司开发的流媒体传输协议，它将视频流切分成小的TS文件片段，并通过M3U8索引文件来组织这些片段。',
        'faq2-question': 'M3U8有什么优势？',
        'faq2-answer': '• 自适应码率：可根据用户网络状况自动切换不同质量的视频流\n• 兼容性好：得到大多数现代浏览器和设备支持\n• 防火墙友好：使用标准HTTP端口，不易被防火墙阻挡\n• 支持加密：可对视频内容进行加密保护',
        'faq3-question': '如何使用M3U8播放器？',
        'faq3-answer': '1. 获取M3U8流媒体地址\n2. 在输入框中粘贴M3U8地址\n3. 点击"加载视频"按钮\n4. 使用播放器控制条控制播放',
        'faq4-question': '为什么无法播放某些M3U8链接？',
        'faq4-answer': '• CORS限制：服务器未设置正确的跨域资源共享策略\n• 格式不支持：链接可能不是有效的M3U8格式\n• 网络问题：链接可能已失效或需要特定网络环境\n• 加密内容：需要特定解密密钥才能播放的加密流',
        'faq5-question': 'M3U8与MP4有什么区别？',
        'faq5-answer': 'M3U8是流媒体协议格式，适合实时播放和自适应码率调整，而MP4是文件格式，需要完整下载才能播放。\nM3U8将视频切分为小片段，可以实现快速启动和无缝切换，而MP4通常需要缓冲较长时间。',
        'faq6-question': '如何获取M3U8链接？',
        'faq6-answer': 'M3U8链接通常由视频服务提供商生成。您可以通过以下方式获取：\n• 使用浏览器开发者工具分析网络请求\n• 使用专门抓取流媒体链接的浏览器扩展\n• 从提供M3U8链接的在线服务获取',
        //404页面
        "404-title":'页面未找到',
        "404-message":'抱歉，您访问的页面不存在。可能是URL地址输入错误，或者页面已被移除。',
        "404-go-home":'返回主页'
    },
    'en': {
         //首页index相关翻译
        'app-name': 'M3U8 Player',
        'app-description': 'Professional HLS Streaming Player',
        'home': 'Home',
        'help-center': 'Help Center',
        'stream-placeholder': 'Please enter M3U8 stream URL...',
        'load-video': 'Load Video',
        'waiting-stream': 'Waiting for video stream...',
        'loading-stream': 'Loading video stream...',
        'stream-success': 'Video stream loaded successfully!',
        'network-error': 'Network error: ',
        'media-error': 'Media error: ',
        'fatal-error': 'Unrecoverable error',
        'unsupported-browser': 'Your browser does not support HLS playback',
        'quality': 'Quality:',
        'auto': 'Auto',
        'resolution': 'Resolution:',
        'bitrate': 'Bitrate:',
        'buffer-length': 'Buffer length:',
        'current-level': 'Current level:',
        'footer-line1': 'M3U8 Player based on hls.js | For learning purposes only',
        'footer-line2': 'hls.js is open source under Apache License 2.0, you can use it in compliance with the license terms',
        // 帮助中心相关翻译
        'help-title': 'M3U8 Help Center',
        'help-description': 'Learn about M3U8 format and usage',
        'faq1-question': 'What is M3U8 format?',
        'faq1-answer': 'M3U8 is a UTF-8 encoded M3U playlist file format used for HTTP Live Streaming (HLS) protocol.\nHLS is a streaming protocol developed by Apple that breaks video streams into small TS file segments and organizes them through M3U8 index files.',
        'faq2-question': 'What are the advantages of M3U8?',
        'faq2-answer': '• Adaptive bitrate: Automatically switch between different quality video streams based on user network conditions\n• Good compatibility: Supported by most modern browsers and devices\n• Firewall friendly: Uses standard HTTP ports, less likely to be blocked by firewalls\n• Support encryption: Video content can be encrypted for protection',
        'faq3-question': 'How to use M3U8 player?',
        'faq3-answer': '1. Get M3U8 stream URL\n2. Paste the M3U8 URL in the input box\n3. Click the "Load Video" button\n4. Use the player controls to manage playback',
        'faq4-question': 'Why can\'t some M3U8 links be played?',
        'faq4-answer': '• CORS restrictions: The server does not set correct cross-origin resource sharing policies\n• Format not supported: The link may not be a valid M3U8 format\n• Network issues: The link may be invalid or require a specific network environment\n• Encrypted content: Encrypted streams that require specific decryption keys',
        'faq5-question': 'What is the difference between M3U8 and MP4?',
        'faq5-answer': 'M3U8 is a streaming protocol format suitable for real-time playback and adaptive bitrate adjustment, while MP4 is a file format that requires complete download to play.\nM3U8 splits video into small segments for fast startup and seamless switching, while MP4 usually requires longer buffering time.',
        'faq6-question': 'How to get M3U8 links?',
        'faq6-answer': 'M3U8 links are typically generated by video service providers. You can obtain them by:\n• Using browser developer tools to analyze network requests\n• Using browser extensions specifically for capturing streaming links\n• Getting from online services that provide M3U8 links',
        //404
        '404-title':"Page Not Found",
        '404-message':'Sorry, the page you are looking for does not exist. It might have been moved or deleted.',
        '404-go-home':'Go Home'
    }
};

let currentLanguage = localStorage.getItem('language') || 'zh-CN';

document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language-selector');

    // 设置当前语言
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }

    // 初始化多语言
    updatePageLanguage();

    // 语言切换
    if (languageSelector) {
        languageSelector.addEventListener('change', function () {
            currentLanguage = this.value;
            localStorage.setItem('language', currentLanguage);
            updatePageLanguage();
        });
    }
});

// 获取翻译文本
function getTranslation(key) {
    return resources[currentLanguage][key] || key;
}

// 更新页面语言
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = getTranslation(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = getTranslation(key);
    });
}
