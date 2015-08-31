var loadProfile = function(data){
    $('.user-wrapper img').attr("src", data.Picture);

    $('.description h4').html('<strong>' + data.Firstname + " " + data.Surname + ' </strong><a href="mailto:' +
        data.Email + '"><div class="btn-group fa fa-envelope">' +
        '</div></a>');

    $('.description p').html('<p>' + data.Division + '<br>' + data.Phone + '<br>' + data.Mobile + '</p>');

    $('.summary p').html(data.summary);

    var skillString = "";
    for(var skill in data.SkillSet){
        skillString += '<div class="progress">' +
            '<div data-placement="top" style="width: ' + (skill.count()/20.0) + '%;"' +
        'aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-success">'+
            '<span class="sr-only">90%</span>' +
            '<span class="progress-type">' + skill.key() + '</span>' +
            '</div></div>';
    }

    skillString += '<div class="progress-meter">' +
        '<div style="width: 25%;" class="meter meter-right"><span class="meter-text">20+ Supported</span></div>' +
        '<div style="width: 25%;" class="meter meter-right"><span class="meter-text">15</span></div>' +
        '<div style="width: 25%;" class="meter meter-right"><span class="meter-text">10</span></div>' +
        '<div style="width: 25%;" class="meter meter-right"><span class="meter-text">5</span></div>' +
        '</div>';

    $('.skills ul a').html(skillString);

    var personalExpString = "";
    var i = 1;
    for(var exp in data.PersonalExperience){
        if(i++%2 == 0)
            personalExpString += '<li>';
        else
            personalExpString += '<li class="timeline-inverted">';

        personalExpString += '<div class="timeline-panel">' +
            '<div class="timeline-heading">' +
            '<h4 class="timeline-title">' + exp.Title + '</h4>' +
            '<p><small class="text-muted"><i class="fa fa-clock-o"></i>' + exp.Time + '</small> <br>' +
            '<small class="text-muted"><i class="fa fa-th-large"></i>' + exp.Company + '</small>' +
            '</p>' +
            '</div>' +
            '<div class="timeline-body">' +
            '<p>' + exp.JobDescription + '</p>'+
            '</div>'+
            '</div>';
    }
    $('.update-timeline').html(personalExpString);
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}

var updateProfile = function(){
    var id = getQueryVariable("id");
    $.get( "GetProfile/" + id, function( data ) {
        loadProfile(data);
    });
}

updateProfile();
