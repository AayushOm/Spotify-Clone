export const authendpoint="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientID="d7e466cb86254546801e0fd9c7388957";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

export const getTokenfromUrl=()=>{
    return window.location.hash.substring(1).split("&").reduce(
        (initial,item)=>{
            var parts=item.split("=")
            initial[parts[0]]=decodeURIComponent(parts[1])
            return initial;
        },{}
    )
}

export const loginUrl=`${authendpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;