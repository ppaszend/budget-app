export default defineEventHandler((event) => {
  return {
    name: 'John Kowalski',
    email: 'jkowalski@gmail.com',
    avatar: 'https://www.perfocal.com/blog/content/images/size/w960/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg',
    premium: {
      active: true,
      till: '2023-11-20',
    },
    settings: {
      language: 'en',
      currency: 'USD',
    }
  }
});
