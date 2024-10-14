function change(show,hide,green,white){
    document.getElementById(show).classList.remove('hidden');
    document.getElementById(hide).classList.add('hidden');
    document.getElementById(green).classList.remove('bg-white');
    document.getElementById(green).classList.add('bg-[#B4F461]');
    document.getElementById(white).classList.remove('bg-[#B4F461]');
}

























// noakhali card
document.getElementById('btn-donate-now')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = document.getElementById('input-add-money').value;
        
        const noakhali = document.getElementById('noakhali-balance').innerText;

        if(isNaN(noakhali)){
            alert("invalid number");
        }
        const modal = document.getElementById('my_modal_10');
        modal.showModal();

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



    //feni card
    document.getElementById('btn-donate-now2')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = document.getElementById('input-add-money2').value;
        
        const feni = document.getElementById('feni-balance').innerText;

        if(isNaN(feni)){
            alert("invalid number");
        }
        const modal = document.getElementById('my_modal_10');
        modal.showModal();

        const totalBalance = parseFloat(addMoney) + parseFloat(feni); 
        
        document.getElementById('feni-balance').innerText = totalBalance;

        // total amount calculation
        const accountBalance = document.getElementById('account-balance').innerText;
        
        const totalAmount = parseFloat(accountBalance) - parseFloat(addMoney);
        
        document.getElementById('account-balance').innerText = totalAmount;
        
        // history section 
        const p = document.createElement('p');
        p.innerText = `${addMoney} Donate for Flood Relief in Feni,Bangladesh`;
       

        // should be a common function
        document.getElementById('history-section').appendChild(p);

    })    


    // Qouta card 
    document.getElementById('btn-donate-now3')
    .addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = document.getElementById('input-add-money3').value;
        
        const qouta = document.getElementById('qouta-balance').innerText;

        const modal = document.getElementById('my_modal_10');
        modal.showModal();


        if(isNaN(qouta)){
            alert("invalid number");
        }
        
        const totalBalance = parseFloat(addMoney) + parseFloat(qouta); 
        
        document.getElementById('qouta-balance').innerText = totalBalance;

        // total amount calculation
        const accountBalance = document.getElementById('account-balance').innerText;
        
        const totalAmount = parseFloat(accountBalance) - parseFloat(addMoney);
        
        document.getElementById('account-balance').innerText = totalAmount;
        
        // history section 
        const p = document.createElement('p');
        p.innerText = `${addMoney} Aid for Injured in the Quota Movement`;
       

        // should be a common function
        document.getElementById('history-section').appendChild(p);

    })