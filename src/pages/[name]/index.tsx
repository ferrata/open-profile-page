import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Profile } from '../../types/Profile';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const name = router.query.name;

  const [profile, setProfile] = useState<Profile>({})
  const [languages, setLanguages] = useState<string[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    if (!name) {
      return;
    }

    let location = `https://ferrata.builtwithdark.com/open-profile/api/v1/profile/${name}`;
    axios.get(location)
      .then(res => {
        setProfile(res.data);
        setLanguages(res.data.gitHub.languagesUsed);
      })
      .catch(err => {
        console.log(err)
        setError(err.message);
      })
  }, [name]);

  let a: string[] = Object.keys(languages);
  let b: string[] = Object.values(languages);

  let newArray: string[] = a.map((e, i) => e + '(' + b[i] + ') ');

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
          {error ?
            <div className={styles.description}>
              Loading error: {error}
            </div>
            :
            profile?.gitHub ?
              <div className={styles.description}>
                Profile Picture URL: {profile?.gitHub?.profile?.avatarUrl}<br /><br />
                Name: {profile?.gitHub?.profile?.name}<br /><br />
                Bio: {profile?.gitHub?.profile?.bio}<br /><br />
                Profile URL: {profile?.gitHub?.profile?.url}<br /><br />
                Languages: {newArray}<br /><br />
                Top 5 Starred Repos: <br></br><br></br> {(profile?.gitHub?.topFiveStarredRepos)?.map((obj: any, i: number) => ' [Project ' + (i + 1) + ']:  Description: (' + obj.description + ') Language: (' + obj.language + ') Name: (' + obj.name + ') Stars: (' + obj.stars + ') URL: (' + obj.url + ') ')}
              </div>
              :
              <div className={styles.description}>
                Loading {name ?? ""}.....
              </div>
          }
        </div>
      </main>
    </>
  );
}
