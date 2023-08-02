import * as React from 'react';


export default function downloadZipFile(url, filename) { 
    const link = document.createElement('a'); 
    link.setAttribute('href', url); 
    link.setAttribute('download', filename); 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  } 

  const url = './files/Blue.zip'; 
  const filename = 'Blue.zip'; 
  downloadZipFile(url, filename); 