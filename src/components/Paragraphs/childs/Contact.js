import React, {useState} from 'react';
import {ReactComponent as GitHubLogo} from '../../../assets/contatLogos/github_logo.svg';
import {ReactComponent as InstagramLogo} from '../../../assets/contatLogos/instagram_logo.svg';
import {ReactComponent as LinkedInLogo} from '../../../assets/contatLogos/linkedin_logo.svg';
import {ReactComponent as RedditLogo} from '../../../assets/contatLogos/reddit_logo.svg';
import {ReactComponent as SpotifyLogo} from '../../../assets/contatLogos/spotify_logo.svg';
import {ReactComponent as PayPalLogo} from '../../../assets/contatLogos/paypal_logo.svg';
import {ReactComponent as GitHubSponsorLogo} from '../../../assets/contatLogos/githubsponsor_logo.svg';
import {ReactComponent as CopyLogo} from "../../../assets/contatLogos/copy.svg";

const Contact = () => {
    const [showFeedback, setShowFeedback] = useState(false);

    const email = 'concatofilippo94@gmail.com';

    const mailTo = () => {
        return <a href={`mailto:${email}`}>{email}</a>;
    };
    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('concatofilippo94@gmail.com');

        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
        }, 3000);

    };

    return (
        <div className="contact">
            <label>Email</label>
            <div className="email-section">
                <div className="email-container">
                    {showFeedback ? <p className="feedback">Email copied to clipboard!</p> :
                    <p>{mailTo()}</p>}
                <button onClick={copyEmailToClipboard} className="copyLogoButton"><CopyLogo/></button>
            </div>
            </div>
            <label>Socials</label>
            <div className="socials-section">
                <a href="https://github.com/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubLogo/>
                    <p>/fppcnc</p></a>
                <a href="https://www.instagram.com/fppcnc/" target="_blank" rel="noopener noreferrer"><InstagramLogo/>
                    <p>@fppcnc</p></a>
                <a href="https://open.spotify.com/user/fppcnc?si=3e6f63b8e7b7400a&nd=1" target="_blank" rel="noopener noreferrer"><SpotifyLogo/>
                    <p>#fppcnc</p></a>
                <a href="https://www.linkedin.com/in/filippo-concato-a675b4282/" target="_blank"
                   rel="noopener noreferrer"><LinkedInLogo/><p>filippo-concato</p></a>
                <a href="https://www.reddit.com/user/Fel_ope" target="_blank" rel="noopener noreferrer"><RedditLogo/>
                    <p>u/Fel_ope</p></a>
            </div>
            <label>Support</label>
            <div className="support-section">
                <div>
                    <a href="https://paypal.me/fppcnc?country.x=DE&locale.x=en_US" target="_blank"
                       rel="noopener noreferrer"><PayPalLogo/><p>paypal.me</p></a>
                    <a href="https://github.com/sponsors/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubSponsorLogo/>
                        <p>GitHub Sponsor</p></a>
                </div>
                <p className="support-introduction">Every little bit you chip in goes a long way. It's not
                    just about the money; it's about believing in what I'm doing. Your support keeps the dream alive and
                    the wheels turning. So, if you're thinking of helping out, just know it means the world to me.</p>
                <p className="support-introduction">Big thanks for even considering it! Let's rock this together! Cheers!</p>
            </div>
        </div>
    );
}

export default Contact;
