import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={'hack bg-lime-950 text-center text-stone-400'}>
      Copyright ©️ 2025, developed by{' '}
      <Link
        to={'https://github.com/RomeoManoela'}
        className={'text-white transition-all duration-100 hover:text-stone-300'}
      >
        Roméo
      </Link>
    </footer>
  );
}

export default Footer;
