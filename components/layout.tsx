import { motion } from 'framer-motion';
import Footer from './footer';
import Navigation from './navigation';
import SideBar from './sidebar';

const Layout = ({ children, className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={[
        'mx-auto mb-48 flex w-full max-w-5xl flex-col items-end transition-all duration-1000 sm:mt-48 sm:px-2',
        className,
      ].join(' ')}>
      <Navigation className="max-sm:hidden" />
      <div className="flex w-full flex-col items-stretch justify-start rounded-3xl bg-white shadow-lg sm:flex-row sm:rounded-tr-none">
        <SideBar className="max-sm:rounded-t-none"></SideBar>
        <main className="grow overflow-hidden">{children}</main>
      </div>
      <Footer className="fixed bottom-0 z-[-1] mb-12 w-full max-w-5xl" />
    </motion.div>
  );
};

export default Layout;
