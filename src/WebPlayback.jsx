import React, { useState, useEffect } from 'react';

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function WebPlayback(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then( state => { 
                    (!state)? setActive(false) : setActive(true) 
                });

            }));

            player.connect();

        };
    }, []);

    return (
        <div>
            <style jsx="true">{`
                :root {
                    --primary-color: #00ff00;
                    --background-color: #000000;
                    --transparent-dark: rgba(0, 0, 0, 0.8);
                    --text-color: #00ff00;
                }

                body {
                    margin: 0;
                    font-family: 'Courier New', Courier, monospace;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    overflow: hidden;
                }

                .container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    text-align: center;
                    overflow: hidden;
                    position: relative;
                }

                .background-image {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 200%;
                    height: 200%;
                    background-size: cover;
                    background-position: center;
                    filter: blur(30px);
                    transform: translate(-50%, -50%) scale(1.2);
                    z-index: 0;
                    opacity: 0.7;
                }

                .main-wrapper {
                    background-color: var(--transparent-dark);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 0 20px var(--primary-color);
                    backdrop-filter: blur(10px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    max-width: 400px;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }

                .now-playing__cover {
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 0 0 20px var(--primary-color);
                    transition: transform 0.5s ease, box-shadow 0.5s ease;
                }

                .now-playing__cover:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 40px var(--primary-color);
                }

                .now-playing__side {
                    margin-top: 20px;
                    text-align: center;
                }

                .now-playing__name {
                    font-size: 1.5rem;
                    color: var(--primary-color);
                    text-shadow: 0 0 10px var(--primary-color);
                    animation: textGlow 2s infinite ease-in-out;
                }

                .now-playing__artist {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    color: var(--primary-color);
                }

                .btn-spotify {
                    margin: 10px;
                    padding: 10px 20px;
                    border-radius: 50px;
                    background-color: var(--transparent-dark);
                    color: var(--primary-color);
                    font-size: 1rem;
                    border: 2px solid var(--primary-color);
                    box-shadow: 0 0 10px var(--primary-color);
                    transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.3s ease;
                }

                .btn-spotify:hover {
                    background-color: var(--primary-color);
                    color: var(--background-color);
                    box-shadow: 0 0 40px var(--primary-color);
                }

                @keyframes textGlow {
                    0%, 100% {
                        text-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color);
                    }
                    50% {
                        text-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color), 0 0 40px var(--primary-color);
                    }
                }
            `}</style>

            <div className="container">
                {current_track.album.images[0].url && (
                    <div 
                        className="background-image" 
                        style={{ backgroundImage: `url(${current_track.album.images[0].url})` }}
                    ></div>
                )}
                <div className="main-wrapper">
                    <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />
                    <div className="now-playing__side">
                        <div className="now-playing__name">{current_track.name}</div>
                        <div className="now-playing__artist">{current_track.artists[0].name}</div>

                        <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                            &lt;&lt;
                        </button>

                        <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
                            { is_paused ? "PLAY" : "PAUSE" }
                        </button>

                        <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
                            &gt;&gt;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebPlayback;
