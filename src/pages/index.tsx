import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Profile from '../pages/profile';
import { useEffect, useState } from 'react';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const [profile, setProfile] = useState({});

   useEffect(()=>{
    axios.get('https://ferrata.builtwithdark.com/open-profile/api/v1/profile/timbobeek')
      .then(res=>{
        console.log('res.data', res.data);
        setProfile(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
    
   },[]);

  return (
    <>
      <Head>
        <title>open-profile.page</title>
        <meta name="description" content="Open profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.description}>
            <p>Coming soon!</p>
          </div>
          {/* <div className='profileData'>
            <Profile name = {profile.name} bio = {profile.bio}/>
          </div> */}
        </div>
      </main>
    </>
  );
}
