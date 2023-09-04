import css3Image from '../../../assets/technologyLogos/css-3.png';
import gitImage from '../../../assets/technologyLogos/git.png';
import gitHubImage from '../../../assets/technologyLogos/github.png';
import html5Image from '../../../assets/technologyLogos/html5.png';
import javascriptImage from '../../../assets/technologyLogos/javascript.png';
import laravelImage from '../../../assets/technologyLogos/laravel.png';
import mysqlImage from '../../../assets/technologyLogos/mysql.png';
import nodejsImage from '../../../assets/technologyLogos/nodejs.png';
import npmImage from '../../../assets/technologyLogos/npm.png';
import phpImage from '../../../assets/technologyLogos/php.png';
import phpstormImage from '../../../assets/technologyLogos/phpstorm.png';
import reactImage from '../../../assets/technologyLogos/react.png';
import sqlImage from '../../../assets/technologyLogos/sql.png';
import symfonyImage from '../../../assets/technologyLogos/symfony.png';
import typescriptImage from '../../../assets/technologyLogos/typescript.png';
import xamppImage from '../../../assets/technologyLogos/xampp.png';
import yarnImage from '../../../assets/technologyLogos/yarn.png';

const Welcome = () => {
    const images = [
        css3Image, gitImage, gitHubImage, html5Image, javascriptImage, laravelImage, mysqlImage,
        nodejsImage, npmImage, phpImage, phpstormImage, reactImage, sqlImage, symfonyImage,
        typescriptImage, xamppImage, yarnImage
    ];

    return (
        <>
            <h1>Hello!</h1>
            <h2>I am Filippo</h2>
            <h4>a Student</h4>
            <h4>a Web Designer</h4>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
            <div className="wave wave5"></div>
            <div className="slider">
                <div className="slideTrack">
                    {images.map((image, index) => (
                        <img className="slide" src={image} alt={`tech-logo-${index}`} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Welcome;