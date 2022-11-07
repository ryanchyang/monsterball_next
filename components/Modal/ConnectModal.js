import Image from "next/image";
import Spinner from "components/Spinner";
import metamaskLogo from "@/images/metamask.png";
import walletconnectLogo from "@/images/walletconnect.png";
import { shortenAddress } from "utils/helpers/shortenAddress";
import { BsLink45Deg } from "react-icons/bs";

const ConnectModal = (props) => {
  const {
    metamaskConnector,
    walletconnectConnector,
    activeConnector,
    connectIsLoading,
    isConnected,
    connect,
    disconnect,
    bindWalletStatus,
    bindWalletLoading,
    bindWalletHandler,
    address,
  } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="text-center mb-5">
        Please finish wallet setting to unlocked more operation authority.
      </p>
      <button
        className="connect-wallet-metamask-btn mb-4"
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
      {/* wallet address */}
      {address && (
        <div className="address-modal-btn mt-5 mb-4 cursor-pointer">
          {shortenAddress(address)}
        </div>
      )}
      {/* bind wallet btn */}
      {!bindWalletStatus && isConnected ? (
        <button className="bind-wallet-btn mb-4" onClick={bindWalletHandler}>
          {bindWalletLoading ? (
            <div className="spinner-container">
              <Spinner />
            </div>
          ) : (
            "Bind wallet"
          )}
        </button>
      ) : (
        ""
      )}
      {isConnected && (
        <button className="disconnect-wallet-btn" onClick={disconnect}>
          <span>{`Disconnect from ${activeConnector?.name}`}</span>
        </button>
      )}
    </div>
  );
};

export default ConnectModal;
