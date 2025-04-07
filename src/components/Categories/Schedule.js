
import React from 'react';

function Schedule() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Розклади</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління розкладом</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Розклад занять
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Щотижневий розклад</li>
                <li>• Зміни в розкладі</li>
                <li>• Розклад за групами</li>
              </ul>
            </li>
            <li className="list-group-item">Розклад іспитів
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Екзаменаційна сесія</li>
                <li>• Перездачі</li>
                <li>• Консультації</li>
              </ul>
            </li>
            <li className="list-group-item">Консультації
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Графік консультацій</li>
                <li>• Запис на консультацію</li>
                <li>• Онлайн консультації</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
