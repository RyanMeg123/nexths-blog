import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";
import Alert from '../../components/alert'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Postfdfd</title>
      </Head>
      <h1>Fist post</h1>
      <h2>
        {/* <a href="/"></a> */}
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </h2>
      <Alert  className={'success'}>Alert</Alert>
    </Layout>
  );
}
