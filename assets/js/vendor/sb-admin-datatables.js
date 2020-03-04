// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable1').DataTable({
	  "searching": true,
      "paging": true, 
      "info": true,         
      "lengthChange":true 
  });
  $('#dataTable').DataTable({
      'paging'      : true,
      'lengthChange': true,
      'searching'   : true,
      'ordering'    : true,
      'info'        : true,
      'autoWidth'   : false
    })
});
