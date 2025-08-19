const orderTableBody = document.getElementById("order-table-body");
let orders = JSON.parse(localStorage.getItem("orders"));
if (orders == null ||orders.length === 0) {
    orders=[];
}

for(let i=0; i<orders.length; i++){
    orderTableBody.innerHTML += `
        <tr>
                    <td>
                        <div class="order-header">
                            <span class="order-number">Order : #${i+1}</span>

                        </div>
                    </td>
        
                    <td>
                        ${orders[i].map(orderItem => {
                            return `
                            <div class="order-details">
                                <div class = "order-details-item">
                                    <span>${orderItem.title}</span>
                                    <span>x${orderItem.quantity}</span>
                                </div>
                            </div>`
                        }).join("")}
                    </td>

                    <td>
                        <div class="order-total">
                            Total : $${orders[i].reduce((total, item) => total + (item.price * item.quantity), 0)}
                        </div>
                    </td>
                    <td>
                        <div class="order-status status-delivered">
                            <span class="delivered"> Delivered</span>
                        </div>
                    </td>
                </tr>`

}