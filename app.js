document.getElementById('submit').addEventListener('click', calculateResults);
document.getElementById('res').style.display = "none";

function calculateResults(e){
    
    let Percentage = parseFloat(document.getElementById('percent').value) ;
    let GPA =parseFloat(document.getElementById('gpa').value) ;

    let result = (Percentage/100)*GPA ;
    let res = result.toFixed(2);
    document.getElementById('res').style.display = "unset";

    document.getElementById('res').innerHTML = res ;

    e.preventDefault();

}