
import React from 'react';
import './contact.css';
import {ReactComponent as GitHubLogo} from './contatLogos/github_logo.svg';
import {ReactComponent as InstagramLogo} from './contatLogos/instagram_logo.svg';
import {ReactComponent as LinkedInLogo} from './contatLogos/linkedin_logo.svg';
import {ReactComponent as RedditLogo} from './contatLogos/reddit_logo.svg';
import {ReactComponent as PayPalLogo} from './contatLogos/paypal_logo.svg';
import {ReactComponent as GitHubSponsorLogo} from './contatLogos/githubsponsor_logo.svg';
import {ReactComponent as CopyLogo} from "./contatLogos/copy.svg";

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
                <button onClick={copyEmailToClipboard}><CopyLogo /></button>
            </section>
            <label>Socials</label>
            <section className="socials-section">
                <a href="https://github.com/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubLogo /><p>#fppcnc</p></a>
                <a href="https://www.instagram.com/fppcnc/" target="_blank" rel="noopener noreferrer"><InstagramLogo /><p>@fppcnc</p></a>
                <a href="https://www.linkedin.com/in/filippo-concato-a675b4282/" target="_blank" rel="noopener noreferrer"><LinkedInLogo /><p>filippo-concato</p></a>
                <a href="https://www.reddit.com/user/Fel_ope" target="_blank" rel="noopener noreferrer"><RedditLogo /><p>u/Fel_ope</p></a>
            </section>
            <label>Support</label>
            <section className="support-section">
                <a href="https://paypal.me/fppcnc?country.x=DE&locale.x=en_US" target="_blank" rel="noopener noreferrer"><PayPalLogo /><p>paypal.me</p></a>
                <a href="https://github.com/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubSponsorLogo /><p>GitHub Sponsor</p></a>
            </section>
        </div>
    );
}

export default Contact;
