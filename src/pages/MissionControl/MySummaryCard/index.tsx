// Components
import Button from '@components/Button';
import Card, { CardProps } from '@components/Card';
import ProgressBar from '@components/ProgressBar';
import Text from '@components/Text';
import Stat from '@components/Stat';

// Icons
import AirdropIcon from '@images/icons/AirdropIcon';
import WalletIcon from '@images/icons/WalletIcon';

// Styles
import cn from 'classnames';
import css from './index.module.css';

const UnconnectedWalletContent = () => {
  return (
    <>
      <div className={css.connectText}>
        Connect your wallet to view your tokens and progres.
      </div>
      <Button className={css.connectButton} Icon={WalletIcon}>
        CONNECT WALLET
      </Button>
    </>
  );
};

const ElidibleWalletContent = () => {
  return (
    <>
      <Text spacing={3}>Rektdrop Progress</Text>
      <ProgressBar value={25} />
      <div className={css.progressStatsWrapper}>
        <Text type="value">25%</Text>
        <Text type="value">1 / 4</Text>
      </div>
      <div className={css.summaryStatsWrapper}>
        <Stat title="Totel Tokens Claimable" value={5600} />
        <Stat title="Total Tokens Claimed" value={1400} />
        <Stat title="Mars Missions Points" value={124} />
        <Stat title="Overall Rank" value={48} />
      </div>
      <Button className={css.connectButton} Icon={AirdropIcon}>
        CLAIM YOUR REKTDROP
      </Button>
    </>
  );
};

export type MySummaryCardProps = Partial<CardProps>;

const MySummaryCard: React.FC<MySummaryCardProps> = ({
  className = '',
  ...restProps
}) => {
  const classes = cn(className, css.mySummaryCard);

  return (
    <Card
      title="My Summary"
      aria-label="My Rektdrop Summary"
      className={classes}
      {...restProps}
    >
      <ElidibleWalletContent />
      {/* <UnconnectedWalletContent /> */}
    </Card>
  );
};

export default MySummaryCard;
