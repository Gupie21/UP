$(document).ready(function() {
      $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget)
        var recipient = button.data('whatever') 
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
        $('.carousel').carousel({
        pause: "table-hover"
        })
      });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      });

      $(function () {
        $('[data-toggle="popover"]').popover()
      })
    });

var contador = 1;
 /*
  function cambiarClase(){
    if (contador == 1) {
      document.getElementById('navbar-brand').className = 'animated bounce';
      contador = 2;
    } else {
      document.getElementById('navbar-brand').className = '';
      contador = 1;
    }
  }
 
  document.getElementById('accion').onclick = cambiarClase;

