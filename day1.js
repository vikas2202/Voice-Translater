let speech = new SpeechSynthesisUtterance();
        let voices = [];
        let voiceSelect = document.querySelector("select");

        // Populate the voices list when they are loaded
        window.speechSynthesis.onvoiceschanged = () => {
            voices = window.speechSynthesis.getVoices();
            speech.voice = voices[0];  // Set default voice to the first one in the list

            // Populate the select dropdown with voice options
            voices.forEach((voice, i) => {
                let option = new Option(voice.name, i);
                voiceSelect.add(option);
            });
        };

        // Change voice based on user selection
        voiceSelect.addEventListener("change", () => {
            speech.voice = voices[voiceSelect.value];
        });

        // Speak the text when the button is clicked
        document.querySelector("button").addEventListener("click", () => {
            speech.text = document.querySelector("textarea").value;
            window.speechSynthesis.speak(speech);
        });