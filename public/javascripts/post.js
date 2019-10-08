$(document).ready(function () {
    $('#submit-work').click(function (event) {
        event.preventDefault();
        // below is for the post call
        var worktitle = $('#worktitle').val().trim()
        var codeurl = $('#codeurl').val().trim()
        var liveurl = $('#liveurl').val().trim()
        var skill1 = $('#skill1').val()
        var skill2 = $('#skill2').val()
        var skill3 = $('#skill3').val()
        var skill4 = $('#skill4').val()
        var skill5 = $('#skill5').val()
        var imgurl = $('#imgsrc').val()
        var description = $('#description').val().trim()

        var newWork = {
            worktitle: worktitle,
            liveurl: liveurl,
            codeurl: codeurl,
            skill1: skill1,
            skill2: skill2,
            skill3: skill3,
            skill4: skill4,
            skill5: skill5,
            description: description,
            imgurl: imgurl
        }

        // console.log(newUser)

        $.post('/api/work', newWork, function (data) {
            console.log(data)
            location.href = '/'
        })
    })

})