$(function(){
    $(document).on('deviceready', function(){
        console.log('entrooou');

        $.ajax({
            type: 'GET',
            url: 'http://104.131.59.28:3000/api/bebidas',
            success: function(data){
                var bebidas = data;
                bebidas.forEach(function(item){
                    $('#list').append('<li><h1>'+item.descricao+'</h1></li>');
                });                
            }
        })
    });
});