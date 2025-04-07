
import React from 'react';

function Finance() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Фінанси</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління фінансами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Оплата навчання
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Контракти</li>
                <li>• Графік платежів</li>
                <li>• Історія оплат</li>
              </ul>
            </li>
            <li className="list-group-item">Стипендії
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Академічна стипендія</li>
                <li>• Соціальна стипендія</li>
                <li>• Іменні стипендії</li>
              </ul>
            </li>
            <li className="list-group-item">Бюджет
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Планування бюджету</li>
                <li>• Звіти про витрати</li>
                <li>• Фінансові показники</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Finance;
