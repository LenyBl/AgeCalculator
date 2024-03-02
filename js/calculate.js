function calculate() {

    let dateOfBirth = document.getElementById("dateOfBirth").value;

    let date = new Date(dateOfBirth);
    let today = new Date();
    if (date > today) {
        alert("Date of Birth cannot be in the future");
        return;
    }
    let age = today.getFullYear() - date.getFullYear();
    let month = today.getMonth() - date.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
        age--;
    }

    const myPopup = new Popup({
        id: "myPopup",
        title: "Your Age",
        content: `You are ${age} years old.`,
    });

    myPopup.show();

}