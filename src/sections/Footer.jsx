const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center sm:justify-between items-center flex-wrap-reverse gap-5">
      <p className="text-white-500">© 2025 Naman Jain. All rights reserved.</p>

      <div className="flex gap-3 w-full sm:w-auto justify-center">
        <div className="social-icon">
          <a href="https://github.com/namanjain24-sudo" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/NamanJain2006_" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
