
import React from 'react';

function Reports() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Звіти</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління звітами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Звіти по успішності
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Середній бал групи</li>
                <li>• Рейтинг студентів</li>
                <li>• Аналіз успішності</li>
              </ul>
            </li>
            <li className="list-group-item">Відвідуваність
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Щомісячний звіт</li>
                <li>• Статистика пропусків</li>
                <li>• Індивідуальні звіти</li>
              </ul>
            </li>
            <li className="list-group-item">Статистика
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Загальна успішність</li>
                <li>• Порівняльний аналіз</li>
                <li>• Графіки та діаграми</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Reports;
