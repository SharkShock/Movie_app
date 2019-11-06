
export default function getData(searchId,page){
  return  fetch('http://www.omdbapi.com/?s='+searchId+'&page='+page+'&apikey=389e0102')
  .then(response => response.json());
}