// components/load-more/load-more.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      text: {  // 文案
          type: String,
          value: '查看更多'
      },
      finishText: {  // 文案
          type: String,
          value: '到底啦！'
      },
      bottom: {  // 底部间隔
          type: String,
          value: ''
      },
      hideShow: {  // 显示
          type: Boolean,
          value: false
      },
      finish: {
          type: Boolean,
          value: false
      },
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      search() {
          this.triggerEvent('search', null)
      },
  }
})
