let equipmentList = [
    {
        name:'Running shoes',
        icon:'fas fa-shoe-prints',
        quantity: 2,
        hasQuantity: 2
    },
    {
        name:'Running T-Shirt',
        icon:'fas fa-tshirt',
        quantity: 2,
        hasQuantity: 1
    },
    {
        name:'Watter bottle',
        icon:'fas fa-wine-bottle',
        quantity: 1,
        hasQuantity: 0
    }
];

const STATE = {
    SHOW_ALL:{
        msg: 'Show missing!'
    },
    SHOW_MISSING:{
        msg: 'Show all!'
    }
};

let state = STATE.SHOW_ALL;

function initEquipmentList(){
    let params = new URLSearchParams(window.location.search);
    let activityId = params.get('activity_id');
    equipmentList = DATA[activityId].equipment;
}

function init(){
    let showButton = $('#show-button');
    showButton.text(state.msg);
    showButton.on('click', handleShowButtonClick);
    renderList(equipmentList);
}

function drawEquipmentList(){
    state = state === STATE.SHOW_ALL ? STATE.SHOW_MISSING : STATE.SHOW_ALL;
    let showButton = $('#show-button');
    showButton.text(state.msg);
    let currentEquipmentList = equipmentList;
    if(state === STATE.SHOW_MISSING){
        currentEquipmentList = currentEquipmentList
                                .filter(equipment => equipment.quantity > equipment.hasQuantity)
                                .map(equipment => {
                                    let clone = Object.assign({}, equipment);
                                    clone.quantity = clone.quantity - clone.hasQuantity;
                                    return clone; 
                                });
    }
    renderList(currentEquipmentList);
}

function handleShowButtonClick(){
    let nodeEquipmentList = $('#equipment-list');
    nodeEquipmentList.animate(
        {
            opacity: 0.0
        },
        'fast',
        function(){
            drawEquipmentList();
            nodeEquipmentList.animate(
                {
                    opacity: 1.0
                },
                'fast',
                function(){}
            );
        }
    );
}

function renderList(equipmentList){
    let nodeEquipmentList = $('#equipment-list');
    nodeEquipmentList.empty();
    let genericEquipmentElement = $('#equipment-element');
    for(let equipment of equipmentList){
        let equipmentElement = genericEquipmentElement.clone();
        let equipmentName = equipmentElement.find('#equipment-name');
        let equipmentIcon = equipmentElement.find('#equipment-icon');
        let equipmentQuantity = equipmentElement.find('#equipment-quantity');
        equipmentName.text(equipment.name);
        equipmentIcon.attr('class', equipment.icon);
        equipmentQuantity.text(equipment.quantity);
        equipmentElement.removeAttr('hidden');
        nodeEquipmentList.append(equipmentElement);
    }
}

$(document).ready(
    function(){
        init();
    }
);