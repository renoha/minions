var loadSearchResult = function(data){
    var searchResultString = "";
    var i = 0;

    for(var items in data){
        i++;
        if(i%2==1){
            searchResultString += '<div class="row">';
        }
        searchResultString += genOneResult(items);
        if(i%2==0)
            searchResultString += '</div>';
        if(i>= 10)
            break;
    }

    $('.container-fluid').html(searchResultString);
}

var genOneResult = function(data){
    var oneString = '<div class="col-lg-6 col-md-6">' +
        '<div class="media block-update-card">' +
        '<a class="pull-left" href="#">' +
        '<img class="media-object update-card-MDimentions" src="' + data.Picture + '" alt="...">' +
        '</a><div class="media-body update-card-body"><div><h2 class="media-heading">' +
        '<a href="profile.html?id="' + data.MPid + '>' + data.Firstname + " " + data.Surname + '</a>' +
        '<a  href="mailto:vanessa.zhang@credit-suisse.com"><div class="btn-group fa fa-envelope">' +
        '</div></a></h2></div><p>Information Technology <br>+852 3969 5469</p></div></div>' +
        '<div class="block-update-card status"><div class="update-card-body"><div class="update-card-body">' +
        '<h4>Hong Kong</h4><p>This is me. I am working in Equity Derivatives Information Technology team in Hong Kong.</p></div></div>' +

        '<div class="card-action-pellet btn-toolbar pull-right" role="toolbar">' +
        '<div class="btn-group fa fa-mail-reply"></div>'+
        '<div class="btn-group fa fa-map-marker"></div>' +
        '<div class="btn-group fa fa-magic"></div>'+
        '<div class="btn-group fa fa-photo"></div></div></div></div>';

    return oneString;
}

var search = function(){
    var request = $("#searchRequest").val();
    $.get( "SearchProfile/", [request], function( data ) {
        loadSearchResult(data);
    });
    console.log("hi");
}

$('#searchBtn').click(search);
