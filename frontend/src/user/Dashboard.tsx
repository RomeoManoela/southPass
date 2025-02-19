import { useEffect } from 'react';
import { getUser } from '../service/apis.ts';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './userSlice.ts';
import { useNavigation } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function setUser() {
      navigation.state = 'loading';
      const user = await getUser();
      console.log(user);
      dispatch(setCurrentUser({ username: user.user.username, id: user.user.id }));
      navigation.state = 'idle';
    }
    setUser();
  }, []);
  return (
    <div>
      Da
      {/*{isLoading && <Loader />}*/}
    </div>
  );
}

export default Dashboard;
