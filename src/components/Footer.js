import './Footer.css';
import invertocatWhite from '../utils/images/github-invertocat-white.png';

export default function Footer() {
  return (
    <footer>
      <div className="centerFooterElements">
        <a 
          href='https://github.com/AntonV0/reddit-lite' 
          target='_blank' 
          rel='noreferrer'>
            <button className='githubButton'>
              <img 
                className='githubLogo' 
                src={invertocatWhite} 
                alt='GitHub logo white invertocat'
              />
              <span className='buttonText'>View project on GitHub</span>
            </button>
        </a>
        <p>&copy; Anton Vlasenko 2023</p>
      </div>
      <div className="alignRightFooterElements">
        <p><i>This is a <b>Capstone Project</b> from Codecademy's Full Stack Engineer Career Path</i></p>
        <p>
          Created by Anton Vlasenko (GitHub:&nbsp;
          <a 
            href='https://www.github.com/AntonV0' 
            id="githubProfile" 
            target='_blank' 
            rel='noreferrer'>
              AntonV0
          </a>)
        </p>
      </div>
    </footer>
  );
}