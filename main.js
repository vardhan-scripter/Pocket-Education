var data;
	$.ajax({
	  type: "GET",  
	  url: "file.csv",
	  dataType: "text",       
	  success: function(response)  
	  {
		data = $.csv.toArrays(response);
		displaydata(data);
	  }   
	});

    function displaydata(data) {
    var html = '';
 
      if(typeof(data[0]) === 'undefined') {
        return null;
      } else {
		$.each(data, function( index, row ) {
		html += '<tr>';
		$.each(row, function( index, colData ) {
		html += '<td>';
		html += colData;
		html += '</td>';
		});
		html += '<td><button>Delete</button><button>Edit</button></td></tr>';
		});
		$('#table-body').append(html);
	  }
	}
     function searchdata(){
        removeElement();
        var search = document.getElementById('data-for-search').value;
        var html = '';
        var data;
        $.ajax({
        type: "GET",  
        url: "file.csv",
        dataType: "text",       
        success: function(response)  
        {
            data = $.csv.toArrays(response);
            if(typeof(data[0]) === 'undefined') {
                return null;
            } else {
                $.each(data, function( index, row ) {
                if(row[0] == search){
                    html += '<tr>';
                    $.each(row, function( index, colData ) {
                    html += '<td>';
                    html += colData;
                    html += '</td>';
                    });
                    html += '<td><button>Delete</button><button>Edit</button></td></tr></tr>';
                }
                });
            if(html)
                $('#table-body').append(html);
            else
                $('#table-body').append('<tr><td>No Records Found</td><td>-</td><td>-</td></tr>');
        }
        }   
        });

   }
    function removeElement() {
        $(document).ready(function(){
        $("#table-body").empty();
});
}