import Head from 'next/head'
import Images from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import { ReactMarkdown } from 'react-markdown/lib/react-markdown.js'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';



export async function getServerSideProps() {
  
  
  const [operationsRes,incidentsRes,biogasRes,logoRes,cngsRes,teamRes,productRes,whatsappRes] = await Promise.all([
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/homes/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/home-chooses/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/home-bio-gases/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/home-company-logos/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/home-bio-cngs/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/home-teams/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/project-details/?populate=*`),
    fetch(`https://whale-app-56hrz.ondigitalocean.app/api/whatsapp-numbers/?populate=*`)
  ]);



  const [operations,incidents,biogas,logos,cngs,team,product,whatsapp] = await Promise.all([
    operationsRes.json(),
    incidentsRes.json(),
    biogasRes.json(),
    logoRes.json(),
    cngsRes.json(),
    teamRes.json(),
    productRes.json(),
    whatsappRes.json()
  ]);
  return { props: { operations,incidents,biogas,logos,cngs,team,product,whatsapp} };
}



export default function Home({operations,incidents,biogas,logos,cngs,team,product,whatsapp}) {


const { register, formState: { errors }, handleSubmit, } = useForm();
const router = useRouter();

//function for get in touch form:
const onGetSubmit = async ({ full_name, company_name, email, contact_us, message, radio }) => {
  
  console.log("Full_name ------> ",full_name);
  console.log("Company_name ------> ",company_name);
  console.log("Email ------> ",email);
  console.log("Contact Us ------> ",contact_us);
  console.log("Message ------> ",message);
  console.log("Radio ------> ",radio);

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer fb4bb95c1c5818bca21514c2d004b5e8f96cd96519c3da3c4410f80c358eed719227df379925869227c30fbb766cdb2e40b62b00fc9db241394bc50d2db94fd9b78cad63e68d4d5285ada57514aee43a37f9a588f8746ad09192368bd68be5865eb20a6e4cde533a65e2c99e025aad0fc3297f93599288534fbcad5ad8513b3a',
    'Access-Control-Allow-Origin': '*',

  }

  const res = await axios.post('https://whale-app-56hrz.ondigitalocean.app/api/get-in-touches/?populate=*', 
  { data :
    { 
      Full_Name: full_name,
      company_name: company_name,
      email: email,
      contact_no: contact_us,
      message: message,
      contact_methed: radio
    }
  },{headers})    

  console.log('res :', res);

  if(res.hasOwnProperty('error') && res.error){
    window.alert(res.error.message)
  }
  if(res.data){
      alert("Form Saved Successfully.");
       router.push('https://grunerrenewable.com');
      
  }

  // You should handle login logic with username, password and remember form data
  // setUser({ name: name });
};
  //

  //Function for request quote form:

  const onSubmit = async ({ full_names, company_names, emails, contacts_us, messages }) => {
    
    console.log("Full_name ------> ",full_names);
    console.log("Company_name ------> ",company_names);
    console.log("Email ------> ",emails);
    console.log("Contact Us ------> ",contacts_us);
    console.log("Message ------> ",messages);
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 8ce388a1b4678b38d51f11cefcb8975648df09f76e3a5e8e7c09a5fd9a297556f9bb555758060fb252cdabc7a9e4f7a614290987e0d1bd92412a28157b25da71f62c28a0e949461b15056215ecebdaa1a4d6e6cca12e3dd05f5d6bc7a26e82c18f45f2a05aebad00c683e6791fbcd875d78b6168a705924abdc78e69eb898489',
      'Access-Control-Allow-Origin': '*',
  
    }
  
    const res = await axios.post('https://whale-app-56hrz.ondigitalocean.app/api/request-quotes/?populate=*', 
    { data :
      { 
        full_name: full_names,
        company_name: company_names,
        email: emails,
        contact_us: contacts_us,
        message: messages
      }
    },{headers})    
  
    console.log('res :', res);
  
    if(res.hasOwnProperty('error') && res.error){
      window.alert(res.error.message)
    }
    if(res.data){
        alert("Form Saved Successfully.");
         router.push('https://grunerrenewable.com');
    }
  
    // You should handle login logic with username, password and remember form data
    // setUser({ name: name });
  };
    //

  return (
    <>
      <Head>
        <title>Gruner Renewable Energy</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
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

  {/* Navigation Starts */}
  <div className="container-fluid" id="flex-conatiner1">
    <div className="row ">
      <div className="col-12 col-lg-2 my-auto text-center">
        <a href="/"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/logo-gre.svg" className="img-fluid" id="logo" alt="Gruner Renewable Energy" href="/index"/></a>
      </div>
      <div className="col-12 col-lg-9 " id>
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
          <a href="https://www.facebook.com/GrunerRenewables"><i className="bi bi-facebook icons colourFb"> </i></a>
            <a href="https://twitter.com/Gruner_energy"><i className="bi bi-twitter icons colourtwitter"> </i></a>
            <a href="https://www.instagram.com/gruner_renewable/"><i className="bi bi-instagram icons colourInstagram"> </i></a>
            <a href="https://www.linkedin.com/company/gruner-renewable-energy/"><i className="bi bi-linkedin icons colourlinkdin"> </i></a>
          </div>
        </div>
        <hr className="top-section-heading-break " />
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
                {/* <li className="nav-item ">
                  <a className="nav-link navbarOne " aria-current="page" href="/our_products">
                    Our Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/project">
                    Our Projects
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/sustainability">
                    Sustainability
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/gallery">
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbarOne" href="/media">
                    Media
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link navbarOne " aria-current="page" href="/contactUs">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-lg-1" id="reqQuote">
      <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/7252636.png " alt height={28} className='responsivehight'/>
      <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className='colormodel' ><span>Request <br />Quote</span></button>    
{/* <!-- Modal --> */}
<div className="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content modelboxshadowing">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Request Quote</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <form className="row col-12 col-lg-12 my-5 text-start" onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputEmail1" className="form-label"  >
                      Full Name*
                    </label>
                    <input type="text" name='full_names' {...register('full_names')} className="form-control" id aria-describedby="emailHelp" required />
                  </div>
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputPassword1" className="form-label">
                      Company Name*
                    </label>
                    <input type="text" name='company_names' {...register('company_names')} className="form-control" id required/>
                  </div>
                  <div className="col-12 col-lg-6">
                    <label htmlfor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input type="text" name='emails' {...register('emails')} className="form-control" id aria-describedby="emailHelp" required/>
                  </div>
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputPassword1" className="form-label">
                      Contact No.*
                    </label>
                    <input type="text" name='contacts_us' {...register('contacts_us')} className="form-control" id required/>
                  </div>
                  <div className="mb-3">
                    <label htmlfor="exampleFormControlTextarea1" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control" name='messages' {...register('messages')} id="exampleFormControlTextarea1" rows={3} defaultValue={""} required />
                  </div>
                     <div className="modal-footer">
        <button type="submit" className=" ">Submit</button>
      </div>
      </form>

      
      </div>
    </div>
  </div>
</div>
{/* <!-- Modal end --> */}
        </div>
    </div>
    {whatsapp.data?.map( (row) => (
          <div className='text-end whatsapphover'>
            <span className="hide"></span>
          {/* <a href="https://api.whatsapp.com/send?phone=.{row?.attributes.number}" className="float-whatsapp" target="_blank"> */}
          <a href={`https://api.whatsapp.com/send?phone=${row?.attributes.number}`} className="float-whatsapp " target="_blank">
<i className="fa fa-whatsapp my-float"></i></a>
</div>
))}
  </div>
  {/* Navigation Ends */}
  {/* frame 2 start here */}
  <div className="container-fluid p-0 background">
    <section className="d-flex secondimage">
      <div className="mx-5">
        <div className="my-5">
          <div className=" welcome">Welcome to Gruner Renewables</div>
        </div>
        <div className=" ">
          <div className="p-0 leading">
            <h1 className="heading">We Are A Leading Provider Of <br />Sustainable Energy Solutions</h1>
          </div>
        </div>
        <div className="row plantlogshomepage pt-lg-5">
          <div className="col-3 col-lg-3 logowhiteplant">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/whiteImages.png " alt srcSet height={70} />
          </div>
          <div className="col-3 col-lg-3 logowhiteplant">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/whiteImages2.png" alt srcSet height={70} />
          </div>
          <div className="col-3 col-lg-3 logowhiteplant">
            <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/whiteImages3.png " alt srcSet height={70} />
          </div>
        </div>
        <div className="col-12 pb-5 pt-5 pt-lg-5 pb-lg-0 col-lg-3">
        <a href='/biogas'>
        <button className="fulidbutton">Know More <i className="bi bi-arrow-right" /></button>
        </a>
          </div>
      </div>
      </section>
      </div>
    {/* frame 2 end here */}
    {/* frame 3 start */}
    {operations.data?.map( (row) => (
    <div className="conatiner pb-2 indexing">
      <div className="row ">
        <div className="container">
          <div className="row gx-lg-5 indexingcolumbs">
            <div className="col-12 col-lg-4 years p-5">
              <div className="row">
                <div className="col-lg-4 col-4 yearSize">{row?.attributes.info1number}+<br /><span className="infofont">{row?.attributes.info1text}</span></div>
                <div className="col-lg-4 col-4 yearSize">{row?.attributes.info2number}+<br /><span className="infofont">{row?.attributes.info2text}</span></div>
                <div className="col-lg-4 col-4 yearSize">{row?.attributes.info3number}+<br /><span className="infofont">{row?.attributes.info3text}</span></div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="p-lg-0 p-2">
                <div className="row utlization">
                  <div className="container my-auto">
                    <div className="row my-auto">
                      <div className="col-12">
                        <div className="p-lg-3 p-3"><h5>{row?.attributes.bio_waste_title}</h5>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="p-lg-3 pt-lg-0 p-3">
                        <ReactMarkdown>
                          {row?.attributes.bio_waste_detail}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         ))}
    {/* frame 3 end */}
    {/* frame 4 bus secion start */}
    {operations.data?.map( (row) => (
    <div className="container" id="frame-2">
      <div className="row pt-lg-5">

        <div className="col-12 col-lg-4 pt-5 text-start">
        <span className="chooseheading p-lg-3 ">About Us</span>
          <h1 className="heading-frame-third pt-5 pb-5 pb-lg-0">{row?.attributes.home_about_left_title}</h1>
          <br />
          <ReactMarkdown className="paragraph-lorem-2 pt-5 pt-lg-0">
            {row?.attributes.home_about_left_desription}
          </ReactMarkdown>
        <div className='pt-5 homepagerespbutton pb-5 pb-lg-0'>
        <button className="aboutsbutton my-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request Quote <i className="bi bi-arrow-right"></i></button>
        </div>
        </div>
        <div className="col-12 col-lg-5 my-lg-5">
          <img src={ row?.attributes.home_about_image.data[0].attributes.url} classname="img-thumbnail" className='img-fluid' alt="..." id />
        </div>
        <div className="col-12 col-lg-3 p-lg-3 renawable my-auto">
        <ReactMarkdown>
             {row?.attributes.home_about_right_desription}
             </ReactMarkdown> 
          <div className="row bayehojaa">
            <div className="col-12 ">
              <div className="p-2">
                <i className="bi bi-check2-circle" id="sign"> &nbsp; <span id="kuchbhidedo">{row?.attributes.home_about_right_bottom1}</span></i>
              </div>
            </div>
            <div className="col-12">
              <div className="p-2"><i className="bi bi-check2-circle" id="sign"> &nbsp;<span id="kuchbhidedo">{row?.attributes.home_about_right_bottom2}</span>
                </i></div>
            </div>
            <div className="col-12">
              <div className="p-2"><i className="bi bi-check2-circle" id="sign">&nbsp; <span id="kuchbhidedo">{row?.attributes.home_about_right_bottom3}</span>
                </i></div>
            </div>
            <div className="col-12">
              <div className="p-2"><i className="bi bi-check2-circle" id="sign"> &nbsp;<span id="kuchbhidedo">{row?.attributes.home_about_right_bottom4}</span>
                </i></div>
            </div>
          </div>
        </div>
      </div>       
    </div> 
    ))}      
    {/* frame 4 ends here */}
    {/* frame 5 logo section start............................................. */}
    {/* <div className="container logoresposnive">
      <div className="row pt-5 pb-5">
      {logos.data?.map( (row) => (
        <div className="col-6 col-lg-2"><img src={ row?.attributes.logo.data[0].attributes.url} alt srcSet className="img-fluid" /></div>
       
        ))} 
      </div>
    </div> */}
    {/* frame 5 logo section end............................................. */}
    {/* frame 6 why we choose start */}
    {incidents.data?.map( (row) => (
    <div className="conatiner p-0">
      <div className="row p-0">
        <div className="col-12 col-lg-6 p-0">
          <img src={ row?.attributes.image_choose.data[0].attributes.url} className='imageshightresp img-fluid' alt srcSet />
        </div>
        <div className="col-12 col-lg-6 p-lg-5">
          <div className="row">
            <div className="col-12 col-lg-12 pt-5 pt-lg-0 ">
            {/* <img src="" className="img-thumbnail" alt="..."> */}
              <span className="chooseheading p-lg-3 p-3">WHY CHOOSE US</span>
              <h1 className="headingbettersource pt-lg-5 p-3 pt-5">{row?.attributes.desription}</h1>
              <ReactMarkdown className="whywechoos-para pt-lg-3 p-4">
                 {row?.attributes.detail}
                 </ReactMarkdown>
            </div>
            <div className="col-12 col-lg-12 pt-lg-5 p-5">
              
  <div className="row g-5 g-lg-2 ">
    <div className="col-12 col-lg-6">
      <div className="border-colorofhomepage my-auto p-3">
        <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/Frame 13.png" /></span>
        <h1 className='homepagesgreenborderheader'>{row?.attributes.our_name1}</h1>
        <ReactMarkdown className='homepagegreenborderparagraph'>
          {row?.attributes.our_detail1}
          </ReactMarkdown>
      </div>
    </div>
    
    <div className="col-12 col-lg-6 ryt-below">
      <div className=" border-colorofhomepage my-auto p-3 ">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/ourManagement.png" /></span>
        <h1 className='homepagesgreenborderheader'>  {row?.attributes.our_name2}</h1>
        <ReactMarkdown className='homepagegreenborderparagraph'>
          {row?.attributes.our_detail2}
          </ReactMarkdown>
      </div>
    </div>
    <div className="col-12 col-lg-6 pt-3">
      <div className="border-colorofhomepage my-auto p-3">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/Our Commitment.png" /></span>
        <h1 className='homepagesgreenborderheader'>  {row?.attributes.our_name3}</h1>
        <ReactMarkdown className='homepagegreenborderparagraph'>
          {row?.attributes.our_detail3}
          </ReactMarkdown>
      </div>
    </div>
    <div className="col-12 col-lg-6 ryt-below pt-3">
      <div className="border-colorofhomepage my-auto p-3">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/Frame 13.png" /></span>
        <h1 className='homepagesgreenborderheader'>  {row?.attributes.our_name4}</h1>
        <ReactMarkdown className='homepagegreenborderparagraph'>
          {row?.attributes.our_detail4}
          </ReactMarkdown>
      </div>
    </div>
  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    ))} 
    {/* frame 6 why we choose end */}
    {/* frame 7 bio-gas start */}
    {biogas.data?.map( (row) => (
    <div className="container ">
      <div className="row">
        <div className="row">
          <div className="col-12 col-lg-6 my-5">
            <span className="biospan p-lg-3 p-3">BIO - GAS</span>
            <h1 className="headingenergy pt-lg-5 pt-5 pb-5">{row?.attributes.description}</h1>
            <ReactMarkdown className="biogaspara pt-lg-3 pt-3 pb-3 pb-lg-0">
              {row?.attributes.detail}
              </ReactMarkdown>
            <div className="pt-lg-5 pt-5">
              <button className="biogasbutton">Know More <i className="bi bi-arrow-right" /></button>
            </div>
            </div>
          <div className="col-12 col-lg-6 my-lg-5">
            <img src={ row?.attributes.image_gas.data[0].attributes.url} alt  className='plantsetup2 img-fluid'/>
            {/* <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/plantsetup2.jpg" alt=""> */}
          </div>
        </div>
      </div>
    </div>
       ))} 
       {biogas.data?.map( (row) => (
    <div className="container pb-lg-5 pt-lg-5">
  <div className="row g-2 p-lg-3 resposvibeblocks">
    <div className="col-12 col-lg-4 pt-5 pt-lg-0">
      <div className="p-3 homepagegreenborderparagraph border-colorofhomepagenbiogas ">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/Untitled%20(9).png" /></span>
      <h1 className='homepagesgreenborderheader'> {row?.attributes.blog_title1}</h1>
        <ReactMarkdown className='homepagegreenborderparagraph pb-lg-3'> 
        {row?.attributes.blog_detail1}
        </ReactMarkdown>
      </div>
    </div>
    <div className="col-12 col-lg-4 pt-5 pt-lg-0">
      <div className="p-3 homepagegreenborderparagraph border-colorofhomepagenbiogas">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/Untitled%20(7).png" /></span>
      <h1 className='homepagesgreenborderheader'>  {row?.attributes.blog_title2}</h1>
      <ReactMarkdown className='homepagegreenborderparagraph pb-lg-3'> 
        {row?.attributes.blog_detail2}
        </ReactMarkdown>
      </div>
    </div>
    <div className="col-12 col-lg-4 pt-5 pt-lg-0">
      <div className="p-3 homepagegreenborderparagraph border-colorofhomepagenbiogas">
      <span className="ryticonimage"><img src="https://gremedia.sgp1.digitaloceanspaces.com/media/ourTech.png" /></span>
      <h1 className='homepagesgreenborderheader'>  {row?.attributes.blog_title3}</h1>
      <ReactMarkdown className='homepagegreenborderparagraph pb-lg-3 img-fluid'> 
        {row?.attributes.blog_detail3}
        </ReactMarkdown>
      </div>
    </div>
  </div>
</div>
   ))} 
    {/* frame 7 bio-gas end */}
    {/* frame 8 start */}
    {cngs.data?.map( (row) => (
    <div className="container-fluid p-lg-0 pt-5 g-0 ">
      <section className=" hero">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="container text-center ">
              {/* <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/India.png" alt="" className="indiaMAP"/> */}
              <img src="https://gremedia.sgp1.digitaloceanspaces.com/media/3d-india-white-map-grey-24195924-removebg-preview.png" alt className="indiaMAP img-fluid" />
            </div>
          </div>
          <div className="col-12 col-lg-6 p-lg-5 p-5">
            <span className="Biocng p-lg-3">BIO - CNG</span>
            <h1 className="biocngheading pt-5">{row?.attributes.title}</h1>
            <ReactMarkdown className="paraheadingcng pt-5">{row?.attributes.description}</ReactMarkdown>
            <button className="cngbutton my-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request Quote <i className="bi bi-arrow-right" /></button>
          </div>
        </div>
      </section>
      </div>
         ))}
      {/* frame 8 end here */}
      {/* frame 9 start */}
      {/* <div className="container-fluid p-0">
        <div className="container pb-3">
          <div className="row pt-5">
            <div className="col-12 text-center">
              <span className="indexspanheading p-lg-3 p-3">PROJECTS</span>
              <h1 className="projectHeading pt-5">Latest Projects, Solutions And <br/> Energy Supplies</h1>
            </div>
            <div className="row g-2">
            {product.data?.map( (row) => (
              <div className="col-12 col-lg-4">
                <div className="p-3">
                  <div className="containerImages">
                    <img src={ row?.attributes.project_image.data[0].attributes.url} alt="Notebook" style={{"width":"100%"}} />
                    <div className="contentParagraph p-lg-3">
                      <ReactMarkdown className="ourprojectparagraph p-3 pt-lg-5 p-lg-0">{row?.attributes.description}</ReactMarkdown>
                      <a href={`/projectdetails/${row?.attributes.Slug}`}>
                      <button className=" btn-secondary exploremorebutton ">EXPLORE <i className="bi bi-arrow-right" /></button></a>
                    </div>
                  </div>
                </div>
              </div>
               ))}
            
            </div>
          </div>
        </div>
        </div> */}
        {/* four image start here */}
        {/* frame 9 end */}
        <div className="container pt-lg-5 pb-lg-5">
        <br></br>
        <br></br>
          <div className="row ">
            <div className="col-12 col-lg-4 ">
              <div className="pt-lg-3"><span className="mission-ourteam p-lg-3 p-3">OUR TEAM</span></div>
              <h1 className="ourteamheading pt-5">People Behind the Scene <br />Here</h1>
              <p className="ourteamparagraph pt-5 pt-lg-3">Gruner Renewables is a leading player in the renewable energy industry and has been actively involved in setting up BIO CNG plants in India. We have been using state-of-the-art technology, for the production of biogas from organic waste.</p>
            </div>
            <div className="col-12 col-lg-8 ">
              <div className="col-12 col-lg-12 pt-5 pt-lg-2">
                <div className>
                  <div className="row">
                  {team.data?.map( (row) => (
                    <div className="col-md-3 p-3">
                    <div className="thumbnail">
                <a href={`/biography/${row?.attributes.Slug}`}>
                  <img src={ row?.attributes.image_team.data[0].attributes.url} className="img-fluid" alt style={{"width":"100%"}} />
                  {/* <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackpopup" className="caption-baground p-lg-1 "> */}
                  <div className="caption-baground p-lg-1">
                    <h1 className="girishBansal-heading ">{row?.attributes.name}</h1>
                    <p className="Designation ">{row?.attributes.description}</p>
                  </div>
                  {/* </button> */}

                </a>
              </div>
                    </div>
                     ))}
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* four images section  end*/}
        {/* logs start in about page */}
        {/* crowser part start */}
        {/* CAROUSEL To COME HERE */}
        {/* crowser part end */}
        {/* form start here */}
          <div className="container-fluid p-0">
            <div className="container pt-lg-5">
            <div className="row">
              <div className="col-12 col-lg-6 getintouchbackgroundcolor my-auto">
                <div className="container-hight  text-start">
                  <div className="row p-lg-5">
                    <div className="col-12 col-lg-6">
                      <div className="pt-5 pb-5">
                        <span className="gettouchpng p-lg-3 p-3">GET IN TOUCH</span>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className="pt-lg-3">
                        <h3 className="projectHeadingform">
                          Let's Start Project With Our Company &amp; Booking Now !
                        </h3>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className="pt-lg-3">
                        <p>
                        The BIO CNG plants developed by Gruner Renewables using are highly efficient, cost-effective, and environmentally friendly. Our team of experts has been working closely with clients to provide customized solutions that meet their specific requirements. 
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12">
                      <div className="pt-lg-5 pb-lg-5">
                        <div className="row">
                          <div classname="">
                          <div className="row g-0 ">
  <div className="col-2 col-lg-2">
  <img className="chatpng" src="https://gremedia.sgp1.digitaloceanspaces.com/media/chats.png" alt="Generic placeholder image" />
  </div>
  <div className="col-10 col-lg-10 my-auto">
    
  <span className="getcotact">
                                Receive an accurate quote within 3-5 days when you fill out this form. Or, give us a call: 1800 890 5180</span>
  </div>
