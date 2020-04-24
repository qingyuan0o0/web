jsproxy_config({
  ver: '111',
  static_boost: {
    enable: true,
    ver: 62
  },

  
  
   // 节点配置
  node_map: {
    'defalut': {
      label: '别人的第1通道',
      lines: {
        'bitter-mouse-f2f5.mitian.workers.dev': 1,
      }
    },
    
     
    'defalut1': {
      label: '别人的第2通道',
      lines: {
        'purple-mountain-cc87.mitian.workers.dev': 1,
      }
    },
    
   
    'defalut2': {
      label: '别人的第3通道',
      lines: {
        'frosty-wave-56ec.mitian.workers.dev': 1,
      }
    },
  
    
      'defalut3': {
      label: '别人的第4通道',
      lines: {
        'fancy-hall-fec2.mitian.workers.dev': 1,
      },
    },
    
   
      'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 
        '': 1,

      }
    }
  },
    
    
    
   

  /**
   * 默认节点
   */
  node_default: 'defalut',

  /**
   * 加速节点
   */



  assets_cdn: 'assets/',

  index_path: 'index.html',

  
 
  /**
   * 
   */


  /**
   * URL 
   */
  url_handler: {
    '': {
      replace: ''
    },
    '': {
      redir: ''
    },
    '': {
      content: 'Hello World!'
    },
  }
})
