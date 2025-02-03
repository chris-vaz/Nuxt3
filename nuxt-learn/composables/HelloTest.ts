// ~/composables/HelloTest.ts

export function useHelloTest() {
    // A simple state variable with a default message
    const message = ref<string>("Hello from HelloTest composable!");

    // A method to update the message
    function updateMessage(newMessage: string) {
        message.value = newMessage;
    }

    // A method that simulates an API call or a long computation
    async function fetchData() {
        message.value = "Fetching data...";
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
        message.value = "Data successfully fetched! 🎉";
    }

    // Return the state and methods to use in components
    return {
        message,
        updateMessage,
        fetchData,
    };
}
