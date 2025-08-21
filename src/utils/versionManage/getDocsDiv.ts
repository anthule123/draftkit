export function getDocsDiv(v: string){
   
    let docsDiv = 'docs'
    if(v!=='latest' && v) 
      docsDiv = 'versioned_docs/' + v; 
    return docsDiv;
  }
  