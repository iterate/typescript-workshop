import * as React from 'react';

export const StarshipComp: React.SFC<any> = () => {
  return (
    <div className="container">
      <div className="card">
        <header className="header">
          <p className="card-header-title">Starship</p>
        </header>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">STARSHIP NAME</p>
            <p className="subtitle is-6">STARSHIP MODEL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
