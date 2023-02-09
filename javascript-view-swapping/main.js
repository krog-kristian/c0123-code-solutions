var $tabBar = document.querySelector('.tab-container');
// console.log('tabs bar:', $tabBar);

var $tabs = document.querySelectorAll('.tab');
// console.log('tabs:', $tabs);

var $tabsContent = document.querySelectorAll('.view');
// console.log('views:', $tabsContent);

$tabBar.addEventListener('click', function tabChanger(event) {
  var $eventTargetClasses = event.target.className;
  if ($eventTargetClasses.includes('active')) {
    return;
  }
  if (event.target.matches('.tab')) {
    // console.log('tab found:', event.target);
    for (var i = 0; i < $tabs.length; i++) {
      if (event.target === $tabs[i]) {
        // console.log('matching works!', $tabs[i]);
        $tabs[i].classList.add('active');
      } else {
        $tabs[i].classList.remove('active');
      }
    }
    var $dataView = event.target.getAttribute('data-view');
    // console.log('data view:', $dataView);
    for (var k = 0; k < $tabsContent.length; k++) {
      if ($dataView === $tabsContent[k].getAttribute('data-view')) {
        // console.log('matched tabs and content');
        $tabsContent[k].classList.remove('hidden');
      } else {
        $tabsContent[k].classList.add('hidden');
      }
    }
  }
});
