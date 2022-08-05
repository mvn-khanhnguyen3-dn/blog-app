import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
