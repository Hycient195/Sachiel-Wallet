import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import s from "./index.module.scss";
import EastIcon from '@mui/icons-material/East';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import { homeImages } from "../constants";
import { homeImages } from '../constants';
import Navbar from '../components/Navbar/Navbar';

export default function Home() {
  const dummyArr = [1, 2, 3, 4, 5, 6];
  return (
    <main className={`${s.home_main}`}>
      
      <section className={`${s.hero} flex justify-center align-flex-end`}>
        <div className={`${s.hero_container} flex flex-row justify-space-between`}>
          <div className={`${s.hero_text_container}`}>
            <h1 className="white-text">The most trusted &amp; secure crypto wallet</h1>
            <p className="white-text">
              Buy, store, Manage and exchange 245+ cryptos and NFTs on your
              Mobile device.
            </p>
            <button className="m-t-60 white-text bg-pink br-25 p-t-15 p-b-15 p-l-30 p-r-30 flex flex-row align-center g-20">Get Started <Image src={homeImages.right_arrow} alt="button icon"/></button>
          </div>

          <div className={`${s.right} fulwidth`}>
            <Image src={homeImages.phone} alt="phone"/>
            <div className={`${s.big_circle}`} />
          </div>
        </div>

        <div className={`${s.patreons_container}`}>
          {/* @ts-ignore */}
          {/* <marquee behavior="alternate" direction="right" className="fullwidth"> */}
            <Image className={`${s.marquee}`} src={homeImages.token_patreons} alt="token patreons"/>
          {/* </marquee> */}
        </div>


        {/* Positioned Absolutely to Document Flow */}
        <div className={`${s.circle_1_container}`}>
          <div className={`${s.circle}`} />
        </div>
        <div className={`${s.circle_2_container}`}>
          <div className={`${s.circle}`} />
        </div>

        {/* Positioned absolutely to Document Flow */}
        <div className={`${s.right_blurs}`}>
          <div className={`${s.purple}`}></div>
          <div className={`${s.tomato}`}></div>
        </div>
      </section>

      {/* ============= */}
      {/* Perks Section */}
      {/* ============= */}
      <section className={`${s.perks} bg-navy`}>
        <div className={`${s.perks_container} `}>
          <h1 className="white-text centralize">You Deserve Easy Access to Cryptocurrencies</h1>
          <p className="white-text centralize">Sachiel Wallet is for you if you want to</p>
          <div className={`${s.perk_grid} m-t-40 m-b-60`}>
            <div className={`${s.perk_wrapper} `}>
            {
              dummyArr 
              && (
                dummyArr.map((perk, index) => (
                <div key={index} className={`${s.perk_outline} flex br-10 justify-center align-center`}>
                  <div className={`${s.perk} f-18 br-10 p-15 flex flex-row align-center g-15`}>
                    <span className={`${s.left}`}>
                      <CheckCircleOutlineIcon className="f-40 white-text"/>
                    </span>
                    <span className={`${s.right}`}>
                      Exchange your crypto <br />
                      without leaving the app.
                    </span>
                  </div>
                </div>
                ))
              )
            }
            </div>
          </div>
          
          <div className={`${s.button_container} flex justify-center m-t-40`}>
            <button className="p-12 navy-text br-5 f-20 p-l-50 p-r-50 bg-light-teal">Download Now</button>
          </div>
        </div>
      </section>

      {/* ================ */}
      {/* Download Section */}
      {/* ================ */}
      <section className={`${s.download}`}>
        <div className={`${s.download_container}`}>
          <div className={`${s.download_text_container}`}>
            <h1 className="white-text">Get the <br /> Sachiel Wallet app now.</h1>
            <p className="white-text">
              With the Mobile App, You can be able to Manage multiple
              portfolios, stake and buy crypto, view your NFTs, and explore
              Web3 on Android and iOS.
            </p>
            <div className={`${s.buttons_container} flex flex-row align-center g-40 m-t-40`}>
              <button className="p-10 p-r-25 p-l-25 bg-black white-text flex flex-row g-10 align-center br-5">
                <span className=""><Image src={homeImages.apple} alt="apple logo"/></span>
                <span className="flex flex-column">
                  <span className="">Download on the</span>
                  <span className="f-20">App Store</span>
                </span>
              </button>
              <button className="p-10 p-r-25 p-l-25 bg-black white-text flex flex-row g-10 align-center br-5">
                <span className=""><Image src={homeImages.play_store} alt="playstore logo"/></span>
                <span className="flex flex-column">
                  <span className="">Get it on</span>
                  <span className="f-20">Google Play</span>
                </span>
              </button>
            </div>
          </div>

          <div className={`${s.download_image_container}`}>
            <Image src={homeImages.download_image} alt="download"/>
          </div>
        </div>
      </section>
    </main>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.tsx</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h2>Documentation &rarr;</h2>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h2>Learn &rarr;</h2>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/canary/examples"
    //         className={styles.card}
    //       >
    //         <h2>Examples &rarr;</h2>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //         className={styles.card}
    //       >
    //         <h2>Deploy &rarr;</h2>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
