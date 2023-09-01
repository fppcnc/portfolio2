import React, {useState} from 'react';
import './contact.css';
import {ReactComponent as GitHubLogo} from './contatLogos/github_logo.svg';
import {ReactComponent as InstagramLogo} from './contatLogos/instagram_logo.svg';
import {ReactComponent as LinkedInLogo} from './contatLogos/linkedin_logo.svg';
import {ReactComponent as RedditLogo} from './contatLogos/reddit_logo.svg';
import {ReactComponent as PayPalLogo} from './contatLogos/paypal_logo.svg';
import {ReactComponent as GitHubSponsorLogo} from './contatLogos/githubsponsor_logo.svg';
import {ReactComponent as CopyLogo} from "./contatLogos/copy.svg";

const Contact = () => {
    const [showFeedback, setShowFeedback] = useState(false);


    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText('concatofilippo94@gmail.com');

        setShowFeedback(true);
        setTimeout(() => {
            setShowFeedback(false);
        }, 3000);

    };

    return (
        <div className="contact-container">
            <label>Email</label>
            <section className="email-section">

                {showFeedback ? <p>Email copied to clipboard!</p> :
                    <p>concatofilippo94@gmail.com</p>}
                <button onClick={copyEmailToClipboard}><CopyLogo/></button>
            </section>
            <label>Socials</label>
            <section className="socials-section">
                <a href="https://github.com/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubLogo/>
                    <p>#fppcnc</p></a>
                <a href="https://www.instagram.com/fppcnc/" target="_blank" rel="noopener noreferrer"><InstagramLogo/>
                    <p>@fppcnc</p></a>
                <a href="https://www.linkedin.com/in/filippo-concato-a675b4282/" target="_blank"
                   rel="noopener noreferrer"><LinkedInLogo/><p>filippo-concato</p></a>
                <a href="https://www.reddit.com/user/Fel_ope" target="_blank" rel="noopener noreferrer"><RedditLogo/>
                    <p>u/Fel_ope</p></a>
            </section>
            <label>Support</label>
            <p className="support-introduction">Every bit of support propels what I love forward.

            Your support does more than just fund a project. It fuels my passion, keeps my dream alive, and directly impacts the costs associated with bringing this vision to life. Every donation ensures that all this remains active, updated, and continues to make a difference.

            Thank you for considering supporting my journey and this project. Let's make a difference together! </p>
            <section className="support-section">

                <a href="https://paypal.me/fppcnc?country.x=DE&locale.x=en_US" target="_blank"
                   rel="noopener noreferrer"><PayPalLogo/><p>paypal.me</p></a>
                <a href="https://github.com/fppcnc" target="_blank" rel="noopener noreferrer"><GitHubSponsorLogo/>
                    <p>GitHub Sponsor</p></a>
            </section>
        </div>
    );
}

export default Contact;
