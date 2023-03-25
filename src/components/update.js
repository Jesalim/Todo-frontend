import React from "react";

export default function UpdateTodos () {

    let todo = [];
    
    function handleUpdate () {
        
    }


    return (
        <div class="card">
        <div class="card-body">
            <h1>Update task </h1><form>
        <div class="mb-3">
            <label for="Task Name" class="form-label">Task name</label>
            <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="Description" class="form-label">Description</label>
            <input type="text" class="form-control"/>
        </div>

        <button onClick={() => handleUpdate(todo.id)} class="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
    )
}