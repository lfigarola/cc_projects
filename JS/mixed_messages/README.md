# Past Lives Generator

This project is part of the Codecademy curriculum, designed to enhance skills in JavaScript, HTML, and CSS while working with interactive web applications. The goal is to generate fun and imaginative descriptions of past lives using random combinations of predefined data.

For a detailed overview of the project, check out the [Project Description](./0.project.md).<br>
You can also check the [Roadmap](./1.1.roadmap.md)
Check the [Live Version](https://lfigarola.github.io/cc_projects/JS/mixed_messages/)

---

# Mixed Messages - Past lives - Scope

**1. <ins>Overview</ins>**  

This program generates fun and imaginative descriptions of past lives by combining data from four different arrays: characteristics, professions, actions, and causes. The output is a whimsical sentence describing a hypothetical past life, blending various elements to create intriguing and sometimes humorous scenarios.  

---

**2. <ins>Core Features</ins>**  

**Past Life Components:**  
The program will use four predefined arrays of data to construct a past life description:  
* *Characteristic*: Describes the nature or personality trait of the individual.  
* *Profession*: Defines the past-life occupation.  
* *Action*: Represents a notable or extraordinary event the individual achieved or experienced.  
* *Cause*: Explains the reason or motivation behind the action.

Each dataset will have 50 different options, *there are 6,250,000 possible combinations*.

**Random Sentence Generation:**  
The program will:  
1. Randomly select one element from each array (characteristic, profession, action, and cause).  
2. Combine them into a structured sentence of the format:  
   `You were a [characteristic] [profession] that [action], because you [cause].`

**Dynamic HTML Integration:**  
The generated sentence will be displayed dynamically on a web page using stylized spans for enhanced readability and visual distinction.  

**Interactive UI:**  
A button will trigger the generation of a new past life sentence, offering an engaging user experience.  

---

**3. <ins>Input and Output</ins>**  

**Input:**  
* Four predefined arrays: characteristics, professions, actions, and causes.  
* A user action (clicking a button) to generate a new past life description.  

**Output:**  
* A dynamically constructed sentence describing a past life, displayed on the web page.  
* Elements of the sentence will have distinct styles using `<span>` tags for enhanced readability and aesthetic appeal.  

---

**4. <ins>Expected Behavior</ins>**  
* The program will randomly select elements from the data arrays to construct a sentence that is grammatically correct, though not necessarily realistic or meaningful.  
* The randomness ensures high variability, making every output unique and potentially amusing or thought-provoking.  
* The web interface will allow users to generate multiple sentences interactively.  

---

**5. <ins>Technology Stack</ins>**  

* *Programming Language*: JavaScript (for functionality)  
* *HTML & CSS*: For the structure and styling of the web interface.  
* *JSON*: To store the predefined arrays of data for easy retrieval and maintenance.  
* *Web Server*: (e.g., Python HTTP server) for testing and ensuring proper loading of the JSON file.  

---

**6. <ins>Limitations</ins>**  
* The generated sentences are purely for entertainment and may lack logical coherence.  
* The randomness of the combinations could result in repeated outputs over time.  
* The program does not include complex linguistic rules or AI to enhance sentence meaning.
