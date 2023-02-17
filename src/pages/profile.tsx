import Head from "next/head";
// import React from "react";

const ProfileData = (props: any) => {        //change to specific type later
    const {name} = props;

    return(
        <Head>
            <p>My name is </p>
        </Head>
    )
}

export default ProfileData;