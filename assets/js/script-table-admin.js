// =============  Data Table - (Start) ================= //

$(function(){

    $('#example').DataTable({
        ajax:{
            url: 'https://cms.istad.co/api/users',    
            dataSrc:""
        },
        columns:[
            {data:"id"},
            {data:"username"},
            {data:"email"},
            {data:"createdAt"},
            {data:"updatedAt"},
            
        ],
        dom: 'Blfrtip',
        buttons:['copy', 'csv', 'excel', 'pdf', 'print'],
    });
  
});



// =============  Data Table - (End) ================= //
