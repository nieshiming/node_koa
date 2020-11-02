module.exports = {
  getLoginUserInfo: async (userId) => {
    if (!userId) return ''

    return await new Promise((resove) =>
      setTimeout(() => {
        resove('levis')
      }, 3000)
    )
  },
}
