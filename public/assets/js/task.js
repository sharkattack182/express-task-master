$(function() {
    $(".complete").on("click", function(evemt) {
        var id = $(this).data("id");
        var newComplete = $(this).data("newcomplete");

        var newCompleteState = {
            completed: newComplete
        };

        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompleteState
        }).then(function() {
            console.log("changed task to " + newComplete);
            location.reload();
        })
    });





    // handle form subit

})