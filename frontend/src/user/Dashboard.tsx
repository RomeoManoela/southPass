import { useEffect, useState } from 'react';
import { getPasswords, getUser } from '../service/apis.ts';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPasswords, setCurrentPasswords, setCurrentUser } from './userSlice.ts';
import { useNavigation } from 'react-router-dom';
import Password from '../password/Password.tsx';
import { Button } from '../ui/Button.tsx';
import CreatePassword from '../password/CreatePassword.tsx';

function Dashboard() {
  const dispatch = useDispatch();
  const passwords = useSelector(getCurrentPasswords);
  const navigation = useNavigation();
  const [createModal, setCreateModal] = useState<boolean>(false);

  useEffect(() => {
    async function setUser() {
      navigation.state = 'loading';
      const user = await getUser();
      dispatch(setCurrentUser({ username: user.user.username, id: user.user.id }));
      navigation.state = 'idle';
      const passwords = await getPasswords();
      dispatch(setCurrentPasswords(passwords));
    }
    setUser();
  }, []);
  return (
    <div className={'mx-auto w-3/4 p-2 sm:p-4 md:p-8'}>
      {createModal && <CreatePassword onsetCreate={setCreateModal} />}
      <Button variant={'primary'} onClick={() => setCreateModal(true)}>
        Add
      </Button>
      {passwords.length == 0 ? (
        <p>No passwords found</p>
      ) : (
        passwords.map((p, i) => <Password key={i} password={p} />)
      )}
    </div>
  );
}

export default Dashboard;
