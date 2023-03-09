import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import {Profile} from '../types/types';
import axios from 'axios';

//need to refactor code below using types?

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const [profile, setProfile] = useState<Profile>({})
  const [languages, setLanguages] = useState<string[]>([])

  useEffect(()=>{
    axios.get(`https://ferrata.builtwithdark.com/open-profile/api/v1/profile/ferrata`)   //gotta make the username part dynamic `${username}`
      .then(res=>{
        setProfile(res.data);
        setLanguages(res.data.gitHub.languagesUsed);  
      })
      .catch(err =>{
        console.log(err)
      })
  },[]);

  let a : string[] = Object.keys(languages);
  let b : string[] = Object.values(languages);

  let newArray : string[] = a.map((e, i) => e + '(' + b[i] + ') ');

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
          <div className={profile?.gitHub ? styles.description1 : styles.description2}>
            Profile Picture URL: {profile?.gitHub?.profile?.avatarUrl}<br/><br/>
            Name: {profile?.gitHub?.profile?.name}<br/><br/>
            Bio: {profile?.gitHub?.profile?.bio}<br/><br/>
            Profile URL: {profile?.gitHub?.profile?.url}<br/><br/>
            Languages: {newArray}<br/><br/>
            Top 5 Starred Repos: <br></br><br></br> {(profile?.gitHub?.topFiveStarredRepos)?.map((obj: any, i:number) => ' [Project ' + (i+1) + ']:  Description: (' + obj.description + ') Language: (' + obj.language + ') Name: (' + obj.name + ') Stars: (' + obj.stars + ') URL: (' + obj.url + ') ' )}
          </div>
          <div className={profile?.gitHub ? styles.description2 : styles.description1}>
            Loading.......
          </div>
        </div>
      </main>
    </>
  );
}
