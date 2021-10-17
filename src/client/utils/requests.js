const API_KEY = process.env.API_KEY

export default {
  fetchNewest: {
    title: 'Newest',
    url: `/newest/all?API_KEY=${API_KEY}`
  },
  fetchTrending: {
    title: 'Trending',
    url: `/newest/all/week?API_KEY=${API_KEY}`
  }
}
