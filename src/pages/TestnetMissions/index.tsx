import Card from '@components/Card';

export default function TestnetMissionsPage() {
  return (
    <div className="page-content">
      <div className="t--header">
        <div className="page--header">Testnet Missions</div>
        <div className="t--view-buttons">
          <div className="t--view-button">
            <div className="t--view-button--text">Sort By</div>
            {/* <img src={arrowdown} alt="Down" className="t--view-button--icon" /> */}
          </div>
          <div className="t--view-button" style={{ marginLeft: '12px' }}>
            <div className="t--view-button--text">Filter</div>
          </div>
        </div>
      </div>
      <Card title="Foo title" aria-label="This is a foo card">
        Foo
      </Card>
    </div>
  );
}
