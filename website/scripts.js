document.querySelector('.send-btn').addEventListener('click', function() {
    const input = document.querySelector('.message-input');
    const message = input.value.trim();

    if (message) {
        const chatBody = document.querySelector('.chat-body');
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerHTML = `<p>You, ${new Date().toLocaleTimeString()}</p><p>${message}</p>`;
        chatBody.appendChild(newMessage);
        input.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
});
window.onload = function() {
    const productData = sessionStorage.getItem('selectedProduct');
    
    if (productData) {
        const product = JSON.parse(productData);

        const chatBody = document.querySelector('.chat-body');

        const newMessage = `
            <div class="message sent">
                <p>You, ${new Date().toLocaleTimeString()}</p>
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                <p>Order: ${product.name} - ${product.price}</p>
            </div>
        `;
        chatBody.innerHTML += newMessage;

        sessionStorage.removeItem('selectedProduct');
    }
};