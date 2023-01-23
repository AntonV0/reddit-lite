import './Footer.css';
import invertocatWhite from '../utils/images/github-invertocat-white.png';

export default function Footer() {
  return (
    <footer>
      <div className="center-footer-elements">
        <a 
          href='https://github.com/AntonV0/reddit-lite' 
          target='_blank' 
          rel='noreferrer'>
            <button className='github-button'>
              <img 
                class='github-logo' 
                src={invertocatWhite} 
                alt='GitHub logo white invertocat'
              />
              <span className='button-text'>View project on GitHub</span>
            </button>
        </a>
        <p>&copy; Anton Vlasenko 2023</p>
      </div>
      <div className="align-right-footer-elements">
        <p><i>This is a <b>Capstone Project</b> from Codecademy's Full Stack Engineer Career Path</i></p>
        <p>
          Created by Anton Vlasenko (GitHub:&nbsp;
          <a 
            href='https://www.github.com/AntonV0' 
            id="github-profile" 
            target='_blank' 
            rel='noreferrer'>
              AntonV0
          </a>)
        </p>
      </div>
    </footer>
  );
}