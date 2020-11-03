export const getLoginUserInfo = async (userId: number) => {
  if (!userId) return '';

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('levis nsm');
    }, 3000);
  });
};

export const demo = () => console.log(1);
