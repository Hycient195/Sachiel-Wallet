// import Header from '../header/header';
// import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';


interface TProps {
  // children: NextComponentType<NextPageContext, any, any>
  children: any
}

export default function Layout({children}: TProps){
  const router = useRouter();
  return(
    <div className="view-container">
      <Navbar />
      { children }
      <Footer />
      {/* <Footer /> */}
      {/* {         
        !router.pathname.endsWith("/") ? 
        <Footer /> :
        null
      } */}
      
    </div>
  )
}