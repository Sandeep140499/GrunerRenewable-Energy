
import Head from 'next/head'
import Images from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { ReactMarkdown } from 'react-markdown/lib/react-markdown.js'

export async function getServerSideProps() {
  const [operationsRes,bannerRes] = await Promise.all([
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/galleries/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/gallery-banners/?populate=*`)
    // fetch(`https://lobster-app-soz2y.ondigitalocean.app/api/ratings/?populate=*`)

    // fetch(`http://localhost:1337/api/services/?populate=*`),
    // fetch(`http://localhost:1337/api/careers/?populate=*`)
  ]);
  const [operations,banner] = await Promise.all([
    operationsRes.json(),
    bannerRes.json()
    // ratingRes.json()
  ]);
  return { props: { operations,banner} };
}
export default function Home({operations,banner}) {
  return (
    <>
      <Head>
      <title>Gruner Renewable Energy</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="CSS/styles.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
        crossorigin="anonymous">
        </link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"></link>
      </Head>
 {/* start here */}
 <div>
  {/* Navigation Starts */}
  <div className="container-fluid" id="flex-conatiner1">
    <div className="row ">
      <div className="col-12 col-lg-3 my-auto text-center">
      <a href="/"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/logo-gre.svg" className="img-fluid" id="logo" alt="Gruner Renewable Energy" href="/index"/></a>
      </div>
      <div className="col-12 col-lg-7 pt-lg-4" id>
        <div className="row ">
          <div className="col-12 col-lg-5 boxOneEmail">
            <p>
              <a className="link-offset-2 link-underline link-underline-opacity-0 email" href="#">
                <i className="bi bi-envelope" /> <span>info@grunerrenewable.com</span>
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-5 boxOneEmail">
            <p>
              <a className="link-offset-2 link-underline link-underline-opacity-0 email" href="#">
                <i className="bi bi-telephone" /> <span>1800 890 5180</span>
              </a>
            </p>
          </div>
          <div className="col-12 col-lg-2 px-0 social-icons boxOneEmail">
          <a href="https://www.facebook.com/GrunerRenewables"><i className="bi bi-facebook icons"> </i></a>
            <a href="https://twitter.com/Gruner_energy"><i className="bi bi-twitter icons"> </i></a>
            <a href="https://www.instagram.com/gruner_renewable/"><i className="bi bi-instagram icons"> </i></a>
            <a href="https://www.linkedin.com/company/gruner-renewable-energy/"><i className="bi bi-linkedin icons"> </i></a>
          </div>
        </div>
        <hr className="top-section-heading-break" />
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid navbar ">
            <button className="navbar-toggler respnavbar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon">
              </span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link active navbarOne" aria-current="page" href="/about">
                    About Us
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link navbarOne " aria-current="page" href="/biogas">
                    Bio Gas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/project">
                    Our Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/sustainability">
                    Sustainability
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/media">
                    Media
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/contactUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-lg-2" id="reqQuote">Request <br />Quote</div>
    </div>
  </div>
  {/* Navigation Ends */}
  {/* navugation end */}
  {/* gallay frame 2 start here */}
  {banner.data?.map( (row) => (
  <section id="gallery-our-project" className="d-flex align-items-center">
    <div className="container">
      <h1 className="gallaryheading">{row?.attributes.banner_title}</h1>
      <ReactMarkdown className="galleryparagraph">{row?.attributes.banner_description}</ReactMarkdown>
    </div>
  </section>
   ))}
  {/* gallay frame 2 end here */}
  {/* four images statrt  */}
  <div className="container ">
    <div className="row g-2 pt-5 pb-5">

      {/* <div className="col-12 col-lg-6">
        <div className>
          <div className="containerImages">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/biogas.jpg" alt="Snow" />
            <div className="centered-Images">Bio Fuel</div>
          </div>
        </div>
      </div> */}
      {operations.data?.map( (row) => (
      <div className="col-12 col-lg-6">
        <div className>
         <a href={`/gallery/${row?.attributes.Slug}`}>
          <div className="containerImages">
            <img src={ row?.attributes.gallery_image.data[0].attributes.url} alt="Snow" className='img-fluid'/>
            <div className="centered-Images">{row?.attributes.gallery_name}</div>
          </div>
          </a> 
        </div>
      </div>
       ))}
      {/* <div className="col-12 col-lg-6">
        <div className>
          <div className="containerImages">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/biogas-picture.jpg" alt="Snow" />
            <div className="centered-Images">Our Team</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className>
          <div className="containerImages">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/onion.jpg" alt="Snow" />
            <div className="centered-Images">Our Processes</div>
          </div>
        </div>
      </div> */}
    </div>
  </div>
  {/* four images end  */}
  {/* Footer starts from here */}
  
</div>
{/* Footer Ends here */}
<div className="container-fluid pt-lg-5" id="footer-body">
            <footer>
              <div className="footer-section left col-lg-4 col-12">
                <div className="upper-portion">
                  <div className="quicklinks">
                    <h3>Quick Links</h3>
                    <div className="links">
                    <a href="/about" className="white-font">About Us</a>
                      <a href="/biogas" className="white-font">Bio Gas</a>
                      <a href="/project" className="white-font">Our Projects</a>
                      <a href="/sustainability" className="white-font">Sustainability</a>
                      {/* <a href="/blogs" className="white-font">Blogs</a> */}
                      <a href="/media" className="white-font">Media</a>
                      <a href="/gallery" className="white-font">Gallery</a>
                    </div>
                  </div>
                  <div className="support">
                    <h3>Support</h3>
                    <div className="links">
                    <a href="/contactUs" className="white-font">Contact Us</a>
                      <a href="" className="white-font">Terms of Use</a>
                      <a href="" className="white-font">Privacy Policy</a>
                    </div>
                  </div>
                </div>
                <div className="lower-portion">
                  <a href>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-envelope footercolorspan" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                    &nbsp;&nbsp;
                    <span className='footercolorspan'>info@grunerrenewable.com</span>
                  </a>
                  <a href>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-telephone footercolorspan" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    &nbsp;&nbsp;
                    <span className='footercolorspan'>1800 890 5180M</span>
                  </a>
                  <a href>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-geo-alt footercolorspan" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    &nbsp;&nbsp;
                    <span className='footercolorspan'>1401, Windsor Grand, Plot 1C, Sector - 126, Noida, 201313</span>
                  </a>
                </div>
              </div>
              <div className="footer-section center col-lg-4 col-12">
                <div className="social-icons">
                <a href="https://www.facebook.com/GrunerRenewables">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-facebook footercolorspan" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/gruner-renewable-energy/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-linkedin footercolorspan" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/Gruner_energy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-twitter footercolorspan" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/gruner_renewable/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-instagram footercolorspan" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mail-icon">
                &nbsp;&nbsp;
                <svg width={106} height={100} viewBox="0 0 106 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M95.5 60C94.1739 60 92.9021 60.5268 91.9645 61.4644C91.0268 62.4021 90.5 63.6739 90.5 65V85C90.5 86.3261 89.9732 87.5978 89.0355 88.5355C88.0979 89.4732 86.8261 90 85.5 90H15.5C14.1739 90 12.9021 89.4732 11.9645 88.5355C11.0268 87.5978 10.5 86.3261 10.5 85V37.05L39.9 66.5C42.7125 69.309 46.525 70.8868 50.5 70.8868C54.475 70.8868 58.2875 69.309 61.1 66.5L69.3 58.3C70.2415 57.3584 70.7705 56.0815 70.7705 54.75C70.7705 53.4185 70.2415 52.1415 69.3 51.2C68.3585 50.2584 67.0815 49.7295 65.75 49.7295C64.4185 49.7295 63.1415 50.2584 62.2 51.2L54 59.4C53.0654 60.3161 51.8088 60.8293 50.5 60.8293C49.1912 60.8293 47.9346 60.3161 47 59.4L17.55 30H50.5C51.8261 30 53.0979 29.4732 54.0355 28.5355C54.9732 27.5978 55.5 26.3261 55.5 25C55.5 23.6739 54.9732 22.4021 54.0355 21.4644C53.0979 20.5268 51.8261 20 50.5 20H15.5C11.5218 20 7.70644 21.5803 4.8934 24.3934C2.08035 27.2064 0.5 31.0217 0.5 35V85C0.5 88.9782 2.08035 92.7935 4.8934 95.6066C7.70644 98.4196 11.5218 100 15.5 100H85.5C89.4782 100 93.2936 98.4196 96.1066 95.6066C98.9196 92.7935 100.5 88.9782 100.5 85V65C100.5 63.6739 99.9732 62.4021 99.0355 61.4644C98.0979 60.5268 96.8261 60 95.5 60ZM104.05 16.45L89.05 1.44997C88.5745 0.994767 88.0138 0.637942 87.4 0.39997C86.1827 -0.10012 84.8173 -0.10012 83.6 0.39997C82.9862 0.637942 82.4255 0.994767 81.95 1.44997L66.95 16.45C66.0085 17.3915 65.4795 18.6685 65.4795 20C65.4795 21.3315 66.0085 22.6085 66.95 23.55C67.8915 24.4915 69.1685 25.0204 70.5 25.0204C71.8315 25.0204 73.1085 24.4915 74.05 23.55L80.5 17.05V45C80.5 46.326 81.0268 47.5978 81.9645 48.5355C82.9021 49.4732 84.1739 50 85.5 50C86.8261 50 88.0979 49.4732 89.0355 48.5355C89.9732 47.5978 90.5 46.326 90.5 45V17.05L96.95 23.55C97.4148 24.0186 97.9678 24.3906 98.5771 24.6444C99.1864 24.8983 99.8399 25.029 100.5 25.029C101.16 25.029 101.814 24.8983 102.423 24.6444C103.032 24.3906 103.585 24.0186 104.05 23.55C104.519 23.0852 104.891 22.5322 105.144 21.9229C105.398 21.3136 105.529 20.66 105.529 20C105.529 19.3399 105.398 18.6864 105.144 18.0771C104.891 17.4678 104.519 16.9148 104.05 16.45Z" fill="white" fillOpacity="0.2" />
                </svg>
              </div>
              <div className="footer-section right col-lg-4 col-12">
                <h3>Subscribe To Our Newsletter!</h3>
                <p className="footercolorspan">Receive news and promotions by email from Gruner Renewable!</p>
                <form action>
                  <input type="text" name id placeholder="Enter your mail Address" />
                  <div className="pt-lg-3">
                    <button type="submit">
                    <span>Submit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                  </button>
                  </div>
                  
                </form>
              </div>
            </footer>
            <div className="post-footer">
              <div className="divider" />
              <p className="copyright">©2022 grunerrenewable.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All Rights Reserved.</p>
            </div>
          </div>
 {/* end here */}
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
      </script>
    </>
  )
}