$(document).ready(function() {
    var projects = $('#projects')
    var skills = $('#skills')

    function inactiveSwap() {
      projects.toggleClass('inactive')
      skills.toggleClass('inactive')
    }

    $('.nav-arrow').click(()=>{
      inactiveSwap();
    })

    $(document).keydown((e)=>{
      if (e.keyCode === 37 || e.keyCode ===39){
        inactiveSwap();
      }
    })
});
