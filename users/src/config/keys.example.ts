// This is an example of what yours keys.ts file should look like.
const keys = {
    endpoint: 'https://accounts.spotify.com/authorize',
    clientId: 'yourclientid',
    redirectUri: 'frontendurl',
    scopes : [
        'user-top-read',
        'user-read-currently-playing',
        'user-read-playback-state',
    ]

}

export default keys;