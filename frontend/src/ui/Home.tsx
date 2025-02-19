import { Link, useLoaderData } from 'react-router-dom';

function Home() {
  const isAuthenticated = useLoaderData();
  return (
    <div>
      <section className={'mt-4 space-y-10 text-center'}>
        <h1
          className={
            'hack text-xl tracking-widest md:text-[2rem]' +
            ' text-green-950 md:tracking-[0.7rem]'
          }
        >
          SOUTH PASS
        </h1>
        <h2>🔐 Manage Your Passwords Securely with SouthPass</h2>
        <button
          className={
            'bg-stone-800 px-4 py-1 text-white hover:bg-stone-600 ' +
            ' rounded-md font-medium transition-colors' +
            ' focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2' +
            ' disabled:pointer-events-none disabled:opacity-50'
          }
        >
          {isAuthenticated ? (
            <Link to={'/dashboard'}>GO TO DASHBOARD</Link>
          ) : (
            <Link to={'/login'}>GET STARTED</Link>
          )}
        </button>
      </section>

      <section className={'mt-4 text-center md:flex md:justify-center md:text-left'}>
        <section className={'md:w-2/5'}>
          <h1 className='hack text-lime-900'>Features</h1>
          <ul>
            <li>🔒 Secure Storage: Your passwords are encrypted and stored safely.</li>
            <li>⚡ Quick Access: Retrieve your credentials in seconds.</li>
            <li>
              🔑 Auto-Fill & Generator: Generate strong passwords and auto-fill them
              instantly.
            </li>
          </ul>
        </section>

        <section className={'md:w-2/5'}>
          <h1 className={'text-lime-900'}>CEO</h1>
          <p>
            "SouthPass changed the way I manage my passwords, built with passion and
            continuously improved through your feedback." –
            <span className={'italic text-lime-900'}>Romeo</span>.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Home;
