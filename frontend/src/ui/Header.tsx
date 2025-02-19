import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const username = useSelector((state) => state.user.username);
  return (
    <header className={'flex items-center justify-between bg-lime-800 px-4 py-2 sm:px-6'}>
      <Link to={'/'} className={'hack tracking-widest sm:tracking-[0.5rem]'}>
        SOUTH PASS
      </Link>
      <p
        className={
          'rounded bg-lime-900 px-2 text-[1.3rem] font-bold text-stone-400 sm:text-[1.5rem]'
        }
      >
        {username && username}
      </p>
    </header>
  );
}

export default Header;
