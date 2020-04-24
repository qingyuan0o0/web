jsproxy_config({
  ver: '118',
  static_boost: {
    enable: true,
    ver: 79
  },

  // 节点配置
  node_map: {
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        'node-cfworker-2.etherdream.com': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  // node_default: 'mysite',
  node_default: /github\.io$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */

  // 本地测试时打开，否则访问的是线上的
  // assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<!-- custom html -->',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    'https://www.baidu.com/img/baidu_resultlogo@2.png': {
      replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    'http://xn--7p0a.com/': {
      content: 'Hello World!'
    },
  }
})
