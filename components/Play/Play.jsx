import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Play.module.scss';
import Image from 'next/image';
import appleBtn from '@/images/apple.png';
import androidBtn from '@/images/android.png';
// import { useSession, signOut } from 'next-auth/react';
import MyModal from 'components/Modal/MyModal';
import SignUpAppModal from 'components/Modal/SignUpAppModal';

const Play = () => {
  const router = useRouter();
  const [connectModalShow, setConnectModalShow] = useState(false);

  useEffect(() => {
    if (!router) return;
    if (router.query.app === 'false') {
      setConnectModalShow(true);
    }
  }, [router]);
  return (
    <>
      <MyModal
        show={connectModalShow}
        onHide={() => setConnectModalShow(false)}
        content={<SignUpAppModal />}
        title={'Sign up in App'}
      />
      <div className={`${styles.section}`}>
        <h2 className="mb-5">Download our APP</h2>
        <p className={`${styles.content} pb-5`}>
          Start Adventure on mobile enjoy chainlink unlimited
        </p>
        <div className="mt-5 d-flex">
          <div className="me-4">
            <Image src={appleBtn} alt="" width={150} height={50} />
          </div>
          <div>
            <Image src={androidBtn} alt="" width={150} height={50} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
