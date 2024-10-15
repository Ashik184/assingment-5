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
        const modal = document.getElementById('my_modal_1');
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
        const modal = document.getElementById('my_modal_1');
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

        const modal = document.getElementById('my_modal_1');
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
        // const p = document.createElement('p');
        // p.innerText = `${addMoney} Aid for Injured in the Quota Movement`;
        const history=document.createElement('div');
        const bdTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', hour12: true });
        history.innerHTML=` <div class="w-[400px] lg:w-[1024px] mx-auto p-6 bg-white border border-[#1111111A] rounded-lg   items-center space-x-4 mb-6">
            
              <p class="text-black font-normal text-lg"><span class="quota-tk"></span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p> <br>
                  <p class="text-black font-normal text-lg">Time: ${bdTime}</p> 
    
            </div>` ;
            document.getElementById('history-section').appendChild(history);
            const quotaTk=history.querySelector('.quota-tk');
        quotaTk.innerText=addMoney;

        // should be a common function
        document.getElementById('history-section').appendChild(p);


    })