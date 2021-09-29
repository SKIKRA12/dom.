var quantite=0;
function ajouter()
{
    quantite++;
 var quantiteText=getElementbyId("quantity");
quantiteText.innerHTML=quantite;

} 
function diminuer()
{
if(quantite>0)
{
    quantite--;
    var quantiteText=getElementbyId("quantity");
quantiteText.innerHTML=quantite;
} 
} 