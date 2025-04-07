
import React from 'react';

function Teachers() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Викладачі</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління викладачами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Список викладачів
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Пошук за кафедрою</li>
                <li>• Фільтр за званням</li>
                <li>• Контактна інформація</li>
              </ul>
            </li>
            <li className="list-group-item">Додати викладача
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Професійні дані</li>
                <li>• Наукові досягнення</li>
                <li>• Призначення дисциплін</li>
              </ul>
            </li>
            <li className="list-group-item">Кафедри
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Структура кафедр</li>
                <li>• Керівництво</li>
                <li>• Розклад засідань</li>
              </ul>
            </li>
            <li className="list-group-item">Навантаження
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Розподіл годин</li>
                <li>• Звітність</li>
                <li>• Планування семестру</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
