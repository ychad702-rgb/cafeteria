
const navbar = document.getElementById("mainNavbar");
const stickyPoint = navbar.offsetTop; 

function handleScroll() {
    if (window.scrollY >= stickyPoint) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


window.onscroll = handleScroll;



const modal = document.getElementById("reservationModal");
const form = document.getElementById("reservationForm");


function openModal() {
    modal.style.display = "block";
}


function closeModal() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

  
    if (name && date && time && guests) {
      
        alert(`¡Reserva confirmada! \nDetalles:\n- Nombre: ${name}\n- Fecha y Hora: ${date} a las ${time}\n- Personas: ${guests}\n\nGracias por elegir DULCE AROMA. Pronto nos pondremos en contacto.`);
        
      
        form.reset();
        closeModal();
    } else {
        alert("Por favor, complete todos los campos requeridos.");
    }
});