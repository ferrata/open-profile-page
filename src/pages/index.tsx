import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import ProfileData from './profile';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  // type Profile = {
  //   name?: string
  // }

  const [profile, setProfile] = useState<any>({})

  useEffect(()=>{
    axios.get('https://ferrata.builtwithdark.com/open-profile/api/v1/profile/timbobeek')   //gotta make the username part dynamic `${username}`
      .then(res=>{
        console.log('res.data', res.data);
        setProfile(res.data);  
        //console.log('profile', profile);
      })
      .catch(err =>{
        console.log(err)
      })
    
  },[]);

  //const {name} = profile;

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
            {profile?.gitHub?.profile?.avatarUrl}<br/>
            {profile?.gitHub ? profile?.gitHub?.profile?.name :  "loading..."}
          </div>
        </div>
      </main>
    </>
  );
}
