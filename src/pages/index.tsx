import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import LanguagesData from './languages';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  // type Profile = {
  //   name?: string
  // }

  const [profile, setProfile] = useState<any>({})
  const [languages, setLanguages] = useState<string[]>([])
  //const [projects, setProjects] = useState<any>({})


  useEffect(()=>{
    axios.get('https://ferrata.builtwithdark.com/open-profile/api/v1/profile/ferrata')   //gotta make the username part dynamic `${username}`
      .then(res=>{
        setProfile(res.data);
        setLanguages(res.data.gitHub.languagesUsed);  
        //setProjects(res.data.gitHub.topFiveStarredRepos);

      })
      .catch(err =>{
        console.log(err)
      })
    
  },[]);

  let a = Object.keys(languages);
  let b = Object.values(languages);

  let newArray = a.map((e, i) => e + '(' + b[i] + ') ');




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
            Profile Picture URL: {profile?.gitHub?.profile?.avatarUrl}<br/><br/>
            Name: {profile?.gitHub ? profile?.gitHub?.profile?.name :  "loading..."}<br/><br/>
            Bio: {profile?.gitHub?.profile?.bio}<br/><br/>
            Profile URL: {profile?.gitHub?.profile?.url}<br/><br/>
            Languages: {newArray}<br/><br/>
            Top 5 Starred Repos: {(profile?.gitHub?.topFiveStarredRepos)?.map((obj, i) => ' Project ' + i + ': ' + obj.description )}
          </div>
            
        </div>
      </main>
    </>
  );
}
