// components/table/table.ts

/**
 *    title: '产品领域',    标题
 *    dataIndex: 'productArea',   字段
 *    width: '160rpx',    宽度
 *    bgColor: '#eeeeee',   背景色
 *    customized: true     定制
 *    subTitle: '(万元)',   副标题
 *    link: true           链接
 *    zebra:#ef8400         斑马纹颜色
 */

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    columns: {  // 文案
      type: Array,
      value: []
    },
    dataSource: {  // 文案
      type: Array,
      value: []
    },
    total: {  // 文案
      type: Number,
      value: 0
    },
    showLoad: {  // 显示加载更多
      type: Boolean,
      value: false
    },
    width: {  // 宽度
      type: String,
      value: ''
    },
    height: {  // 表格高度
      type: String,
      value: ''
    },
    zebra: {
      type: Boolean
    },
    fixHeader: { // 固定头部
      type: Boolean
    }
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
    tapData(e) {
      let { item, key } = e.currentTarget.dataset;
      this.triggerEvent('itemtap', { item, key })
    },
    onSearch() {
      this.triggerEvent('request', null)
    }
  }
})
