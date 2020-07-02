export const keys = {
    endpoint: 'https://accounts.spotify.com/authorize',
    clientId: 'c9a7e1711cc74a95b3a1fd99fb3407e2',
    redirectUri: 'http://localhost:3000',
    scopes : [
        'user-top-read',
        'user-read-currently-playing',
        'user-read-playback-state',
    ],
}

export const route = `${keys.endpoint}?client_id=${keys.clientId}&redirect_uri=${keys.redirectUri}&scope=${keys.scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`;