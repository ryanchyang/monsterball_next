import Spinner from 'components/Spinner';

const SwitchAlertModal = props => {
  const {
    switchNetwork,
    binanceChainId,
    switchIsLoading,
    activeConnector,
    disconnect,
  } = props;
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p className="mb-5">
        Currently this page only supported in BNB Smart Chain Testnet. Please
        switch your network to continue.
      </p>
      <button
        className="switch-network-btn mb-4"
        onClick={() => switchNetwork(binanceChainId)}
        disabled={switchIsLoading}
      >
        {switchIsLoading && (
          <div className="spinner-container">
            <Spinner />
          </div>
        )}
        <span>Switch network in wallet</span>
      </button>
      <button className="disconnect-wallet-btn" onClick={disconnect}>
        <span>{`Disconnect from ${activeConnector?.name}`}</span>
      </button>
    </div>
  );
};

export default SwitchAlertModal;
