const Banner = () => (
  <div className="main-banner img-container dark-color-alt">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img 
          className="main-banner__img"
          src="https://images.squarespace-cdn.com/content/v1/57586ec3746fb979240346ae/1560707746945-QM2PNPJ7F09PEEEAZ7XJ/Depositphotos_79027008_l-2015.jpg?format=1500w"
          alt="bannerlogo"
         />
        <div className="main-banner__data s-center">
          <p className="s-mb-0 t2">Francisco Javier Giannico Villalobos</p>
          <p>Frontend Web Developer</p>
          <a className="button"
           download
           href="https://github.com/franGiannico/CV/raw/main/Francisco%20Javier%20Giannico%20(7).pdf"
           >Download CV</a>
        </div>
      </div>
    </div>
  </div>
)

export default Banner