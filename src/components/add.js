import React from "react";

export default function AddTodo () {



    return (
        <div class="card">
        <div class="card-body">
            <h1>Add task </h1><form>
        <div class="mb-3">
            <label for="Task Name" class="form-label">Task name</label>
            <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
            <label for="Description" class="form-label">Description</label>
            <input type="text" class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </div>
    )
}