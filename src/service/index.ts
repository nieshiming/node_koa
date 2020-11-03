export default {
  getLoginUserInfo: async (userId) => {
    if (!userId) return '';

    return await new Promise((resove) =>
      setTimeout(() => {
        resove('levis1');
      }, 3000),
    );
  },
};
