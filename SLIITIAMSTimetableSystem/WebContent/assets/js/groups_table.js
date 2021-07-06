$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="1" id="1"></td>' +
            '<td><select class="form-control" name="2" id="2"><option>IT</option><option>SE</option><option>DS</option><option>ISE</option><option>CSNE</option><option>CS</option><option>IM</option></td>' +
           
            '<td><select class="form-control" name="3" id="3"><option>Y1.S1</option><option>Y1.S2</option><option>Y2.S1</option><option>Y2.S2</option><option>Y3.S1</option><option>Y3.S2</option><option>Y4.S1</option><option>Y4.S2</option></td>' +
           
            '<td><input type="text" class="form-control" name="4" id="4"></td>' +
            '<td><input type="text" class="form-control" name="5" id="5"></td>' +
            '<td><input type="text" class="form-control" name="6" id="6"></td>' +
            
    		'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});