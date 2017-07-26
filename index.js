$(document).ready(function() {
    var tabs = $('#tabs').children()
    var activeTab = $('.active-tab')
    var viewSections = $('.view-section')

    tabs.each((idx) => {
      var selected = $(tabs[idx])

      $(tabs[idx]).click(()=>{
        $(tabs).removeClass('active-tab');
        $(selected).addClass('active-tab');

        var sectionName = $(selected).attr('id').split('-')[0];
        $(viewSections).addClass('inactive');
        // console.log($(`.${sectionName}`));
        $(`#${sectionName}`).removeClass('inactive');

      })

    })

    // $(document).keydown((e)=>{
    //   if (e.keyCode === 37 || e.keyCode ===39){
    //     inactiveSwap();
    //   }
    // })
});
