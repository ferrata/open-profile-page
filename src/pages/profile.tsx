import Head from "next/head";
// import React from "react";

const ProfileData = (props: any) => {        //change to specific type later
    const {name, bio} = props;

    return(
        <Head>
            {name}
            <div>
                {bio}
            </div>
        </Head>
    )
}

export default ProfileData;