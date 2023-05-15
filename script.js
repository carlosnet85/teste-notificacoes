// Verifica se o navegador suporta notificações
if ('Notification' in window) {
    // Função para pedir permissão ao usuário
    function pedirPermissao() {
        Notification.requestPermission()
            .then(function (result) {
                console.log('Permissão de notificação:', result);
                if (result === 'granted') {
                    mostrarNotificacao();
                }
            });
    }
}

// Função para exibir a notificação
function mostrarNotificacao() {
    var titulo = document.getElementById('titulo').value;
    var corpo = document.getElementById('corpo').value;
    
    if ('Notification' in window) {
        if (Notification.permission === 'granted') {
            new Notification(titulo, {
                body: corpo,
                icon: 'icone.png'
            });
        }
    }
}
