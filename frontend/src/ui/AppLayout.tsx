import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import Loader from './Loader.tsx';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className={'grid h-screen grid-rows-[auto_1fr_auto]'}>
      {isLoading && <Loader />}
      <Header />
      <main className={'relative overflow-scroll px-2 py-1 sm:px-4 md:px-8'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
