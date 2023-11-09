const Footer = () => {
  return (
    <div className="px-6 md:px-28 lg:px-36 py-5 bg-black text-white">
      <div className="flex justify-between gap-5 items-center flex-col md:flex-row text-center">
        <div className="flex items-center gap-1">
          <img src="/images/logo.png" alt="" />
          <p>Website Name</p>
        </div>
        <p className="w-full md:w-[50%]">
          Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor nunc at
          aliquet. Sed nulla maecenas adipiscing proin. In magna fames faucibus
          quis laoreet vitae eu mi. Egestas elit nunc iaculis elementum sed leo
          aliquet. Vel ac mattis cras cursus aliquam semper.
        </p>
        <p className="w-full md:w-[25%]">
          Lorem ipsum dolor sit amet consectetur. Volutpat quam tortor nunc at
          aliquet. Sed nulla maecenas adipiscing proin. In magna fames as{" "}
        </p>
      </div>
      <div className="flex flex-col items-center my-8 md:flex-row md:items-center justify-center md:justify-between">
        <div className="flex items-center gap-2 text-[12px] md:text-[14px]">
          <p>Website@2023</p>
          <span>/</span>
          <p>Term Of Services</p>
          <span>/</span>

          <p>Sitemap</p>
          <span>/</span>

          <p>Contact</p>
          <span>/</span>

          <p>9anime</p>
        </div>
        <div className="flex items-center justify-between gap-3 my-5 md:my-0">
          <img src="/images/instagram.png" alt="" />
          <img src="/images/facebook.png" alt="" />
          <img src="/images/linkedin.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
