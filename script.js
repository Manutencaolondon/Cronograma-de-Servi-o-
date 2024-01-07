//Relógio que esta oculto
document.addEventListener("DOMContentLoaded", function() {
            var inputHoraAtual = document.getElementById("horaAtual");
            
            var dataAtual = new Date();
            var hora = dataAtual.getHours();
            var minutos = dataAtual.getMinutes();

            // Adiciona um zero à frente se for menor que 10
            hora = hora < 10 ? "0" + hora : hora;
            minutos = minutos < 10 ? "0" + minutos : minutos;

            var horaFormatada = hora + ":" + minutos;
            
            inputHoraAtual.value = horaFormatada;
        });
