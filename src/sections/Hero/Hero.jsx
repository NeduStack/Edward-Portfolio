import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.gif';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/EDWARD-CV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight :githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.coloModeContainer} > 
            <img className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Edward" 
            /> 
            <img className={styles.colorMode} 
                src={themeIcon}
                alt="Color mode Icon"
                onClick={toggleTheme}
            />
        </div>
        <div className={styles.Info}>
            <h1>
                Ugwoke
                <br />
                Edward
            </h1>
            <h2> FullStack Developer</h2>
            <span>
                <a href="https://twitter.com" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
            
                <a href="https://github.com" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
        
                <a href="https://linkedin.com" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>
                With zeal for developing modern and futuristic React and Django Web app and python scripts to accomplish complex tasks for individual and commercial businesses.
            </p>

            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>

        </div>
    </section>
  )
}

export default Hero;