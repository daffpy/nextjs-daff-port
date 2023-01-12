export const getTweets = async (ids) => {
    if (ids.length === 0) {
      return [];
    }
  
    const queryParams = new URLSearchParams({
      ids: ids.join(','),
      expansions:
        'author_id',
      'tweet.fields':
        'public_metrics,created_at,id,text',
      'user.fields': 'id,name,profile_image_url,username',
    });
  
    const response = await fetch(
      `https://api.twitter.com/2/tweets?${queryParams}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_ACCESS_TOKEN}`
        }
      }
    );
  
    const tweets = await response.json();
    return tweets
}