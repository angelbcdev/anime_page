const FooterAnime = () => {

  return (
    <footer className="px-8 w-full max-w-[1080px]   h-[480px] sm:h-[250px] bg-bgPrimary ">
      <div className="BACK-to-top-div  rounded-xl  px-4">

        <div className="svg-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
          <a className="hover:bg-primary rounded-xl cursor-pointer px-4 hover:text-white" href="#navbar">BACK TO TOP</a>
        </div>
      </div>
      <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:h-[100px] sm:items-center">
        <li>A-Z List</li>
        <li>Recently Added</li>
        <li>UpComing</li>
        <li>Most Watched</li>
        <li>Request</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
      <div className="footer-container">
        <div className="footer-img-and-p">
          <img src="/assets/logo-sin-fondo.png" alt="" />
          <p className="text">copyright anime suge.All rights reserved</p>
        </div>
        <div className="more-info">
          <p>made with ❤️ for anime users</p>
          <p>
            Disclaimer: This site does not store any files.All contents are
            provoded by non affilated third parties.
          </p>
        </div>
      </div>
    </footer>
  )
};

export default FooterAnime; 