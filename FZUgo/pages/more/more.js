// pages/mypage/mypage.js
var media = require("../../utils/media");
var utils = require("../../utils/utils");
Page({
  data: {
    miniprogram_name: utils.miniprogram_name,

    avatarUrl: media.avatarUrl,

    green_arrow: media.green_arrow,

    statement: media.statement,
    note: media.note,

    users: media.users,
    contact: media.contact,

    support: media.support,
    sponsor: media.sponsor,

    chat: media.chat,
    feedback: media.feedback,

    share: media.share,
    miniprogramming_ma: media.miniprogramming_ma,

    admin: media.admin,
  },

  onLoad: function () {},

  // 用户点击右上角分享
  onShareAppMessage() {},

  // 用户点击右上角分享到朋友圈
  onShareTimeline: function (res) {},

  // 软件声明
  tostatement() {
    wx.navigateTo({
      url: "../../pages/more/statement/statement",
    });
  },
  // 特别说明
  aboutus() {
    wx.showModal({
      title: "特别说明",
      content:
        "本项目是梅努斯国际工程学院软件工程课设，旨在展示相关技术和功能的应用，仅供学习与研究用途。不得用于商业用途若需获取使用许可或了解更多信息，请联系开发者。感谢您的理解与支持！",
    });
  },

  // 分享
  share() {
    wx.showModal({
      title: "推荐给好友",
      content: "点击确认即可查看小程序码\n长按小程序码即可转发给好友",
      success: (res) => {
        if (res.confirm == true) {
          wx.previewImage({
            current: this.data.miniprogramming_ma, // 当前显示图片的http链接
            urls: [this.data.miniprogramming_ma], // 需要预览的图片http链接列表
          });
        }
      },
      fail(res) {
        console.log("fail");
      },
    });
  },

  // 管理界面
  toadmin() {
    wx.cloud.callFunction({
      name: "login",
      complete: (res) => {
        // console.log(res.result.data.length)
        if (res.result.data.length != 0) {
          // console.log(res.result.data[0].name)
          var name = res.result.data[0].name;

          wx.showToast({
            title: "欢迎回来\n管理员：" + name,
            icon: "none",
            duration: 1500,
          });
          setTimeout(() => {
            wx.navigateTo({
              url: "../../pages/admin/admin",
            });
          }, 1500);
        } else {
          wx.showToast({
            title: "抱歉，同志\n您还不是管理员哦",
            icon: "none",
            duration: 1500,
          });
        }
      },
    });
  },

  // 获取openid
  getopenid() {
    wx.cloud.callFunction({
      name: "get_openid",
      complete: (res) => {
        console.log("微信用户openid", res.result.openid);
        let openid = res.result.openid;
        wx.showModal({
          title: "您的openid",
          content: openid,
          confirmText: "点击复制",
          complete: (res) => {
            if (res.confirm) {
              wx.setClipboardData({
                data: openid,
                success(res) {
                  wx.getClipboardData({
                    success(res) {
                      console.log(res.data); // data
                    },
                  });
                },
              });
            }
          },
        });
      },
    });
  },
});
