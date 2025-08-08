import MetaHead from './MetaHead';
import Header from './Header';
import Footer from './Footer';

export default function Layout({children}) {
  return (
    <>
      <MetaHead />
      <Header />
      <div className="wrapper container">
        {children}
      </div>
      <Footer />
    </>
  );
}