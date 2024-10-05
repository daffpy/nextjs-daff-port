//import querystring from 'querystring';

import { Buffer } from "buffer";

const client_id = "08438b52ccfe41c483c7bf4fc4852264";
const client_secret = "f631fc95dbfd4e7cbf823596bf155e75";
const refresh_token = "AQDRXslwKItQb1AscyBUU70e-Wyy9grdqyGnudGdqdu9xTpE30O_PiSlAo_zqVs-u1wXArACuGfaCjy3ZH2uE7hxDUFfCuSpS36QSCIoXgoT54M9gv3kdBQxCMkyFxwAChU";

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};