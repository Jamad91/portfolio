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

    var projectLinks = $('.project-links').children()
    console.log(projectLinks);
    projectLinks.each(idx => {
      var link = projectLinks[idx]
      $(link).on('mouseover', () => {
        $(link).addClass('project-hover')
      })
      $(link).on('mousedown', () => {
        $(link).addClass('project-clicked')
        console.log(link);
      })
      $(link).on('mouseleave' || 'mouseup', () => {
        $(link).removeClass('project-hover')
        $(link).removeClass('project-clicked')
      })
    })

});
