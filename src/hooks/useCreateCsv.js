
const useCreateCsv = () => {

//  var csvFileData = [
//     ['designer', 'Singer','Elham bagheri','2023/2/22'],
//['designer', 'Singer','Elham bagheri','2023/2/22']
//  ];
   
 //create a user-defined function to download CSV file 
 const downloadCsvFile = (data) =>{
     //create CSV file data in an array
    const csvFileData = data;
     //define the heading for each row of the data
     var csv = '<embers name,Group name,Creator,Creation date,Creation time\n';
     
     //merge the data with CSV
     csvFileData.forEach(function(row) {
             csv += row.join(',');
             csv += "\n";
     });
  
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     
     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'Group members.csv';
     hiddenElement.click();
 }
 return {downloadCsvFile}
}

export default useCreateCsv
