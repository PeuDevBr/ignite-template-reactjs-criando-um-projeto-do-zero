import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { GetStaticProps } from 'next';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog | Desafio III</title>
      </Head>

      <main>
        <div>
          <Link href="/">
            <a className={styles.post}>
              <strong>Título</strong>
              <p>Lorem ipsum dolor sit amet</p>
              <ul>
                <li>
                  <FiCalendar />
                  05 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Flávio Renato
                </li>
              </ul>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
  //   // TODO
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
