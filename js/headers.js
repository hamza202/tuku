"use strict";
var KTDatatablesBasicHeaders = function() {

	var initTable1 = function() {
		var table = $('#kt_table_1');

		// begin first table
		table.DataTable({
			responsive: true,
			"language": {
				"emptyTable":     "لا يوجد بيانات في الجدول",
				"lengthMenu":     "عرض _MENU_ صفوف",
				"search":         "بحث",
				"infoEmpty":      "يتم اظهار 0 الى 0 من اصل 0 صف",
				"info":           "يتم اظهار _START_ الى _END_ من اصل _TOTAL_ صفوف",
			}
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			initTable1();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesBasicHeaders.init();
});