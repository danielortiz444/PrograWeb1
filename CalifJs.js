
function evaluaRespuestas() {
    let score = 0;
    const form = document.getElementById('diagnosticForm');
    const resultDiv = document.getElementById('result');

    
    const q1 = form.querySelector('input[name="q1"]:checked');
    const q2 = form.querySelector('input[name="q2"]:checked');
    const q3 = form.querySelector('input[name="q3"]:checked');

    if (q1 && q1.value === "1") score++;
    if (q2 && q2.value === "1") score++;
    if (q3 && q3.value === "1") score++;

    // Mostrar la calificación
    resultDiv.innerHTML = `Puntuación: ${score} de 3`;

    // Llamar a la función para crear el gráfico
    createChart([1, 1, 1], [score, 3 - score, 0]); // [correct, incorrect, empty]
}


function createChart(labels, data) {
    var ctx = document.getElementById('scoreChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Respuestas Correctas', 'Respuestas Incorrectas', 'Sin Responder'],
            datasets: [{
                label: 'Resultados',
                data: data,
                backgroundColor: ['#4CAF50', '#F44336', '#FFC107'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
}

// Generar PDF con jsPDF
document.getElementById('desPDF').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Formulario de Diagnóstico", 20, 20);
    doc.text("Puntuación: " + document.getElementById('result').innerText, 20, 30);

    doc.addPage();
    doc.text("Gráfico de Resultados:", 20, 20);

    // Guardar el PDF
    doc.save('diagnostico_resultados.pdf');
});
