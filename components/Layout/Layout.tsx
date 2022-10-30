// import Header from '../header/header';
// import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';


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
      {/* <Footer /> */}
      {/* {         
        !router.pathname.endsWith("/") ? 
        <Footer /> :
        null
      } */}
      
    </div>
  )
}