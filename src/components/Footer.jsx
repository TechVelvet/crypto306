import React from 'react';
import ImageField from './ImageField';
import footerCryptoLogo from '../assests/svgs/footerLogo.svg';
import { Link, useLocation } from 'react-router-dom';
import InputField from './InputField';

const Footer = () => {
  const location = useLocation();
    const locationHandler = location.pathname === '/' ? false : true;
  return (
    <>
      <section id='footer' className='bg-maincolor mt-10 md:mt-24'>
        <div className='text-white pt-12 pb-20  px-5 lg:p-[115px] relative'>
          <div className="w-full flex justify-around items-center">
            <div className='hidden sm:block'>
              <ImageField taggedElem={footerCryptoLogo} altText="" className="" />
            </div>
            <div className='w-full sm:w-fit h-fit'>
              <div className='inquiry flex sm:flex-col md:flex-row sm:text-center md:text-start justify-between gap-5'>
                <div className='flex flex-col sm:h-36 justify-between font-gillRoy500 text-sm md:text-base leading-5'>
                  <Link to="/" className='underline-offset-2 underline hover:text-white/50 transition-all duration-300 ease-in-out' onClick={()=> window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
                  <Link to="mailto:inquiry@crypto306.com">inquiry: inquiry@crypto306.com</Link>
                  <p>
                    Dubai Office: Office 704-C, <br /> Aspin Commercial Tower, <br /> Sheikh Zayed Road, Dubai
                  </p>
                </div>
                <div className={`${locationHandler ? 'hidden' : 'flex'} flex-col h-28 justify-between font-gillRoy500 text-base`}>
                  <Link target='_blank' to="https://forms.gle/gsKcxYHUFtFzg8KbA" className='underline underline-offset-2 hover:text-white/50 transition-all duration-300 ease-in-out'>Become Sponsor</Link>
                  <Link target='_blank' to="https://forms.gle/3qtZVSYzMZUJRXkf7" className='underline underline-offset-2 hover:text-white/50 transition-all duration-300 ease-in-out'>Become Speaker</Link>
                  <Link target='_blank' to="https://forms.gle/ZnvmN3PkziJoRjDg6" className='underline underline-offset-2 hover:text-white/50 transition-all duration-300 ease-in-out'>Become Media Partner</Link>
                </div>
              </div>
              <div className={`${locationHandler ? 'hidden' : 'block'} lg:w-[500px] md:w-[400px] sm:h-14 h-10 mt-12 rounded-full bg-subscribeBg flex items-center sm:p-2 p-1`}>
                <InputField type="text" className="h-full bg-transparent grow text-maincolor font-gillRoy400 ml-2 outline-none text-sm md:text-base" placeholder="Enter your E-mail" />
                <button className="bg-maincolor h-full rounded-full sm:text-base font-gillRoy700 tracking-wide px-3 sm:px-6 text-sm">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="w-full sm:px-7 lg:px-12 font-gillRoy300 leading-4 md:leading-6 mt-12 text-xs sm:text-sm md:text-base text-justify md:text-center sm:text-start">
            <p>DISCLAIMER: Cryptocurrencies are complex instruments and come with a high risk of losing money rapidly due to its volatility. You should consider
              whether you understand how cryptocurrency work and whether you can afford to take the high risk of losing your money. This event is
              organized to provide educational content and networking opportunities for the virtual asset Industry. This event and our company do not
              involve in any recommendation or investment or selling/buying of any financial products. Visitors under the age of 18 will not be admitted.</p>
          </div>
          <div className='absolute right-24 bottom-9'>
            <div className='flex justify-center gap-5 items-center'>
              <Link to="https://twitter.com/crypto_306" target='_blank' rel="noopener noreferrer">
                <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.1147 4.66405C21.1147 4.88922 21.1147 5.06935 21.1147 5.29451C21.1147 11.554 16.3863 18.7142 7.69503 18.7142C4.99308 18.7142 2.5163 17.9486 0.444809 16.5976C0.805068 16.6427 1.16533 16.6877 1.57062 16.6877C3.77721 16.6877 5.80367 15.9222 7.42484 14.6613C5.35334 14.6162 3.59708 13.2652 3.01166 11.3739C3.32688 11.4189 3.59708 11.464 3.91231 11.464C4.3176 11.464 4.76792 11.3739 5.12818 11.2838C2.96662 10.8335 1.34546 8.94213 1.34546 6.64548V6.60045C1.97591 6.96071 2.74146 7.14084 3.50701 7.18587C2.20107 6.33025 1.39049 4.88922 1.39049 3.26805C1.39049 2.3674 1.61565 1.55682 2.02094 0.88133C4.36263 3.71837 7.87516 5.60973 11.793 5.8349C11.7029 5.47464 11.6579 5.11438 11.6579 4.75412C11.6579 2.14224 13.7744 0.0257141 16.3863 0.0257141C17.7373 0.0257141 18.9531 0.566103 19.8538 1.51178C20.8895 1.28662 21.9253 0.88133 22.8259 0.340941C22.4657 1.46675 21.7451 2.3674 20.7544 2.95282C21.7001 2.86276 22.6458 2.59256 23.4564 2.2323C22.8259 3.17798 22.0153 3.98857 21.1147 4.66405Z" fill="#A9EFFF" />
                </svg>
              </Link>
              <Link to="https://www.youtube.com/@TheCrypto306" target='_blank' rel="noopener noreferrer">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.7603 3.44818C25.3007 5.33954 25.3007 9.39246 25.3007 9.39246C25.3007 9.39246 25.3007 13.4003 24.7603 15.3367C24.4901 16.4175 23.6345 17.2281 22.5988 17.4983C20.6624 17.9937 13.0069 17.9937 13.0069 17.9937C13.0069 17.9937 5.30633 17.9937 3.36994 17.4983C2.33419 17.2281 1.47857 16.4175 1.20838 15.3367C0.667991 13.4003 0.667991 9.39246 0.667991 9.39246C0.667991 9.39246 0.667991 5.33954 1.20838 3.44818C1.47857 2.3674 2.33419 1.51178 3.36994 1.24159C5.30633 0.7012 13.0069 0.7012 13.0069 0.7012C13.0069 0.7012 20.6624 0.7012 22.5988 1.24159C23.6345 1.51178 24.4901 2.3674 24.7603 3.44818ZM10.4851 13.0401L16.8797 9.39246L10.4851 5.74483V13.0401Z" fill="#A9EFFF" />
                </svg>
              </Link>
              <Link to="https://instagram.com/the_crypto_306" target='_blank' rel="noopener noreferrer">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4237 5.1687C13.2608 5.1687 15.6024 7.51038 15.6024 10.3474C15.6024 13.2295 13.2608 15.5262 10.4237 15.5262C7.54164 15.5262 5.24499 13.2295 5.24499 10.3474C5.24499 7.51038 7.54164 5.1687 10.4237 5.1687ZM10.4237 13.7249C12.27 13.7249 13.7561 12.2388 13.7561 10.3474C13.7561 8.5011 12.27 7.01503 10.4237 7.01503C8.53236 7.01503 7.04629 8.5011 7.04629 10.3474C7.04629 12.2388 8.57739 13.7249 10.4237 13.7249ZM16.9985 4.98857C16.9985 5.66405 16.4581 6.20444 15.7826 6.20444C15.1071 6.20444 14.5667 5.66405 14.5667 4.98857C14.5667 4.31308 15.1071 3.77269 15.7826 3.77269C16.4581 3.77269 16.9985 4.31308 16.9985 4.98857ZM20.4209 6.20444C20.511 7.87064 20.511 12.8692 20.4209 14.5354C20.3309 16.1566 19.9706 17.5526 18.7998 18.7685C17.6289 19.9393 16.1879 20.2996 14.5667 20.3897C12.9005 20.4797 7.9019 20.4797 6.2357 20.3897C4.61454 20.2996 3.21853 19.9393 2.00266 18.7685C0.831813 17.5526 0.471554 16.1566 0.381489 14.5354C0.291424 12.8692 0.291424 7.87064 0.381489 6.20444C0.471554 4.58328 0.831813 3.14224 2.00266 1.9714C3.21853 0.800552 4.61454 0.440293 6.2357 0.350228C7.9019 0.260163 12.9005 0.260163 14.5667 0.350228C16.1879 0.440293 17.6289 0.800552 18.7998 1.9714C19.9706 3.14224 20.3309 4.58328 20.4209 6.20444ZM18.2594 16.2917C18.7998 14.9858 18.6647 11.8335 18.6647 10.3474C18.6647 8.90639 18.7998 5.75412 18.2594 4.40315C17.8991 3.54753 17.2236 2.82701 16.368 2.51178C15.017 1.9714 11.8648 2.10649 10.4237 2.10649C8.93765 2.10649 5.78538 1.9714 4.47944 2.51178C3.57879 2.87204 2.9033 3.54753 2.54305 4.40315C2.00266 5.75412 2.13775 8.90639 2.13775 10.3474C2.13775 11.8335 2.00266 14.9858 2.54305 16.2917C2.9033 17.1924 3.57879 17.8678 4.47944 18.2281C5.78538 18.7685 8.93765 18.6334 10.4237 18.6334C11.8648 18.6334 15.017 18.7685 16.368 18.2281C17.2236 17.8678 17.9441 17.1924 18.2594 16.2917Z" fill="#A9EFFF" />
                </svg>
              </Link>
              <Link to="https://t.me/The_Crypto_306" target='_blank' rel="noopener noreferrer">
                <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5399 2.27734L17.5227 16.6427C17.2976 17.6334 16.6671 17.9036 15.8115 17.4082L11.1732 13.9858L8.96657 16.1473C8.69638 16.4175 8.51625 16.5976 8.02089 16.5976L8.33612 11.8692L16.9373 4.12366C17.3426 3.80844 16.8472 3.58328 16.3519 3.94354L5.72424 10.6083L1.17596 9.21233C0.18525 8.8971 0.140217 8.22162 1.35609 7.72626L19.279 0.836298C20.0896 0.521071 20.8101 1.01643 20.5399 2.27734Z" fill="#A9EFFF" />
                </svg>
              </Link>
              <Link to="https://www.facebook.com/profile.php" target='_blank' rel="noopener noreferrer">
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4587 13.7885H9.08127V23.8757H4.57803V13.7885H0.885367V9.64548H4.57803V6.44818C4.57803 2.84558 6.73958 0.819125 10.0269 0.819125C11.6031 0.819125 13.2693 1.13435 13.2693 1.13435V4.69191H11.423C9.62166 4.69191 9.08127 5.77269 9.08127 6.94354V9.64548H13.0892L12.4587 13.7885Z" fill="#A9EFFF" />
                </svg>
              </Link>
              <Link to="https://www.linkedin.com/company/crypto-306/" target='_blank' rel="noopener noreferrer">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.4268 0.260163C20.1924 0.260163 20.8679 0.935649 20.8679 1.74623V18.9937C20.8679 19.8042 20.1924 20.4347 19.4268 20.4347H2.08936C1.32381 20.4347 0.693359 19.8042 0.693359 18.9937V1.74623C0.693359 0.935649 1.32381 0.260163 2.08936 0.260163H19.4268ZM6.77274 17.5526V7.96071H3.8006V17.5526H6.77274ZM5.28667 6.60973C6.23235 6.60973 6.9979 5.84418 6.9979 4.8985C6.9979 3.95282 6.23235 3.14224 5.28667 3.14224C4.29595 3.14224 3.5304 3.95282 3.5304 4.8985C3.5304 5.84418 4.29595 6.60973 5.28667 6.60973ZM17.9858 17.5526V12.2838C17.9858 9.71697 17.4004 7.69051 14.3832 7.69051C12.9422 7.69051 11.9515 8.5011 11.5462 9.26665H11.5011V7.96071H8.6641V17.5526H11.6362V12.8242C11.6362 11.5633 11.8614 10.3474 13.4375 10.3474C14.9686 10.3474 14.9686 11.7885 14.9686 12.8692V17.5526H17.9858Z" fill="#A9EFFF" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer