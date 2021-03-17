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
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newTask = {
            task_name: $("#task_name").val().trim(),
            task_description: $("#task_description").val().trim()
        };

        $.ajax("/api/tasks", {
            type: "POST",
            data: newTask
        }).then(function() {
            console.log("Task Created");
            location.reload();
        })
    })

    $(".adder-reveal").on("click", function() {

        console.log("Clicked")
        $(this).remove()
        $(".adder").show();
    })
})