/* Create fake data for search bar @ top of page */

$(function(){
  var fakeData = [
    { value: 'Daily Traffic', data: 'Traffic' },
    { value: 'Hourly Traffic', data: 'Traffic' },
    { value: 'Monthly Trafic', data: 'Traffic' },
    { value: 'Monthly Traffic', data: 'Traffic' },
    { value: 'Android', data: 'Mobile Users' },
    { value: 'Blackberry', data: 'Mobile Users' },
    { value: 'iPhone', data: 'Mobile Users' },
    { value: 'Tablets', data: 'Mobile Users' }

  ];
  // Make fake data searchable in searchbar
  // setup autocomplete function pulling from fakeData[] array
  $('#search').autocomplete({
    lookup: fakeData,
     onSelect: function (suggestion) {
      var thehtml = suggestion.value + suggestion.data;
      //$('#outputcontent').html(thehtml);
    }
  });


});
