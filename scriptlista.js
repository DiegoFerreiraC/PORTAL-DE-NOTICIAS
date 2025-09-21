document.getElementById('search').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    
    
    let newsItems = document.querySelectorAll('.outra-noticia-single2');
    
    
    newsItems.forEach(function(item) {

        let title = item.querySelector('h3') ? item.querySelector('h3').textContent.toLowerCase() : '';
        let description = item.querySelector('p') ? item.querySelector('p').textContent.toLowerCase() : ''; 
        
       
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';  
        } else {
            item.style.display = 'none';  
        }
    });
});