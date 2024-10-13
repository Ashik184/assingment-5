function change(show,hide,green,white){
    document.getElementById(show).classList.remove('hidden');
    document.getElementById(hide).classList.add('hidden');
    document.getElementById(green).classList.remove('bg-white');
    document.getElementById(green).classList.add('bg-[#B4F461]');
    document.getElementById(white).classList.remove('bg-[#B4F461]');
}


























document.getElementById('btn-donate-now')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = document.getElementById('input-add-money').value;
        
        const noakhali = document.getElementById('noakhali-balance').innerText;

        if(isNaN(noakhali)){
            alert("invalid number");
        }
        
        const totalBalance = parseFloat(addMoney) + parseFloat(noakhali); 
        
        document.getElementById('noakhali-balance').innerText = totalBalance;

        // total amount calculation
        const accountBalance = document.getElementById('account-balance').innerText;
        
        const totalAmount = parseFloat(accountBalance) - parseFloat(addMoney);
        
        document.getElementById('account-balance').innerText = totalAmount;
        
        // history section 
        const p = document.createElement('p');
        p.innerText = `${addMoney} Taka is  Donate for Flood at Noakhali, Bangladesh`;
       

        // should be a common function
        document.getElementById('history-section').appendChild(p);

    })