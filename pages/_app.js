import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import Login from './login';
import Loading from '../components/Loading';
import firebase from 'firebase';
import { useEffect } from 'react';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
      },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return (
    <>
      <Head>
        <title>LineupX - Changing the way the world hires talent</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
