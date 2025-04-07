
import React from 'react';

function Support() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Підтримка</h2>
      <div className="card">
        <div className="card-body">
          <h5>Технічна підтримка</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Консультації
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Онлайн чат</li>
                <li>• Телефонна підтримка</li>
                <li>• Email підтримка</li>
              </ul>
            </li>
            <li className="list-group-item">Повідомити про проблему
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Технічні проблеми</li>
                <li>• Помилки в даних</li>
                <li>• Пропозиції покращення</li>
              </ul>
            </li>
            <li className="list-group-item">Часті запитання
              <ul className="list-unstyled ms-3 mt-2">
                <li>• База знань</li>
                <li>• Інструкції користувача</li>
                <li>• Відеоуроки</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
