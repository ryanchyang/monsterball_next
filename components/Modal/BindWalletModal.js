import Image from 'next/image';
import Spinner from 'components/Spinner';
import metamaskLogo from '@/images/metamask.png';
import walletconnectLogo from '@/images/walletconnect.png';

const BindWalletModal = props => {
  const {
    metamaskConnector,
    walletconnectConnector,
    activeConnector,
    connectIsLoading,
    isConnected,
    connect,
    disconnect,
  } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <button
        className="connect-wallet-metamask-btn mb-3"
        onClick={() => connect({ connector: metamaskConnector })}
        disabled={!metamaskConnector.ready || connectIsLoading || isConnected}
      >
        {connectIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <div>
          <Image src={metamaskLogo} alt="metamask-button" />
        </div>
      </button>
      <button
        className="connect-wallet-metamask-btn"
        onClick={() => connect({ connector: walletconnectConnector })}
        disabled={
          !walletconnectConnector.ready || connectIsLoading || isConnected
        }
      >
        <div>
          <Image src={walletconnectLogo} alt="walletconnect-button" />
        </div>
      </button>
      {isConnected && (
        <button className="disconnect-wallet-btn mt-5" onClick={disconnect}>
          <span>{`Disconnect from ${activeConnector?.name}`}</span>
        </button>
      )}
    </div>
  );
};

export default BindWalletModal;
