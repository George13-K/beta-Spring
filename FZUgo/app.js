// app.js
App({
    /**
     * 生命周期函数--监听页面加载
     */
    onLaunch() {
        wx.cloud.init({
            env: 'george-8gktege9596a5ba5' // 云开发id
        })
    },

    globalData: {
        userInfo: null,
    }
})