export const tabsWork = function () {
  const tabs = document.querySelectorAll('.tabs__tab');
  const paymentContentBlocks = document.querySelectorAll('.payment__content');


  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const currentTab = tab;
      const tabId = currentTab.getAttribute("data-tab");
      const currentBlock = document.querySelector(tabId);
      tabs.forEach((tab) => {
        tab.classList.remove("tabs__tab_active");
      })

      paymentContentBlocks.forEach((block) => {
        block.classList.remove("payment__content_active");
      }) 

      currentTab.classList.add('tabs__tab_active');
      currentBlock.classList.add('payment__content_active')
    })
  })

}

