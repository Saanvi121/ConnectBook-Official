function addUser()
{
    user_name = document.getElementById("user_name").value
    localStorage.setItem("user_name", user_name)
    document.getElementById("user_name").innerHTML = ""
    window.location = "kwitter_room.html"
}