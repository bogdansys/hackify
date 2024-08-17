import React from 'react';

function Login() {
    return (
        <div>
            <style jsx="true">{`
                /* Define CSS Variables for Consistency */
                :root {
                    --primary-color: #00ff00; /* Neon Green */
                    --background-color: #000000; /* Black */
                    --transparent-dark: rgba(0, 0, 0, 0.8);
                    --text-color: #00ff00;
                    --grid-color: rgba(0, 255, 0, 0.2);
                }

                /* Body Styling */
                body {
                    margin: 0;
                    font-family: 'Courier New', Courier, monospace;
                    background-color: var(--background-color);
                    color: var(--text-color);
                    overflow: hidden;
                }

                /* Main Container */
                .login-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    position: relative;
                    text-align: center;
                    overflow: hidden;
                    perspective: 1000px;
                }

                /* Header Styling */
                .login-header {
                    z-index: 10;
                    background-color: var(--transparent-dark);
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 20px var(--primary-color);
                    backdrop-filter: blur(10px);
                    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
                    transition: transform 0.5s ease, box-shadow 0.5s ease;
                }

                /* Header Hover Effect */
                .login-header:hover {
                    transform: perspective(800px) rotateX(15deg) rotateY(15deg);
                    box-shadow: 0 0 40px var(--primary-color);
                }

                /* Button Styling */
                .btn-spotify {
                    background-color: var(--transparent-dark);
                    color: var(--primary-color);
                    padding: 15px 30px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-size: 1.5rem;
                    transition: transform 0.5s ease, box-shadow 0.5s ease, background-color 0.3s ease;
                    border: 2px solid var(--primary-color);
                    box-shadow: 0 0 10px var(--primary-color);
                    transform: perspective(800px) rotateX(0deg) rotateY(0deg);
                }

                /* Button Hover Effect */
                .btn-spotify:hover {
                    background-color: var(--primary-color);
                    color: var(--background-color);
                    transform: perspective(800px) rotateX(-10deg) rotateY(-10deg);
                    box-shadow: 0 0 40px var(--primary-color);
                }

                /* Background Overlay */
                .background-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, var(--grid-color) 25%, transparent 25%) -50px 0,
                                linear-gradient(225deg, var(--grid-color) 25%, transparent 25%) -50px 0,
                                linear-gradient(315deg, var(--grid-color) 25%, transparent 25%),
                                linear-gradient(45deg, var(--grid-color) 25%, transparent 25%);
                    background-size: 100px 100px;
                    animation: matrixEffect 10s infinite linear;
                    z-index: 1;
                    opacity: 0.5;
                }

                /* Background Animation */
                @keyframes matrixEffect {
                    0% { background-position: 0 0; }
                    50% { background-position: 50px 50px; }
                    100% { background-position: 0 0; }
                }

                /* Hacker Text Styling */
                .hacker-text {
                    font-size: 2.5rem;
                    color: var(--primary-color);
                    text-shadow: 0 0 10px var(--primary-color);
                    animation: textFlicker 3s infinite alternate, textGlow 2s infinite ease-in-out;
                }

                /* Flicker Animation */
                @keyframes textFlicker {
                    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                        opacity: 1;
                    }
                    20%, 24%, 55% {
                        opacity: 0;
                    }
                }

                /* Glow Animation */
                @keyframes textGlow {
                    0%, 100% {
                        text-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-color), 0 0 30px var(--primary-color);
                    }
                    50% {
                        text-shadow: 0 0 20px var(--primary-color), 0 0 30px var(--primary-color), 0 0 40px var(--primary-color);
                    }
                }

                /* Social Links Container */
                .social-links {
                    display: flex;
                    justify-content: center;
                    margin-top: 20px;
                    gap: 20px;
                }

                /* Social Link Styling */
                .social-links a {
                    color: var(--primary-color);
                    font-size: 1.5rem;
                    text-decoration: none;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 2px solid var(--primary-color);
                    padding: 10px 20px;
                    border-radius: 10px;
                    display: inline-block;
                }

                .social-links a:hover {
                    transform: scale(1.2);
                    box-shadow: 0 0 10px var(--primary-color);
                    background-color: var(--primary-color);
                    color: var(--background-color);
                }
            `}</style>

            <div className="login-container">
                <div className="background-overlay"></div>
                <header className="login-header">
                    <h1 className="hacker-text">Hackify</h1>
                    <a className="btn-spotify" href="/auth/login">
                        Login with Spotify
                    </a>
                    <div className="social-links">
                        <a href="https://github.com/bogdansys" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/mihai-iordache-676444187/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Login;
