// var json=[
//     {
//         "id": 1,
//         "songName": "You are the reason",
//         "singer": "Calumn Scoot",
//         "viewSong": 1345
//     },
//     {
//         "id": 2,
//         "songName": "You are the reason",
//         "singer": "Calumn Scoot",
//         "viewSong": 1345
//     },
//     {
//         "id": 3,
//         "songName": "You are the reason",
//         "singer": "Calumn Scoot",
//         "viewSong": 1345
//     },
//     {
//         "id": 4,
//         "songName": "You are the reason",
//         "singer": "Calumn Scoot",
//         "viewSong": 1345
//     }
// ]

function render(json){
    var data=JSON.parse(json);
    var content=data.map(function(item){
        var html="";
        html+='<div class="weekly-item">'
        html+='<div class="number">'+item.id+'</div>'
        html+='<div class="info">'+'<div class="song-title">'+item.songName+'</div>'
        html+='<div class="singer">'+item.singer+'</div></div>'
        html+='<div class="view-count">'+item.viewSong+'</div>'
        html+="</div>"
        return html;
    })
    document.getElementsByClassName('weekly-items')[0].innerHTML=content.join(' ');
}

function callAPI(method, url){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState===4){
            render(this.responseText);
        }
    }
    xhttp.open(method, url, true)
    xhttp.send()
}
document.addEventListener('DOMContentLoaded', function () {
    callAPI(
        'GET',
        'zing.json'    
    )
})