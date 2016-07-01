/* Create member data */

$(function(){
  var names = [
    { value: 'Jason Flemmings', data: 'Member' },
    { value: 'John Smith', data: 'Member' },
    { value: 'Nicol Price', data: 'Member' },
    { value: 'Victoria Adams', data: 'Member' }


  ];

  // setup autocomplete function pulling from names[] array
  $('#searchMessages').autocomplete({
    lookup: names,
    onSelect: function (suggestion) {

     //$('#outputcontent').html(thehtml);
        var thehtml = suggestion.value + suggestion.data;
    }
  });


});
