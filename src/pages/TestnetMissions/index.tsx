import GridLayout from 'react-grid-layout';

import './index.css';
import '../../index.css';

import arrowdown from '@images/arrowdown.svg';

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

  const defaultLayout = createLayout(4);
  const mdLayout = createLayout(3);
  const smLayout = createLayout(2);
  const xsLayout = createLayout(1);

  return {
    lg: defaultLayout,
    md: mdLayout,
    sm: smLayout,
    xs: xsLayout,
  };
};

function TestnetMissionsGrid() {
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const layout = getLayoutForKeys(keys);

  const card = (
    header: string,
    body: string,
    pointCount: number,
    progress: number,
    isComplete: boolean,
  ) => (
    <>
      <div className="t--card--icon" />
      <div className="t--card--title">{header}</div>
      <div className="t--card--body">{body}</div>
      <div
        className={`card--point-tag ${
          isComplete && 'card--point-tag-completed'
        } t--card--point-tag`}
      >
        {`${isComplete ? `+${pointCount}` : pointCount} PTS`}
      </div>
      {isComplete && (
        <div className="t--card--completed">
          <div className="t--card--completed--title">Completed</div>
          <div className="t--card--completed--caption">Date</div>
        </div>
      )}
      {!isComplete && (
        <div className="t--card--progress-bar">
          <div className="t--flex-row">
            <div className="t--card--progress-bar--text">PROGRESS</div>
            <div className="t--card--progress-bar--text">{`${
              progress * 100
            }%`}</div>
          </div>
          <div className="t--card--progress-bar--object">
            <div
              className="t--card--progress-bar--object-filled"
              style={{ width: `calc(${progress * 100}% - ${progress * 36}px)` }}
            />
          </div>
        </div>
      )}
    </>
  );

  return (
    <ResponsiveGridLayout
      className="layout r--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
      rowHeight={220}
      margin={[18, 18]}
      cols={{ lg: 16, md: 12, sm: 8, xs: 4 }}
    >
      <div className="card t--card card-completed" key="1">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          1,
          true,
        )}
      </div>
      <div className="card t--card" key="2">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          0.5,
          false,
        )}
      </div>
      <div className="card t--card" key="3">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          0,
          false,
        )}
      </div>
      <div className="card t--card" key="4">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          0,
          false,
        )}
      </div>
    </ResponsiveGridLayout>
  );
}

export default function TestnetMissionsPage() {
  return (
    <div className="page-content">
      <div className="t--header">
        <div className="page--header">Testnet Missions</div>
        <div className="t--view-buttons">
          <div className="t--view-button">
            <div className="t--view-button--text">Sort By</div>
            <img src={arrowdown} alt="Down" className="t--view-button--icon" />
          </div>
          <div className="t--view-button" style={{ marginLeft: '12px' }}>
            <div className="t--view-button--text">Filter</div>
          </div>
        </div>
      </div>
      <TestnetMissionsGrid />
    </div>
  );
}
