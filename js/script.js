$(document).ready(function () {
  $('a').click((e)=>{e.preventDefault()});

  $(".toggle-span").click(function () {
    $("#span-1").toggleClass("rotate45");
    $("#span-2").toggleClass("opacity-0");
    $("#span-3").toggleClass("rotate-45");
    $(".menu-nav-collapse").toggleClass("display-none");
  });

  const tabChange = function () {
    const tabs = $('.tabs-head > a');
    const active = tabs.filter('.active');
    const next = active.next('a').length ? active.next('a') : tabs.filter(':first-child');
    next.tab('show');
};
const tabCycle = setInterval(tabChange, 5000);

$('.tabs-head > a').on('click', function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab('show');
});
});
