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