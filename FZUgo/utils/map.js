/* utils/map.js */
// 地图相关
module.exports = {
  // 腾讯位置服务API
  mapKey: "7B7BZ-O5J6V-ZRVPM-5RZJT-CO2GO-IIBDX", // 必填

  // 地图部分参数

  // 学校中心点坐标
  longitude: 119.195924,
  latitude: 26.056552,

  // 是否展示 POI 点
  enablepoi: true,
  // 是否显示带有方向的当前定位点
  showLocation: true,
  // 缩放级别
  scale: 14.7,
  // 最小缩放级别，比缩放级别小0.2-0.3为宜
  minscale: 14.4,

    // 默认地点
    default_point: {
      name: "图书馆",
      aliases: "图书馆",
      desc: "图书馆",
      longitude: 119.197602,
      latitude: 26.058744,
    },
  // 地图边界
  boundary: {
    //西南角
    southwest_latitude: 26.045707,
    southwest_longitude: 119.184663,
    //东北角
    northeast_latitude: 26.069006,
    northeast_longitude: 119.205263,
  },

  // 学校边界
  school_boundary: {
    // 东（学校最东端点的 经度，地图最右端）
    east: 119.215196,
    // 西（学校最西端点的 经度，地图最左端）
    west: 119.190187,
    // 南（学校最南端点的 纬度，地图最下端）
    south: 26.053627,
    // 北（学校最北端点的 纬度，地图最上端）
    north: 26.07654,
  },

  // 自定义图层
  groundoverlay: {
    // 图层透明度 0-1，对应 0%-100%
    opacity: 0.9,
    //西南角
    southwest_latitude: 26.045707,
    southwest_longitude: 119.184663,
    //东北角
    northeast_latitude: 26.069006,
    northeast_longitude: 119.205263,
  },

  // 自定义地图
  map_bottom: "",  //放福大的手绘图

  // 闭合多边形
  // points: [{
  //   "latitude": "25.100222",
  //   "longitude": "110.297022"
  // }, {
  //   "latitude": "25.094058",
  //   "longitude": "110.298135"
  // }, {
  //   "latitude": "25.093637",
  //   "longitude": "110.295346"
  // }, {
  //   "latitude": "25.093071",
  //   "longitude": "110.295346"
  // }, {
  //   "latitude": "25.092963",
  //   "longitude": "110.295260"
  // }, {
  //   "latitude": "25.092738",
  //   "longitude": "110.294609"
  // }, {
  //   "latitude": "25.092652",
  //   "longitude": "110.293919"
  // }, {
  //   "latitude": "25.092759",
  //   "longitude": "110.292619"
  // }, {
  //   "latitude": "25.092684",
  //   "longitude": "110.292222"
  // }, {
  //   "latitude": "25.092516",
  //   "longitude": "110.291643"
  // }, {
  //   "latitude": "25.092415",
  //   "longitude": "110.291406"
  // }, {
  //   "latitude": "25.092358",
  //   "longitude": "110.291346"
  // }, {
  //   "latitude": "25.092068",
  //   "longitude": "110.291269"
  // }, {
  //   "latitude": "25.091742",
  //   "longitude": "110.291281"
  // }, {
  //   "latitude": "25.091471",
  //   "longitude": "110.291247"
  // }, {
  //   "latitude": "25.091225",
  //   "longitude": "110.291141"
  // }, {
  //   "latitude": "25.091120",
  //   "longitude": "110.291049"
  // }, {
  //   "latitude": "25.090474",
  //   "longitude": "110.289739"
  // }, {
  //   "latitude": "25.089874",
  //   "longitude": "110.288795"
  // }, {
  //   "latitude": "25.089740",
  //   "longitude": "110.288699"
  // }, {
  //   "latitude": "25.089601",
  //   "longitude": "110.288662"
  // }, {
  //   "latitude": "25.089457",
  //   "longitude": "110.288685"
  // }, {
  //   "latitude": "25.089238",
  //   "longitude": "110.288831"
  // }, {
  //   "latitude": "25.088793",
  //   "longitude": "110.289235"
  // }, {
  //   "latitude": "25.088673",
  //   "longitude": "110.289391"
  // }, {
  //   "latitude": "25.088584",
  //   "longitude": "110.289541"
  // }, {
  //   "latitude": "25.088365",
  //   "longitude": "110.290198"
  // }, {
  //   "latitude": "25.088154",
  //   "longitude": "110.290614"
  // }, {
  //   "latitude": "25.088036",
  //   "longitude": "110.290651"
  // }, {
  //   "latitude": "25.087950",
  //   "longitude": "110.290620"
  // }, {
  //   "latitude": "25.087857",
  //   "longitude": "110.290465"
  // }, {
  //   "latitude": "25.087757",
  //   "longitude": "110.290027"
  // }, {
  //   "latitude": "25.087857",
  //   "longitude": "110.288917"
  // }, {
  //   "latitude": "25.087910",
  //   "longitude": "110.288503"
  // }, {
  //   "latitude": "25.087915",
  //   "longitude": "110.288283"
  // }, {
  //   "latitude": "25.087870",
  //   "longitude": "110.288079"
  // }, {
  //   "latitude": "25.087769",
  //   "longitude": "110.287903"
  // }, {
  //   "latitude": "25.087636",
  //   "longitude": "110.287730"
  // }, {
  //   "latitude": "25.087799",
  //   "longitude": "110.287399"
  // }, {
  //   "latitude": "25.087815",
  //   "longitude": "110.287215"
  // }, {
  //   "latitude": "25.087748",
  //   "longitude": "110.286922"
  // }, {
  //   "latitude": "25.087745",
  //   "longitude": "110.286249"
  // }, {
  //   "latitude": "25.087794",
  //   "longitude": "110.286167"
  // }, {
  //   "latitude": "25.087923",
  //   "longitude": "110.286151"
  // }, {
  //   "latitude": "25.088029",
  //   "longitude": "110.286090"
  // }, {
  //   "latitude": "25.088130",
  //   "longitude": "110.285996"
  // }, {
  //   "latitude": "25.088170",
  //   "longitude": "110.285840"
  // }, {
  //   "latitude": "25.088155",
  //   "longitude": "110.285634"
  // }, {
  //   "latitude": "25.088250",
  //   "longitude": "110.285160"
  // }, {
  //   "latitude": "25.088378",
  //   "longitude": "110.284901"
  // }, {
  //   "latitude": "25.088434",
  //   "longitude": "110.284749"
  // }, {
  //   "latitude": "25.088453",
  //   "longitude": "110.284542"
  // }, {
  //   "latitude": "25.088355",
  //   "longitude": "110.282812"
  // }, {
  //   "latitude": "25.088465",
  //   "longitude": "110.282303"
  // }, {
  //   "latitude": "25.088480",
  //   "longitude": "110.282125"
  // }, {
  //   "latitude": "25.088436",
  //   "longitude": "110.281951"
  // }, {
  //   "latitude": "25.088344",
  //   "longitude": "110.281741"
  // }, {
  //   "latitude": "25.088332",
  //   "longitude": "110.281567"
  // }, {
  //   "latitude": "25.088346",
  //   "longitude": "110.281310"
  // }, {
  //   "latitude": "25.088238",
  //   "longitude": "110.281098"
  // }, {
  //   "latitude": "25.089367",
  //   "longitude": "110.278519"
  // }, {
  //   "latitude": "25.090947",
  //   "longitude": "110.279331"
  // }, {
  //   "latitude": "25.092116",
  //   "longitude": "110.279895"
  // }, {
  //   "latitude": "25.092476",
  //   "longitude": "110.280050"
  // }, {
  //   "latitude": "25.093280",
  //   "longitude": "110.280326"
  // }, {
  //   "latitude": "25.095522",
  //   "longitude": "110.281030"
  // }, {
  //   "latitude": "25.096344",
  //   "longitude": "110.281277"
  // }, {
  //   "latitude": "25.096772",
  //   "longitude": "110.281378"
  // }, {
  //   "latitude": "25.097009",
  //   "longitude": "110.281408"
  // }, {
  //   "latitude": "25.097528",
  //   "longitude": "110.281437"
  // }, {
  //   "latitude": "25.097726",
  //   "longitude": "110.281434"
  // }, {
  //   "latitude": "25.098039",
  //   "longitude": "110.281399"
  // }, {
  //   "latitude": "25.098682",
  //   "longitude": "110.281295"
  // }, {
  //   "latitude": "25.098805",
  //   "longitude": "110.281255"
  // }, {
  //   "latitude": "25.099371",
  //   "longitude": "110.281640"
  // }, {
  //   "latitude": "25.099575",
  //   "longitude": "110.282132"
  // }, {
  //   "latitude": "25.099862",
  //   "longitude": "110.282913"
  // }, {
  //   "latitude": "25.099962",
  //   "longitude": "110.283328"
  // }, {
  //   "latitude": "25.099985",
  //   "longitude": "110.283532"
  // }, {
  //   "latitude": "25.100029",
  //   "longitude": "110.283999"
  // }, {
  //   "latitude": "25.100193",
  //   "longitude": "110.287745"
  // }, {
  //   "latitude": "25.100293",
  //   "longitude": "110.289988"
  // }, {
  //   "latitude": "25.100354",
  //   "longitude": "110.292872"
  // }, {
  //   "latitude": "25.100504",
  //   "longitude": "110.296608"
  // }]
}