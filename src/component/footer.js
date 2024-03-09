import "../style/footer.css";

export default function Footer() {
  return (
    <footer className='footer'>
      <h2>
        Created By <u>Abdul Razaq</u>
      </h2>
      <div className='social-icons'>
        <a
          href='https://www.linkedin.com/in/abdul-razaq-a89038287'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            alt='Linkedin'
            className='social-img'
            src='https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png'
          />
        </a>
      </div>
    </footer>
  );
}
