function task1 () {
      function createLinkProduct(category) {
            return function(artikul) {
                  return `https://myshop.ru/${category}/${artikul}`;
            }
      }

      createPCLink=createLinkProduct('pc');
      createMonitorLink=createLinkProduct('monitors');
      createNotebooksLink=createLinkProduct('notebooks');
      console.log(createPCLink(1001));
      console.log(createNotebooksLink(4004));
      console.log(createMonitorLink(345));
}

function task2(orders) {
      function showOrder() {
            let str=`Покупатель ${this.fio} заказал ${this.tovar} на сумму ${this.price*this.quantity}`;
            console.log(str);
      }

      orders.forEach(elem => showOrder.call(elem));
}

function task3 (orders) {
      function showOrder(sale, sum) {
            let str=`Покупатель ${this.fio} заказал ${this.tovar} на сумму ${this.price*this.quantity}. Предоставляемая скидка ${sale}%. Итоговая сумма заказа ${sum}`;
            console.log(str);
      }

      // Решила немного разнообразить результат
      let sale;
      orders.forEach(function (elem) {
            if ((elem.price*elem.quantity)>=11000)
                  showOrder.call(elem, 10, (elem.price*elem.quantity*0.9));
            else
                  showOrder.call(elem, 0, elem.price*elem.quantity);
      });
}

function task4 () {
      function Menu(...navList){
            this.navList=navList;
            this.wrapperA=function(...item){
                return this.navList.map((elem, i)=>`<a href='${elem}'>${item[i]}</a>`);
            }
        }
        let mainMenu=new Menu("home.html","services.html","price.html","about.html");
      //   for (elem of mainMenu.navList)
      //       console.log(elem); 
      console.log(mainMenu.wrapperA('Домашняя страница', 'Сервисы', 'Цены', 'О компании'));
        let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
      //   for (elem of footerMenu.navList)
      //       console.log(elem);
      console.log(footerMenu.wrapperA('Новая страница', 'Проверка страницы', 'SEO-страница'));     
}