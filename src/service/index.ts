export const getLoginUserInfo = async (userId: number) => {
  if (!userId) return '';

  return await new Promise((resove) =>
    setTimeout(() => {
      resove('levis nsm');
    }, 3000),
  );
};
