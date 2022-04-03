$(document).ready(() => {
    const prices = [{
        "id": "1",
        "name": "Caramel Pecanbon Bites",
        "description": "try our product",
        "price": 50 + " LE ",
        "img": "CaramelPecanbonBites",
    }, {
        "id": "2",
        "name": "Caramel Pecanbon Roll",
        "description": "try our product",
        "price": 100 + " LE ",
        "img": "CaramelPecanbonRoll",
    }, {
        "id": "3",
        "name": "Caramel Chocobon Bites",
        "description": "try our product",
        "price": 200 + " LE ",
        "img": "Chocobon",
    },
        {
            "id": "4",
            "name": "Caramel Chocobon Bites",
            "description": "try our product",
            "price": 200 + " LE ",
            "img": "Chocobon",
        },
        {
            "id": "5",
            "name": "Caramel Chocobon Bites",
            "description": "try our product",
            "price": 200 + " LE ",
            "img": "Chocobon",
        },

    ]

    for (let i = 0; i < prices.length; i++) {

        let meal = `
    <div class="flexRow space product" id="${prices[i].id}">
        <img src="Resources/Images/${prices[i].img}.jpg" alt="product-image" class="image1">
        <div class="flexCol" >
            <h1>${prices[i].name}</h1>
            <p>${prices[i].description}</p>
            <p class="cartPrice">${prices[i].price}</p>
        </div>
        <div class="flexRow" id="buttons">
            <button class="btn1 addToCart">Add to Cart</button> 
            <button class="incDec remove hidden btn btn-danger" id="remove">Remove</button>
            <button class="incDec plus hidden btn btn-warning "> + </button>
            <div  class="hidden countItems">1</div>
            <button class="incDec decs hidden btn btn-warning "> - </button> 
        </div>
    </div>
`
        $(() => {
            $("#products").append(meal)
        })

    }


function Buttons(){
    // removing btn
    $("#droppable .remove").removeClass("hidden").click(function (target) {

    });

    // adding btn
    $("#droppable .plus").removeClass("hidden").click((e) => {
        e.stopPropagation();
        arr[arr.findIndex(value => {return value.id === itemId})].count++;
        console.log(arr);
    });


    $("#droppable .decs").removeClass("hidden").click(function (target) {
        arr[arr.findIndex(value => {return value.id === itemId})].count--;
        if(arr[arr.findIndex(value => {return value.id === itemId})].count === 0){
            console.log("stop");
        }
        console.log(arr);
    });
}

    let arr = [];
    let totalSubTotal=0;
    let totalDelivery =0;

    $(function () {

        $(".product").draggable({helper: "clone", revert: "invalid"});
        $("#droppable").droppable({
            accept: ".product",
            drop: function (event, ui) {
                let itemId = ui.helper.prevObject[0].id
                let index = arr.findIndex(value => {return value.id === itemId})

                if (arr.findIndex(value => {return value.id === itemId}) === -1) {
                    arr.push({"id": itemId, "count": 1});
                    let draggedItem = $(ui.draggable).clone();
                    $(this).append(draggedItem)
                    $("#droppable .addToCart").addClass("hidden");


                    Buttons();

                } else {
                    arr[index].count++;

                    console.log(arr)
                }
                console.log(arr)

                let id = arr[arr.findIndex(value => {return value.id === itemId})].id
                let DragCount = $(" #droppable "+"#"+id+ " .countItems " );
                DragCount.removeClass("hidden")
                DragCount.text(arr[arr.findIndex(value => {return value.id === itemId})].count)


                let itemPrice = parseFloat($(" #droppable "+"#"+id+ " .cartPrice ")[0].innerText);
                console.log("itemPrice = " + itemPrice)
                let countItems = parseFloat($(" #droppable "+"#"+id+ " .countItems " )[0].innerText);
                console.log("countItems = " +  countItems)



                totalSubTotal += itemPrice;
                console.log(" totalSubTotal= " + totalSubTotal)
                let Delivery = 20;
                totalDelivery = Delivery + totalSubTotal;
                let VAT = Number(.14 * totalDelivery).toFixed(2) ;
                let total =  .14 * totalDelivery + totalDelivery;

                $("#subT").text(totalSubTotal)
                $("#subD").text(totalDelivery)
                $("#subV").text(VAT)
                $("#tot").text(total)

            }
        });
    });



    $(()=>{
        $('.product').on('click','#buttons .addToCart',(target)=>{
          let xParentElement = target.currentTarget.parentElement.parentElement.cloneNode(true);

            if (arr.findIndex(value => {return value.id === xParentElement.id}) === -1) {
                $("#droppable").append(xParentElement)
                arr.push({"id": xParentElement.id, "count": 1});
                $("#droppable .addToCart").addClass("hidden");
                Buttons();
            }else{
                  let index = arr.findIndex(value => {return value.id === xParentElement.id})
                  arr[index].count++;
                  let counterItems =$(`#droppable #${arr[index].id} .countItems`).removeClass("hidden")
                  counterItems[0].innerText = arr[index].count
            }

            // calculations
            let itemCount  = parseFloat($("#droppable .countItems")[0].innerText)
            let itemPrice = parseFloat($("#droppable .cartPrice")[0].innerText)


            totalSubTotal += itemPrice;
            let Delivery = 20;
            totalDelivery = Delivery + totalSubTotal;
            let VAT = Number(.14 * totalDelivery).toFixed(2) ;
            let total =  .14 * totalDelivery + totalDelivery;

            $("#subT").text(totalSubTotal)
            $("#subD").text(totalDelivery)
            $("#subV").text(VAT)
            $("#tot").text(total)




            // remove
            let index = arr.findIndex(value => {return value.id === xParentElement.id})
            $(`#droppable #${arr[index].id} .remove`).removeClass("hidden").click( (target)=> {
                    console.log(target.delegateTarget.parentElement.parentElement)
                    $(target.delegateTarget.parentElement.parentElement).remove();
                    let index = arr.findIndex(value => {return value.id ===  xParentElement.id})
                    arr.splice(index,1)
                totalSubTotal -= itemPrice;
                if(totalSubTotal === 0){
                    $("#subT").text(totalSubTotal)
                    $("#subD").text("0")
                    $("#subV").text("0")
                    $("#tot").text("0")
                }
            });

        })
    })





})




