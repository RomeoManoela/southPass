import { useEffect } from 'react';
import { getPasswords, getUser } from '../service/apis.ts';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPasswords, setCurrentPasswords, setCurrentUser } from './userSlice.ts';
import { useNavigation } from 'react-router-dom';
import Password from './Password.tsx';

function Dashboard() {
  const dispatch = useDispatch();
  const passwords = useSelector(getCurrentPasswords);
  const navigation = useNavigation();
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function setUser() {
      navigation.state = 'loading';
      const user = await getUser();
      dispatch(setCurrentUser({ username: user.user.username, id: user.user.id }));
      navigation.state = 'idle';
      const passwords = await getPasswords();
      console.log(passwords);
      dispatch(setCurrentPasswords(passwords));
    }
    setUser();
  }, []);
  return (
    <div className={'mx-auto w-3/4 p-2 sm:p-4 md:p-8'}>
      {passwords.map((p, i) => (
        <Password key={i} password={p} />
      ))}
    </div>
  );
}

export default Dashboard;