</div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 whitebackroundform p-lg-5 p-5">
                <h3 className="text-center projectHeadingform" >Get In Touch </h3>
                <div>

                <form className="row col-12 col-lg-12 my-5 text-start" onSubmit={handleSubmit(onGetSubmit)} >
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputEmail1" className="form-label">
                      Full Name*
                    </label>
                    <input type="text" name='full_name' {...register('full_name')}  className="form-control" id aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputPassword1" className="form-label">
                      Company Name*
                    </label>
                    <input type="text" name='company_name' {...register('company_name')} className="form-control" id />
                  </div>
                  <div className="col-12 col-lg-6">
                    <label htmlfor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input type="text" name='email' {...register('email')} className="form-control" id aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-5 col-12 col-lg-6">
                    <label htmlfor="exampleInputPassword1" className="form-label">
                      Contact No.*
                    </label>
                    <input type="text" name='contact_us' {...register('contact_us')} className="form-control" id />
                  </div>
                  <div className="mb-3">
                    <label htmlfor="exampleFormControlTextarea1" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control" name='message' {...register('message')} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                  </div>
                  <div className='pt-3'>Preferred Contact Method*</div>
                  <div className="row ">
                  <div className="container">
  <div className="row pt-5">
    <div className="col order-first">
    <input
    className="form-check-input"
    type="radio"
    name='radio' {...register('radio')}
    id="exampleRadios1"
    defaultValue="all"
    defaultChecked=""
  />
  <label className="form-check-label pt-2 mx-3" htmlFor="exampleRadios1">
    All
  </label>
    </div>
    <div className="col">
    <input
    className="form-check-input"
    type="radio"
    name='radio' {...register('radio')}
    id="exampleRadios1"
    defaultValue="phone"
    defaultChecked=""
  />
  <label className="form-check-label pt-2 mx-3" htmlFor="exampleRadios1">
    Phone
  </label>
    </div>
    <div className="col order-last">
    <input
    className="form-check-input"
    type="radio"
    name='radio' {...register('radio')}
    id="exampleRadios1"
    defaultValue="email"
    defaultChecked=""
  />
  <label className="form-check-label pt-2 mx-3" htmlFor="exampleRadios1">
    Email
  </label>
    </div>
  </div>
</div>
                   </div>
                  <div className="row pt-5">
                    <button type="submit" className=" btn-primary formsubmittbuttin">
                      Submit Request <i className="bi bi-arrow-right"></i>
                    </button>
                  </div></form>
                </div>
              </div>
            </div>
            </div>
            </div>
          {/* form start end */}
          {/* logs start in about page */}
          {/* Footer starts from here */}

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
                    <span className='footercolorspan'>1800 890 5180</span>
                  </a>
                  <a href>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-geo-alt footercolorspan " viewBox="0 0 16 16">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-facebook footercolorspan colourFb" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/gruner-renewable-energy/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-linkedin footercolorspan colourlinkdin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/Gruner_energy">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-twitter footercolorspan colourtwitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/gruner_renewable/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-instagram footercolorspan colourInstagram" viewBox="0 0 16 16">
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
                    <button type="submit footersubmit p-lg-4">
                    <span className=''>Submit</span>
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
      <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" 
      crossorigin="anonymous">
      </script>
    </>
  )
                  }