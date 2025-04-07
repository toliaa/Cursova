
import React from 'react';

function Schedule() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Розклади</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління розкладом</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Розклад занять</li>
            <li className="list-group-item">Розклад іспитів</li>
            <li className="list-group-item">Консультації</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
