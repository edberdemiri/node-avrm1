const fs = require('fs');

fs.readFile('lorem.txt', 'utf8', (err,data) => {
    if(err){console.log('could not read from file')}

    console.log(`Broj na Karakteri:${data.length}`); //Broj na Karakteri
     
let data2 = data.split(' ');
console.log(`Broj na zborovi:${data2.length}`); //Broj na zborovi

let data3 = data.split(/[\.!?]/g); // Broj na recenici
console.log(`Broj na recenici:${data3.length}`);

const kar7 = (data) => // Funkcija za najdenje na zborovi so <=> od 7 karakteri 
{
    let more = 0;   
    let equal = 0;
    let less = 0; 
    let words = data.split(' ');
    for(i=0;i<words.length;i++)
    {
            if (words[i].length < 7){
                less++;
            }
            if (words[i].length == 7){
                equal++;
            }
            if (words[i].length > 7){
                more++;
            }
    }
    console.log(`Zborovi so poveke od 7 karakteri: ${more}`);
    console.log(`Zborovi so tocno 7 karakteri: ${equal}`);
    console.log(`Zborovi so pomalku od 7 karakteri: ${less}`);
}
kar7(data);




const povzbor = (data) =>  //Funkcija za najdenje na najpovtoreniot zbor
{
    var max = 0;
    var maxword = '';
    var words = data.split(' ');
    for(i=0;i<words.length;i++)
    {
        var count = 0;
        var word = '';
        for(j=0;j<words.length;j++)
        {
            if(j !== i && words[i] === words[j])
            {
                count++;
                word = words[i];
            }
        }
        if(count>maxword)
        {
            max = count;
            maxword = word;
        }
    }
    console.log(`Najmnogu povtoren zbor:${maxword}`);
}
povzbor(data);

});