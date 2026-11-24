import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Seo from '../common/Seo/Seo';
import ScrollManager from '../common/ScrollManager/ScrollManager';

/** Shared shell: navbar + routed page + footer. Pages render only their <main>. */
const Layout = () => (
  <>
    <Seo />
    <ScrollManager />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

export default Layout;
