async function fetchData() {
    try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
    finally {
        console.log("Thank you for chosing us!!")
    }
}
// fetchData()


function validToVote(age) {
    try {
        // Code that may throw an exception
        if (age < 18) {
            throw new Error("Age shild should not be less the 18.");
        }
        console.log("Yes, You can Vote")
    } catch (error) {
        console.error("Error caught:", error.message);
    }
}
validToVote(18)