
import React from 'react';

function Students() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Студенти</h2>
      <div className="card">
        <div className="card-body">
          <h5>Управління студентами</h5>
          <ul className="list-group mt-3">
            <li className="list-group-item">Список студентів
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Пошук за групою</li>
                <li>• Фільтр за курсом</li>
                <li>• Експорт даних</li>
              </ul>
            </li>
            <li className="list-group-item">Додати нового студента
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Персональні дані</li>
                <li>• Завантаження документів</li>
                <li>• Призначення групи</li>
              </ul>
            </li>
            <li className="list-group-item">Групи
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Створення нової групи</li>
                <li>• Редагування складу</li>
                <li>• Розклад групи</li>
              </ul>
            </li>
            <li className="list-group-item">Успішність
              <ul className="list-unstyled ms-3 mt-2">
                <li>• Поточні оцінки</li>
                <li>• Відвідуваність</li>
                <li>• Академічна заборгованість</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Students;
