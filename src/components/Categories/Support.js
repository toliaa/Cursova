
import React from 'react';

function Support() {
  return (
    <div className="container mt-5 pt-5">
      <h2>Підтримка</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Контакти підтримки</h5>
              <div className="mt-3">
                <p><strong>Телефон:</strong><br/>+380 (44) 123-45-67</p>
                <p><strong>Email:</strong><br/>support@university.edu.ua</p>
                <p><strong>Графік роботи:</strong><br/>Пн-Пт: 9:00 - 18:00</p>
              </div>
              <button className="btn btn-primary w-100">Зв'язатися з нами</button>
            </div>
          </div>
        </div>
        
        <div className="col-md-8 mb-4">
          <div className="card">
            <div className="card-body">
              <h5>Часті запитання</h5>
              <div className="accordion mt-3" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Як відновити доступ до облікового запису?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show">
                    <div className="accordion-body">
                      Для відновлення доступу необхідно звернутися до адміністратора системи або використати форму відновлення паролю на сторінці входу.
                    </div>
                  </div>
                </div>
                
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      Як подати заявку на довідку?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      Заявку на довідку можна подати через особистий кабінет у розділі "Документи". Термін виготовлення - 3 робочі дні.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card mb-4">
        <div className="card-body">
          <h5>Останні звернення</h5>
          <table className="table">
            <thead>
              <tr>
                <th>Тема</th>
                <th>Статус</th>
                <th>Дата</th>
                <th>Дії</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Проблема з доступом до електронної бібліотеки</td>
                <td><span className="badge bg-warning">В обробці</span></td>
                <td>2024-01-15</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">Деталі</button>
                </td>
              </tr>
              <tr>
                <td>Питання щодо розкладу іспитів</td>
                <td><span className="badge bg-success">Вирішено</span></td>
                <td>2024-01-10</td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">Деталі</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Support;
