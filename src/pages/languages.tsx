import Head from "next/head";
// import React from "react";



///NOT SURE I NEED THIS COMPONENT!!!!!

const LanguagesData = (props: any) => {        //change to specific type later
    const {name} = props;

    console.log(props);

    return(
        <Head>
            <p>My name is {name} </p>
        </Head>
    )
}

export default LanguagesData;