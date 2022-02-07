import './index.css';
import logo from '../../images/logo.svg';
import qrcode from '../../images/qrcode.svg';

export default function NavigationBar(props: any) {
  const { address, pointCount, selectedPage, didSelectPage } = props;
  const pages = ['Mission Control', 'Rektdrop Rewards', 'Testnet Missions'];

  const stringAddress = address as string;
  let adjustedAddress = stringAddress;

  if (stringAddress && stringAddress.length > 11) {
    adjustedAddress = `${stringAddress.slice(0, 8)}...${stringAddress.slice(
      stringAddress.length - 5,
    )}`;
  }

  return (
    <div className="n">
      <img src={logo} alt="Evmos" className="n--logo" />
      <div className="n--page-container">
        {pages.map((page, i) => (
          <div
            className={`n--page ${
              i + 1 === selectedPage && 'n--page-selected'
            }`}
            onClick={() => didSelectPage(i + 1)}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="n--address">
        <div className="card--point-tag n--address--points">{`${pointCount} PTS`}</div>
        <img src={qrcode} alt="Wallet Address" className="n--address--qr" />
        <div className="n--address--wallet">{adjustedAddress}</div>
      </div>
    </div>
  );
}
