import querystring from 'querystring';

const client_id = "08438b52ccfe41c483c7bf4fc4852264";
const client_secret = "b78554f680d649d69b6c521a720b9923";
const refresh_token = "AQBz2RMS0d7YLKyXEBJsx2PTbSVNi0u4OTrTbuJ8YYaHQE_DyWUpcXB49hlZICQLimlHpWECZXa9U7KDdC-xsgGL1Il4hvt1TdJBUYKLn670aopgWPxW-4qBLU6BRTukcIk";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};