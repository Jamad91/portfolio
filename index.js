$(document).ready(function() {
    var tabs = $('#tabs').children()
    var activeTab = $('.active-tab')
    var viewSections = $('.view-section')

    tabs.each(idx => {
      var selected = $(tabs[idx])

      $(tabs[idx]).click(()=>{
        $(tabs).removeClass('active-tab');
        $(selected).addClass('active-tab');

        var sectionName = $(selected).attr('id').split('-')[0];
        $(viewSections).addClass('inactive');
        $(`#${sectionName}`).removeClass('inactive');

      })
    })

    var contactLinks = $('.contact-link')
    contactLinks.each(idx => {
      var link = contactLinks[idx]
      $(link).on('mouseover', () => {
        $(link).addClass('contact-hover')
      })
      $(link).on('mousedown', () => {
        $(link).addClass('contact-clicked')
      })
      $(link).on('mouseleave' || 'mouseup', () => {
        $(link).removeClass('contact-hover')
        $(link).removeClass('contact-clicked')
      })

    })

});
