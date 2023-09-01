
import React from 'react';
import './contact.css';
import {ReactComponent as GitHubLogo} from './contatLogos/github_logo.svg';
import {ReactComponent as InstagramLogo} from './contatLogos/instagram_logo.svg';
import {ReactComponent as LinkedInLogo} from './contatLogos/linkedin_logo.svg';
import {ReactComponent as RedditLogo} from './contatLogos/reddit_logo.svg';
import {ReactComponent as PayPalMeLogo} from './contatLogos/paypalme_logo.svg';
import {ReactComponent as GitHubSponsorLogo} from './contatLogos/githubsponsor_logo.svg';

const Contact = () => {

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('concatofilippo94@gmail.com');
        alert('Email copied to clipboard!');
    };

    return (
        <div className="contact-container">
            <label>Email</label>
            <section className="email-section">
                <input type="text" value="concatofilippo94@gmail.com" readOnly />
                <button onClick={copyEmailToClipboard}><img src="./contactLogos/copy.svg" alt="Copy Icon" /></button>
            </section>

            <section className="socials-section">
                <label>Socials</label>
                <a href="https://github.com/yourUsername" target="_blank" rel="noopener noreferrer"><GitHubLogo /><p>@fppcnc</p></a>
                <a href="https://instagram.com/yourUsername" target="_blank" rel="noopener noreferrer"><InstagramLogo /><p>@fppcnc</p></a>
                <a href="https://linkedin.com/in/yourUsername" target="_blank" rel="noopener noreferrer"><LinkedInLogo /><p>@fppcnc</p></a>
                <a href="https://reddit.com/u/yourUsername" target="_blank" rel="noopener noreferrer"><RedditLogo /><p>@fppcnc</p></a>
            </section>
            <label>Support</label>
            <section className="support-section">
                <a href="https://paypal.me/yourUsername" target="_blank" rel="noopener noreferrer"><PayPalMeLogo /><p>paypal.me</p></a>
                <a href="https://github.com/sponsors/yourUsername" target="_blank" rel="noopener noreferrer"><GitHubSponsorLogo /><p>GitHub Sponsor</p></a>
            </section>
        </div>
    );
}

export default Contact;
