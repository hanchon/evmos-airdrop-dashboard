import '../Landing/index.css';
import './index.css';
import '../../index.css';

// Components
import GridLayout from 'react-grid-layout';

// Images
import magnifyingglass from '@images/magnifyingglass.svg';
import logo from '@images/logo.svg';
import cardimage from '@images/cardimage.svg';

import MissionData from '@assets/missiondata';

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

/// Helper
const getLayoutForKeys = (keys: string[]) => {
  const createLayout = (numItemsPerRow: number) => {
    return keys.map((key, index) => ({
      i: key,
      x: (index % numItemsPerRow) * 4,
      y: Math.floor(index / numItemsPerRow) * 2,
      w: 4,
      h: 2,
      static: true,
    }));
  };

  const defaultLayout = createLayout(3);
  const smLayout = createLayout(2);
  const xsLayout = createLayout(1);

  return {
    lg: defaultLayout,
    md: defaultLayout,
    sm: smLayout,
    xs: xsLayout,
  };
};

function DashboardGrid(props: any) {
  const { userMissions } = props;
  const allMissions = Object.values(MissionData).flatMap((array, index) =>
    array.map(val => ({ ...val, missionId: index + 1 })),
  );
  const keys = allMissions.map(mission => mission.id.toString());

  const layout = getLayoutForKeys(keys);

  const statusForCard = (id: number, totalPoints: number) => {
    if (userMissions.includes(id)) {
      return (
        <>
          <div className="d--icon" style={{ background: '#1CDC30' }} />
          <p className="d--card--body">Completed</p>
        </>
      );
    }
    return (
      <>
        <div className="d--icon" style={{ background: '#F8A933' }} />
        <p className="d--card--body">Incomplete</p>
      </>
    );
  };

  return (
    <ResponsiveGridLayout
      className="layout d--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      rowHeight={200}
      margin={[48, 48]}
      cols={{ lg: 12, md: 12, sm: 8, xs: 4 }}
    >
      {allMissions.map(mission => (
        <div className="d--card" key={mission.id}>
          <div className="d--card--tag">15 EVMOS</div>
          <img src={cardimage} alt="Card" />
          <h3 className="d--card--title">{mission.description}</h3>
          <div className="d--row">
            {statusForCard(mission.id, mission.points)}
          </div>
          <p className="d--card--body">{`Mission ${mission.missionId} · ${mission.points} pts`}</p>
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}

export default function DashboardPage(props: any) {
  const { userAddress, userMissions, searchForWallet } = props;
  const totalNumMissions = Object.values(MissionData)
    .map(array => array.length)
    .reduce((a, b) => a + b);
  const numComplete = userMissions.length;
  // const numIncomplete = totalNumMissions - numComplete;

  // Add to leaderboard
  // const totalNumPoints = Object.values(MissionData)
  //   .flatMap(array => array)
  //   .map(mission => mission.points)
  //   .reduce((a, b) => a + b);

  // const userPoints = Object.values(MissionData)
  //   .flatMap(array => array)
  //   .filter(mission => userMissions.includes(mission.id))
  //   .map(mission => mission.points)
  //   .reduce((a, b) => a + b, 0);

  const dateLastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  });

  // Search at new address
  const submitRequest = (event: any) => {
    event.preventDefault();

    const address = event.target[0].value ?? '';
    searchForWallet(address);
  };

  return (
    <div className="page-base d--page-base">
      <div className="d--page-top">
        <div className="d--page-header">
          <div className="d--row d--page-header-mobile">
            <img src={logo} alt="Evmos" className="d--header-logo" />
          </div>
          <form onSubmit={submitRequest}>
            <div className="d--header-search">
              <button className="la--button" type="submit">
                <img src={magnifyingglass} alt="Arrow Right" />
              </button>
            </div>
          </form>
        </div>
        <div className="d--title-container">
          <div className="d--col" style={{ flex: 1 }}>
            <h3 className="d--title d--desktop">{userAddress}</h3>
            <p className="d--caption">{`Last Updated – ${dateLastUpdated}`}</p>
          </div>
          <h3 className="d--subtitle">{`${numComplete}/${totalNumMissions}`}</h3>
        </div>
      </div>
      <DashboardGrid userMissions={userMissions} />
    </div>
  );
}
