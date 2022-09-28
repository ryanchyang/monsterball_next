import styles from '../../styles/Invite.module.scss';
import Image from 'next/image';
import { MdContentCopy } from 'react-icons/md';

const InviteFriend = () => {
  return (
    <section className={styles['invite-friend-area']}>
      <div className={styles['invite-friend-block']}>
        <div className={`${styles['content-block']} ${styles['content-bg']}`}>
          <div className={styles['text-block']}>
            <p>Your rebate ratio</p>
            <p>Friends rebate ratio</p>
          </div>
          <div className={styles['text-block']}>
            <p>5%</p>
            <p>3% / 2%</p>
          </div>
        </div>
        <div
          className={`${styles['content-block']} ${styles['content-second']}`}
        >
          <div className={styles['text-block']}>
            <p>Referral ID</p>
            <div className="w-100 d-flex justify-content-end">
              <MdContentCopy className={styles.copy} />
            </div>
          </div>
        </div>
        <div className={styles['content-block']}>
          <div className={styles['text-block']}>
            <div>
              <p className={styles.nowrap}>Referral Link</p>
            </div>

            <div className="w-100 d-flex justify-content-end">
              <p className="text-break">https://monsterball...ref=</p>
              <div className="d-flex align-items-center">
                <MdContentCopy className={styles.copy} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles['btn-mt']} d-flex`}>
          <div
            className={`${styles['content-block']} w-100 d-flex justify-content-center justify-content-xl-end`}
          >
            <p className={styles['invite-btn']}>Invite friends</p>
          </div>
          <div
            className={`${styles['content-block']} ${styles['qrcode-btn']} ms-4`}
          >
            <Image
              src={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAqtJREFUSEull81NHEEQhXtS2IsdwHKwL3CCEOzNAQQJINmRWIIEjAiCJYTdE75wYQPgRAqDvpHf6E2pumew+7Lq7pr6ffW6tuv7vi+N9fP2tjzu94PE8/39KBnPv15cjHffTk/Lr+vrltrSYdg/cmkMuQHdyQEc4p49OiSPHIZbekfDl5tNOVmvJxFFw4qCiO4eHsp2vy9/DofC/vvZWdnudsP+eL0eDXvkT4fD8B16R8MIoEDLI5AylEsGBShiETnfZ4a9PJ6hRYY9da7InRQGSH1N/r8Nkw3PkGqZ1Xg24gyCscZSEkEjcEmHUD0Lrrl2iqlTxJy3UN3S2/24uWn2McBigVQhl1qxZ2Wolvwiwyh4fXubkIA2nHPvNXSHcCSm29MuB13/gGqlTAwlhOpjR6POMvRmNRUuIhGl7aQeztCbtVNsK+1rsujtvpyf9xk1uqcCF7+KKhKO7sRUc6CbGHb0yuvYr7XUqcbRsJfGH5tuu9v1UN3J0dHA1aBVNUXJ08tL+bxaFbicc1Em4IKroU5hgmzwPXrQh6yw4OAduZpLNyyw0T6//yq+2mwmXI4iuBrHhGr0cP5ptSqSd8ARgNpygmqvpdczA0uNk5e80wO4/D12qstqWevViN659iOQ6iCQGakZrjGUDwjIpK8TFz6yzE0UWTvVHIjcPkQMVwvmKr68wxGfKCLanQKFDx8QvD2d20fDNU/FsRplhHaijROIWkrIVltm5SGgEdU1447eVirdsEdaw8qiKTMqkgM19MbHJhscFs1crsijztovy0r22HzYcOvxiP0cI/Wu+SfDDiA9ChhBMVTJgmqVKcnQBVAs+0UDvVoKhT64OycLhHA+CwNafDOcZQN9Vps4riLjxFL7TyUwSmcVXK0+ju1UG28yh6Q3G5PfAZkMTYuVG+vtAAAAAElFTkSuQmCC'
              }
              width={27}
              height={27}
              alt="qrcode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteFriend;
